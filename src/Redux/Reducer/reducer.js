import { productData } from "../../Pages/Products/mockData";
export const GET_DETAIL = "GET_DETAIL";
export const reducer = (state = productData, action) => {
  switch (action.type) {
    case GET_DETAIL:
      return state;
    default:
      return state;
  }
};
