import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductAction } from "../actions/product-action";
import ProductCard from "./../components/ProductCard";

export default function Home() {
  const dispatch = useDispatch();
  const { reduxProduct, isLoading } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getAllProductAction());
  }, []);
  return (
    <>
      <section
        id="Projects"
        class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-10 mt-5 mb-2"
      >
        {isLoading ? (
          <div className="spinner spinner-border"></div>
        ) : (
          reduxProduct.map((item) => (
            <ProductCard single={item} key={item.id} />
          ))
        )}
      </section>
    </>
  );
}
