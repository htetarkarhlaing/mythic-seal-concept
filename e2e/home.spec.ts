import { test, expect } from "@playwright/test";

test.describe("Mythic SEAL Homepage & Core Architecture", () => {
  test("should load homepage with correct SEO title and JSON-LD structured data", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/MYTHIC SEAL/);

    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toContainText("SEAL THE DAY");

    const jsonLd = page.locator('script[type="application/ld+json"]');
    await expect(jsonLd).toHaveCount(1);
  });

  test("should open and dismiss video modal using Radix Dialog", async ({
    page,
  }) => {
    await page.goto("/");

    const watchNowBtn = page.getByRole("button", { name: "WATCH NOW" });
    await watchNowBtn.click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
  });
});
