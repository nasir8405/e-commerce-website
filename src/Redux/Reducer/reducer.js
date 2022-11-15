import { productData } from "../../Pages/Products/mockData";
import { all, SEARCH } from "../type";
export const reducer = (state = productData, action) => {
  switch (action.type) {
    case all:
      const allProducts = { ...state, selectedProducts: state.products };
      return allProducts;
    case SEARCH:
      console.log("Hi");
      const searchProducts = state.selectedProducts.filter((product) => {
        return product.title
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });
      return { ...state, selectedProducts: searchProducts };
    case action.type:
      const officeProducts = state.products.filter((product) => {
        return product.type === action.type;
      });
      return { ...state, selectedProducts: officeProducts };
    default:
      return state;
  }
};
