import { describe, it, expect } from "vitest";
import {
  checkoutReducer,
  initialCheckoutState,
  CheckoutMachineState,
} from "../checkoutMachine";

describe("Checkout Finite State Machine (FSM)", () => {
  it("should initialize at CONTACT_FORM step", () => {
    expect(initialCheckoutState.step).toBe("CONTACT_FORM");
    expect(initialCheckoutState.errorMessage).toBeNull();
  });

  it("should reject contact submission if fields are missing", () => {
    const nextState = checkoutReducer(initialCheckoutState, {
      type: "SUBMIT_CONTACT",
      data: { fullName: "", phone: "", address: "" },
    });

    expect(nextState.step).toBe("CONTACT_FORM");
    expect(nextState.errorMessage).toBe(
      "All contact and shipping fields are required."
    );
  });

  it("should transition from CONTACT_FORM to PAYMENT_SELECTION upon valid contact data", () => {
    const nextState = checkoutReducer(initialCheckoutState, {
      type: "SUBMIT_CONTACT",
      data: {
        fullName: "Min Thant",
        phone: "09968888299",
        address: "Kamayut, Yangon",
      },
    });

    expect(nextState.step).toBe("PAYMENT_SELECTION");
    expect(nextState.contact.fullName).toBe("Min Thant");
    expect(nextState.errorMessage).toBeNull();
  });

  it("should navigate back to CONTACT_FORM and change payment method", () => {
    let state: CheckoutMachineState = checkoutReducer(initialCheckoutState, {
      type: "SUBMIT_CONTACT",
      data: {
        fullName: "Min Thant",
        phone: "09968888299",
        address: "Kamayut, Yangon",
      },
    });

    state = checkoutReducer(state, {
      type: "SELECT_PAYMENT",
      method: "WAVEPAY",
    });
    expect(state.paymentMethod).toBe("WAVEPAY");

    state = checkoutReducer(state, { type: "BACK_TO_CONTACT" });
    expect(state.step).toBe("CONTACT_FORM");
  });

  it("should transition from PROCESSING to ORDER_PLACED on success", () => {
    let state: CheckoutMachineState = checkoutReducer(initialCheckoutState, {
      type: "SUBMIT_ORDER",
      orderId: "MS-889922",
    });

    expect(state.step).toBe("PROCESSING");
    expect(state.orderId).toBe("MS-889922");

    state = checkoutReducer(state, { type: "ORDER_SUCCESS" });
    expect(state.step).toBe("ORDER_PLACED");
  });
});
