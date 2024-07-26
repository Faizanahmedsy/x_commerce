import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// Define the type for a cart item
interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  quantity: number;
}

// Define the type for the state
interface GlobalState {
  cart: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
}

const initialState: Omit<
  GlobalState,
  "addItem" | "removeItem" | "updateQuantity" | "clearCart"
> = {
  cart: [],
};

const globalState = (set: any) => ({
  ...initialState,
  addItem: (item: CartItem) => {
    set((state: GlobalState) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
              : cartItem
          ),
        };
      }
      return { cart: [...state.cart, item] };
    });
  },
  removeItem: (itemId: string) => {
    set((state: GlobalState) => ({
      cart: state.cart.filter((item) => item.id !== itemId),
    }));
  },
  updateQuantity: (itemId: string, quantity: number) => {
    set((state: GlobalState) => ({
      cart: state.cart.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      ),
    }));
  },
  clearCart: () => {
    set(() => ({ cart: [] }));
  },
});

const useGlobalState = create(
  devtools(
    persist(globalState, {
      name: "global_state",
    })
  )
);

export default useGlobalState;
