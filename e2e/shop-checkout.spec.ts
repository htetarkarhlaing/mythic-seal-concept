import { test, expect } from "@playwright/test";

test.describe("Shop & Checkout E2E User Journey", () => {
  test("should customize jersey, add to cart, and proceed to checkout", async ({
    page,
  }) => {
    await page.goto("/shop");

    // Check customizer IGN input
    const nameInput = page.getByPlaceholder("e.g. GALAXY");
    await nameInput.fill("CHAMPION");

    // Add custom jersey to cart
    const addCustomBtn = page.getByRole("button", {
      name: /ORDER CUSTOM/i,
    });
    await addCustomBtn.click();

    // Radix Dialog Cart Drawer should be open
    const drawer = page.getByRole("dialog");
    await expect(drawer).toBeVisible();

    // Verify customized item is present inside the cart drawer
    await expect(drawer.getByText("#07 CHAMPION")).toBeVisible();

    // Click Proceed to Checkout
    const checkoutBtn = page.getByRole("button", {
      name: /PROCEED TO CHECKOUT/i,
    });
    await checkoutBtn.click();

    // Fill Contact Information in Step 1
    await page.getByPlaceholder("e.g. Min Thant").fill("Aung Thu");
    await page.getByPlaceholder("09...").fill("09791234567");
    await page
      .getByPlaceholder("Street name, Ward, Township...")
      .fill("No. 12, Pyay Road, Yangon");

    // Continue to Step 2
    const nextBtn = page.getByRole("button", {
      name: /CONTINUE TO PAYMENT/i,
    });
    await nextBtn.click();

    // Step 2 should be active (Payment Selection)
    await expect(page.getByText("CHOOSE PAYMENT METHOD")).toBeVisible();
  });
});
