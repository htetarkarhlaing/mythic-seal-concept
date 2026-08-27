import { test, expect } from "@playwright/test";

test.describe("Tournament Schedule & Match Center", () => {
  test("should render upcoming matches and status filter tabs", async ({
    page,
  }) => {
    await page.goto("/matches");

    await expect(page.getByRole("heading", { level: 1 })).toContainText("MATCH CENTER");
    await expect(page.getByText("TEAM MAX").first()).toBeVisible();
    await expect(page.getByText("GEG 2026 MYANMAR QUALIFIER").first()).toBeVisible();
  });

  test("should switch between schedule and standings tabs", async ({ page }) => {
    await page.goto("/matches");

    const standingsTab = page.getByRole("button", { name: "STANDINGS" });
    await standingsTab.click();

    await expect(
      page.getByRole("heading", { name: /OFFICIAL LEAGUE STANDINGS/i })
    ).toBeVisible();
  });
});
