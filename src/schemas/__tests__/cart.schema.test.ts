import { describe, it, expect } from "vitest";
import {
  CartItemSchema,
  PromoCodeSchema,
  CheckoutFormSchema,
} from "../cart.schema";

describe("Cart Zod Schemas Validation", () => {
  it("should validate a valid CartItem", () => {
    const validItem = {
      id: "jersey-2026-pro-L",
      name: "Official Pro Jersey 2026",
      price: 45000,
      image: "/images/shop/jersey-pro.png",
      size: "L",
      customName: "GALAXY",
      quantity: 2,
    };

    const result = CartItemSchema.safeParse(validItem);
    expect(result.success).toBe(true);
  });

  it("should reject negative price or invalid quantity", () => {
    const invalidItem = {
      id: "item-1",
      name: "Item",
      price: -500,
      image: "/img.png",
      size: "XL",
      quantity: 0,
    };

    const result = CartItemSchema.safeParse(invalidItem);
    expect(result.success).toBe(false);
  });

  it("should validate PromoCode schema", () => {
    const promo = {
      code: "seal2026",
      discountPercentage: 15,
      description: "15% off official gear",
    };

    const result = PromoCodeSchema.safeParse(promo);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.code).toBe("SEAL2026");
    }
  });

  it("should validate complete CheckoutFormData", () => {
    const validForm = {
      fullName: "Min Thant",
      phoneNumber: "09968888299",
      township: "Kamayut, Yangon",
      address: "No. 45, Insein Road",
      paymentMethod: "kpay",
      notes: "Please call before delivery",
    };

    const result = CheckoutFormSchema.safeParse(validForm);
    expect(result.success).toBe(true);
  });

  it("should reject invalid phone numbers", () => {
    const invalidForm = {
      fullName: "Min Thant",
      phoneNumber: "abc",
      township: "Kamayut",
      address: "No 45",
      paymentMethod: "kpay",
    };

    const result = CheckoutFormSchema.safeParse(invalidForm);
    expect(result.success).toBe(false);
  });
});
