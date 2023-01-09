export const getAllProductsReducer = (state = { pizzas: [] }, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_PRODUCTS_SUCCESS":
      return {
        loading: false,
        pizzas: action.payload,
      };
    case "GET_PRODUCTS_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
