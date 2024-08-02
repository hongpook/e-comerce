import { Add_to_cart, Remove_from_cart, Update_cart } from "./CartActionType";

const initialCartStage = {
  cart: [],
};

const CartReducer = (state = initialCartStage, action) => {
  switch (action.type) {
    case Add_to_cart:
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        // Nếu sản phẩm đã tồn tại trong giỏ, cập nhật số lượng và tổng giá
        const updatedCart = state.cart.map((item, index) => {
          if (index === existingItemIndex) {
            const updatedItem = {
              ...item,
              quantity: item.quantity + action.payload.quantity,
              total: (item.quantity + action.payload.quantity) * item.price,
            };
            return updatedItem;
          }
          return item;
        });
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        // Nếu sản phẩm chưa tồn tại trong giỏ, thêm sản phẩm mới
        const newItem = {
          ...action.payload,
          total: action.payload.quantity * action.payload.price,
        };
        return {
          ...state,
          cart: [...state.cart, newItem],
        };
      }
    case Update_cart:
      const { id, quantity, price } = action.payload;
      console.log(`id`, id, `quantity`, quantity, `price`, price);
      const newCart = state.cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: quantity, total: quantity * price };
        }
        return item;
      });
      console.log(`newCart`, newCart);
      return {
        ...state,
        cart: newCart,
      };
    case Remove_from_cart:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export { CartReducer };
