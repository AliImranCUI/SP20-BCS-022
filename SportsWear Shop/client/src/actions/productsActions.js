export const getAllProducts = () => async (dispatch) => {
  let authors;

  dispatch({ type: "GET_PRODUCTS_REQUEST" });

  try {
    const response = await fetch("/api/products/getallourproducts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        authors = data;
      });
    dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: authors });
  } catch (error) {
    dispatch({ type: "GET_PRODUCTS_FAILED", payload: error });
  }
};
