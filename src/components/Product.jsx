import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => (
  <div key={product.id} className="bg-[#161616] p-4 rounded-lg h-[500px]">
    <Link to={`/product/${product._id}`}>
      <img
        src={`http://127.0.0.1:8000${product.image}`}
        alt={product.name}
        className="h-72 mx-auto w-[65%] rounded-t-lg"
      />
      <div className="p-6 mx-auto w-[90%]">
        <h2 className="text-[#fff] text-2xl font-bold uppercase">
          {product.name}
        </h2>

        <div>
          <p className="text-[#fae115] mt-5  font-bold text-2xl">
            {" "}
            ksh {product.price}
          </p>
        </div>
        <p className="mt-5 text-[#fff] w-[80%] truncate font-medium">
          {product.description}
        </p>
      </div>
    </Link>
  </div>
);

export default Product;
