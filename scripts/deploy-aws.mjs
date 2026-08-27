import { execSync } from "child_process";

const BUCKET_NAME = "mythic-seal-prod-329042483226";
const REGION = "ap-southeast-1";
const DOMAIN = "myth.visionx.com.mm";
const FN_ARN = "arn:aws:cloudfront::329042483226:function/beetable-landing-url-rewrite";

function run(cmd) {
  console.log(`> ${cmd}`);
  return execSync(cmd, { encoding: "utf8" });
}

async function main() {
  console.log("=== 1. Building static export ===");
  run("npm run build");

  console.log("=== 2. Uploading static files from out/ to S3 ===");
  run(`aws s3 sync out/ s3://${BUCKET_NAME} --delete --region ${REGION}`);

  console.log("=== 3. Updating CloudFront Distribution with URL Rewrite Function ===");
  const distListStr = run(`aws cloudfront list-distributions --output json`);
  const distList = JSON.parse(distListStr);
  let targetDist = distList.DistributionList?.Items?.find(
    (d) => d.Aliases?.Items?.includes(DOMAIN)
  );

  if (targetDist) {
    const getCfgRes = JSON.parse(run(`aws cloudfront get-distribution-config --id ${targetDist.Id} --output json`));
    const distConfig = getCfgRes.DistributionConfig;
    const etag = getCfgRes.ETag;

    // Attach viewer-request rewrite function
    distConfig.DefaultCacheBehavior.FunctionAssociations = {
      Quantity: 1,
      Items: [
        {
          FunctionARN: FN_ARN,
          EventType: "viewer-request",
        },
      ],
    };

    fs.writeFileSync("dist-config-update.json", JSON.stringify(distConfig, null, 2));
    run(`aws cloudfront update-distribution --id ${targetDist.Id} --if-match ${etag} --distribution-config file://dist-config-update.json`);
    fs.unlinkSync("dist-config-update.json");
    console.log("CloudFront Distribution updated with URL rewrite function.");
  }

  console.log("=== 4. Invalidating CloudFront Cache ===");
  run(`aws cloudfront create-invalidation --distribution-id ${targetDist.Id} --paths "/*"`);
  console.log(`CloudFront cache invalidation created for ${targetDist.Id}`);

  console.log("\n========================================================");
  console.log(`🚀 All Systems Operational!`);
  console.log(`Live URL: https://${DOMAIN}`);
  console.log("========================================================\n");
}

main().catch((err) => {
  console.error("Deployment error:", err);
  process.exit(1);
});
