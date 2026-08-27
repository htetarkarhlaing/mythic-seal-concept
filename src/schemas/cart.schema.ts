import { z } from "zod";

export const CartItemSizeSchema = z.enum(["S", "M", "L", "XL", "2XL"]);
export type CartItemSize = z.infer<typeof CartItemSizeSchema>;

export const CartItemSchema = z.object({
  id: z.string().min(1, "Product ID is required"),
  name: z.string().min(1, "Product name is required"),
  price: z.number().nonnegative("Price must be greater than or equal to 0"),
  image: z.string().min(1, "Product image is required"),
  size: CartItemSizeSchema,
  customName: z.string().max(16, "Player name max 16 chars").optional(),
  quantity: z.number().int().positive("Quantity must be at least 1"),
});

export type CartItem = z.infer<typeof CartItemSchema>;

export const PromoCodeSchema = z.object({
  code: z.string().trim().toUpperCase(),
  discountPercentage: z.number().min(0).max(100),
  description: z.string(),
});

export type PromoCode = z.infer<typeof PromoCodeSchema>;

export const CheckoutFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phoneNumber: z.string().regex(/^[0-9+ ]{8,15}$/, "Invalid phone number format"),
  township: z.string().min(2, "Township/City is required"),
  address: z.string().min(5, "Delivery address is required"),
  paymentMethod: z.enum(["kpay", "wavepay", "cod"]),
  notes: z.string().max(200, "Notes cannot exceed 200 characters").optional(),
});

export type CheckoutFormData = z.infer<typeof CheckoutFormSchema>;
