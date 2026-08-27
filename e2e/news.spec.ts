import { test, expect } from "@playwright/test";

test.describe("News Hub & Press Releases", () => {
  test("should render news directory articles", async ({ page }) => {
    await page.goto("/news");

    await expect(page.getByRole("heading", { level: 1 })).toContainText("LATEST DISPATCHES");
    await expect(page.getByText("Mythic SEAL advances to GEG 2026 Semi Finals").first()).toBeVisible();
  });

  test("should open dynamic article detail page", async ({ page }) => {
    await page.goto("/news/geg-2026-advances");

    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Mythic SEAL advances to GEG 2026 Semi Finals"
    );
  });
});
