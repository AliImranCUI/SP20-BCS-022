import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/productsActions";
import Products from "../components/Products";

export default function Homescreen() {
  const dispatch = useDispatch();
  const pizzasstates = useSelector((state) => state.getAllProductsReducer);
  const { pizzas, error, loading } = pizzasstates;
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div>
      <div className="row">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error couldn't find data........</h1>
        ) : (
          pizzas.map((pizza) => {
            return (
              <div className="col-md-4">
                <div>
                  <Products product={pizza} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
