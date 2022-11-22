import { productData } from "../../Pages/Products/mockData";
import {
  ADDTOCART,
  ADDUSER,
  all,
  CLEARCART,
  DECREASEPRODUCT,
  INCREASEPRODUCT,
  LOGOUT,
  REMOVEPRODUCT,
  SEARCH,
  SETUSER,
} from "../type";
export default function reducer(state = productData, action) {
  switch (action.type) {
    case all:
      const allProducts = { ...state, selectedProducts: state.products };
      return allProducts;
    case SEARCH:
      const searchProducts = state.selectedProducts.filter((product) => {
        return product.title
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });
      return { ...state, selectedProducts: searchProducts };
    case ADDTOCART:
      return { ...state, cartData: [...state.cartData, action.payload] };
    case REMOVEPRODUCT:
      const removedProduct = state.cartData.filter((product) => {
        return product.id !== action.payload;
      });
      return { ...state, cartData: removedProduct };
    case INCREASEPRODUCT:
      const increase = state.cartData.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            noOfProducts: product.noOfProducts + 1,
            subtotal: product.subtotal + product.price,
          };
        }
        return product;
      });
      return { ...state, cartData: increase };
    case DECREASEPRODUCT:
      const decrease = state.cartData.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            noOfProducts: product.noOfProducts - 1,
            subtotal: product.subtotal - product.price,
          };
        }
        return product;
      });
      return { ...state, cartData: decrease };
    case CLEARCART:
      return { ...state, cartData: [] };
    case ADDUSER:
      return { ...state, users: [...state.users, action.payload] };
    case SETUSER:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { ...state, user: "" };
    case action.type:
      const officeProducts = state.products.filter((product) => {
        return product.type === action.type;
      });
      return { ...state, selectedProducts: officeProducts };
    default:
      return state;
  }
}
