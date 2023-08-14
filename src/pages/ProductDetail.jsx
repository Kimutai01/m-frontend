import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

import { addItemsToCart } from "../features/cartSlice";
import {
  getProductsStatus,
  getProductsError,
  selectAllProducts,
  fetchProducts,
} from "../features/productsSlice";

const ProductDetail = () => {
  const navigate = useNavigate();
  const [size, setSize] = useState("S");

  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);

  const error = useSelector(getProductsError);
  const status = useSelector(getProductsStatus);
  const { id } = useParams();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }

    if (status === "failed") {
      toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });
    }
  }, [status, dispatch]);

  const product = products.find((product) => product._id === parseInt(id));

  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, qty, size));
    navigate(`/cart/${id}?qty=${qty}`);
  };

  if (status === "loading" || !product) {
    return (
      <div className="flex justify-center items-center pt-28 bg-[black]">
        <div className="w-20 h-20 rounded-full animate-spin border-2 border-solid border-[red] border-t-transparent" />
      </div>
    );
  }

  return (
    <>
      <div className="pt-28 bg-[#ffffff] ">
        <ToastContainer />

        <div className="bg-[#ffffff] md:px-40 px-5 pb-20 flex flex-col-reverse md:flex-row md:h-[550px]">
          <div className="mr-20 md:w-[50%]">
            <img
              src={`https://mbackend-65aa08f37e31.herokuapp.com${product.image}`}
              alt={product.name}
              className=" md:h-[500px] mt-10 rounded-t-lg mx-10 md:mx-0"
            />
          </div>
          <div className="bg-[#EDE38E] text-[#000] md:w-[50%] rounded-lg p-8">
            <h1 className=" text-3xl font-bold uppercase">{product.name}</h1>

            <div>
              <p className=" font-bold text-2xl"> {product.price} ksh</p>
            </div>

            <p className="mt-5  font-medium">{product.description}</p>
            <div className="flex border-[#000] border-2 justify-between px-3  mt-5 md:w-[55%]">
              <p className=" font-bold text-2xl">Status :</p>
              <p className="font-bold text-2xl">
                {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
              </p>
            </div>
            <div className="flex border-[#000] border-2 justify-between px-3 mt-5 md:w-[55%]">
              <p className=" font-bold text-2xl">Size :</p>
              <p className=" font-bold text-2xl">
                <select
                  className="bg-[#EDE38E] font-bold text-2xl outline-none focus:outline-none"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                >
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </p>
            </div>
            {product.countInStock > 0 && (
              <div className="flex border-[#000] border-2 justify-between px-3 mt-5 md:w-[55%]">
                <p className="font-bold text-2xl">Qty :</p>
                <p className=" font-bold text-2xl">
                  <select
                    className="bg-[#EDE38E]  font-bold text-2xl outline-none focus:outline-none"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </p>
              </div>
            )}
            <div className="flex  mt-5">
              <button
                onClick={addToCartHandler}
                type="button"
                className="bg-[#fae115] text-[#161616] font-bold text-2xl px-10 py-3 rounded-lg border border-[#000] uppercase"
                disabled={product.countInStock === 0}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
