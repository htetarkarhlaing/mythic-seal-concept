import { describe, it, expect, beforeEach } from "vitest";
import {
  useCartStore,
  selectSubtotal,
  selectDiscount,
  selectTotalCount,
  selectFinalTotal,
} from "../useCartStore";
import { ShopProduct } from "@/data/shop";

const mockProduct: ShopProduct = {
  id: "jersey-pro-2026",
  name: "Official Pro Jersey 2026",
  slug: "official-pro-jersey-2026",
  category: "JERSEYS",
  price: 45000,
  originalPrice: 55000,
  image: "/images/shop/jersey-pro-black.png",
  gallery: ["/images/shop/jersey-pro-black.png"],
  badge: "OFFICIAL",
  description: "Official team jersey.",
  features: ["Dry-fit fabric", "Reinforced stitching"],
  allowPlayerCustomization: true,
  inStock: true,
  stockCount: 15,
  sizes: ["S", "M", "L", "XL", "2XL"],
  rating: 4.9,
  reviewCount: 42,
  reviews: [],
};

describe("useCartStore - Enterprise State Management", () => {
  beforeEach(() => {
    useCartStore.getState().clearCart();
  });

  it("should initialize with an empty cart", () => {
    const state = useCartStore.getState();
    expect(state.items).toEqual([]);
    expect(selectTotalCount(state)).toBe(0);
    expect(selectSubtotal(state)).toBe(0);
    expect(selectDiscount(state)).toBe(0);
  });

  it("should add a product and calculate total count accurately", () => {
    useCartStore.getState().addItem(mockProduct, "L", 2);

    const state = useCartStore.getState();
    expect(state.items.length).toBe(1);
    expect(state.items[0]?.quantity).toBe(2);
    expect(selectTotalCount(state)).toBe(2);
    expect(selectSubtotal(state)).toBe(90000);
  });

  it("should correctly combine identical items with same size and customization", () => {
    useCartStore.getState().addItem(mockProduct, "M", 1, "GALAXY", "07");
    useCartStore.getState().addItem(mockProduct, "M", 2, "GALAXY", "07");

    const state = useCartStore.getState();
    expect(state.items.length).toBe(1);
    expect(state.items[0]?.quantity).toBe(3);
  });

  it("should apply voucher discount codes and calculate savings correctly", () => {
    useCartStore.getState().addItem(mockProduct, "L", 2); // 90,000 MMK subtotal

    const applied = useCartStore.getState().applyPromo("SEAL2026"); // 15% discount
    expect(applied).toBe(true);

    const state = useCartStore.getState();
    expect(state.appliedPromo).toBe("SEAL2026");
    expect(selectDiscount(state)).toBe(13500); // 90,000 * 0.15 = 13,500
    expect(selectFinalTotal(state)).toBe(76500);
  });

  it("should reject invalid promo codes gracefully", () => {
    const applied = useCartStore.getState().applyPromo("INVALID_CODE");
    expect(applied).toBe(false);
    expect(useCartStore.getState().appliedPromo).toBeNull();
  });

  it("should update quantity and remove item when reaching zero", () => {
    useCartStore.getState().addItem(mockProduct, "S", 1);
    const itemId = useCartStore.getState().items[0]?.id as string;

    useCartStore.getState().updateQuantity(itemId, 1);
    expect(useCartStore.getState().items[0]?.quantity).toBe(2);

    useCartStore.getState().updateQuantity(itemId, -2);
    expect(useCartStore.getState().items.length).toBe(0);
  });
});
