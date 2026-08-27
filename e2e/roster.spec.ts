import { test, expect } from "@playwright/test";

test.describe("Roster Directory & Player Profile Navigation", () => {
  test("should render championship roster cards and lane filters", async ({
    page,
  }) => {
    await page.goto("/roster");

    await expect(page.getByRole("heading", { level: 1 })).toContainText("MEET THE CHAMPIONS");
    await expect(page.getByText("GALAXY").first()).toBeVisible();
    await expect(page.getByText("JUSTIN").first()).toBeVisible();
    await expect(page.getByText("KENN").first()).toBeVisible();
  });

  test("should filter players by lane position", async ({ page }) => {
    await page.goto("/roster");

    const expLaneFilter = page.getByRole("button", { name: "EXP LANE" });
    await expLaneFilter.click();

    await expect(page.getByText("GALAXY").first()).toBeVisible();
  });

  test("should navigate to individual player detail route", async ({ page }) => {
    await page.goto("/roster/galaxy");

    await expect(page.getByRole("heading", { level: 1 })).toContainText("GALAXY");
    await expect(page.getByText("EXP LANE").first()).toBeVisible();
  });
});
