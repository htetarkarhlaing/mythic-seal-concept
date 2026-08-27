export type CheckoutStep =
  | "IDLE"
  | "CONTACT_FORM"
  | "PAYMENT_SELECTION"
  | "PROCESSING"
  | "ORDER_PLACED"
  | "FAILED";

export type PaymentMethod = "KBZPAY" | "WAVEPAY" | "AYAPAY" | "COD";

export interface ContactData {
  fullName: string;
  phone: string;
  address: string;
}

export interface CheckoutMachineState {
  step: CheckoutStep;
  contact: ContactData;
  paymentMethod: PaymentMethod;
  orderId: string | null;
  errorMessage: string | null;
}

export type CheckoutMachineEvent =
  | { type: "START_CHECKOUT" }
  | { type: "UPDATE_CONTACT"; data: Partial<ContactData> }
  | { type: "SUBMIT_CONTACT"; data: ContactData }
  | { type: "SELECT_PAYMENT"; method: PaymentMethod }
  | { type: "BACK_TO_CONTACT" }
  | { type: "SUBMIT_ORDER"; orderId: string }
  | { type: "ORDER_SUCCESS" }
  | { type: "ORDER_FAIL"; error: string }
  | { type: "RESET" };

export const initialCheckoutState: CheckoutMachineState = {
  step: "CONTACT_FORM",
  contact: {
    fullName: "",
    phone: "",
    address: "",
  },
  paymentMethod: "KBZPAY",
  orderId: null,
  errorMessage: null,
};

export function checkoutReducer(
  state: CheckoutMachineState,
  event: CheckoutMachineEvent
): CheckoutMachineState {
  switch (event.type) {
    case "START_CHECKOUT":
      return { ...initialCheckoutState, step: "CONTACT_FORM" };

    case "UPDATE_CONTACT":
      return {
        ...state,
        contact: { ...state.contact, ...event.data },
      };

    case "SUBMIT_CONTACT":
      if (!event.data.fullName || !event.data.phone || !event.data.address) {
        return {
          ...state,
          errorMessage: "All contact and shipping fields are required.",
        };
      }
      return {
        ...state,
        contact: event.data,
        step: "PAYMENT_SELECTION",
        errorMessage: null,
      };

    case "SELECT_PAYMENT":
      return {
        ...state,
        paymentMethod: event.method,
      };

    case "BACK_TO_CONTACT":
      return {
        ...state,
        step: "CONTACT_FORM",
        errorMessage: null,
      };

    case "SUBMIT_ORDER":
      return {
        ...state,
        step: "PROCESSING",
        orderId: event.orderId,
        errorMessage: null,
      };

    case "ORDER_SUCCESS":
      return {
        ...state,
        step: "ORDER_PLACED",
        errorMessage: null,
      };

    case "ORDER_FAIL":
      return {
        ...state,
        step: "FAILED",
        errorMessage: event.error,
      };

    case "RESET":
      return initialCheckoutState;

    default:
      return state;
  }
}
