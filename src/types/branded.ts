declare const __brand: unique symbol;

export type Brand<T, B> = T & { readonly [__brand]: B };

export type CurrencyMMK = Brand<number, "CurrencyMMK">;
export type PlayerId = Brand<string, "PlayerId">;
export type ProductId = Brand<string, "ProductId">;
export type OrderId = Brand<string, "OrderId">;
export type MatchId = Brand<string, "MatchId">;

export function toMMK(value: number): CurrencyMMK {
  if (value < 0) {
    throw new Error("Currency amount cannot be negative");
  }
  return Math.round(value) as CurrencyMMK;
}

export function toPlayerId(id: string): PlayerId {
  if (!id.trim()) {
    throw new Error("Player ID cannot be empty");
  }
  return id.trim().toLowerCase() as PlayerId;
}

export function toProductId(id: string): ProductId {
  if (!id.trim()) {
    throw new Error("Product ID cannot be empty");
  }
  return id.trim() as ProductId;
}

export function toOrderId(id: string): OrderId {
  if (!id.startsWith("MS-")) {
    throw new Error("Invalid Order ID format. Expected MS-XXXXXX");
  }
  return id as OrderId;
}
