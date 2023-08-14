import React, { useEffect } from 'react';
import { useMatch, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { BsFillTrash3Fill } from 'react-icons/bs';
import {
  addItemsToCart,
  selectCartItems,
  removeItemsFromCart,
} from '../features/cartSlice';

const Cart = () => {
  const navigate = useNavigate();
  const match = useMatch('/cart/:id');
  const { id } = match?.params || '';

  const qty = useLocation().search
    ? Number(useLocation().search.split('=')[1])
    : 1;
  const dispatch = useDispatch();

  const checkoutHandler = () => {
    navigate('/login?redirect=/shipping');
  };

  const cart = useSelector(selectCartItems);

  cart.length === 0
    && toast.error('Your cart is empty', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
    });

  useEffect(() => {
    if (id) {
      dispatch(addItemsToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  return (
    <div className="pt-10 pb-20 bg-[#fff]">
      <ToastContainer />
      <h2 className="text-2xl font-bold text-center uppercase  text-[#000]">
        Shopping Cart
      </h2>
      <div className="flex flex-col mx-5  md:flex-row gap-20  md:w-[70%] mt-10">
        <div className="flex flex-col gap-3">
          {cart.map((item) => (
            <div
              className="flex gap-5 rounded-lg p-4 items-center text-[#000] border-b border-[#fae115]"
              key={item._id}
            >
              <img
                src={`https://mbackend-65aa08f37e31.herokuapp.com${item.image}`}
                alt=""
                className="h-28 w-28 rounded-md"
              />
              <h2 className="hidden md:block">{item.name}</h2>
              <h2 className="">{item.price}</h2>
              <div>
                <select
                  className=" text-[#000] border border-[#fae115] px-2 py-1 rounded-lg"
                  value={item.qty}
                  onChange={(e) => dispatch(
                    addItemsToCart(item.product, Number(e.target.value)),
                  )}
                >
                  {[...Array(item.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </div>
              <button
                className="bg-[#fae115]  font-bold text-2xl px-5 py-2 rounded-lg"
                onClick={() => dispatch(removeItemsFromCart(item.product))}
                type="button"
              >
                <BsFillTrash3Fill />
              </button>
            </div>
          ))}
        </div>
        <div>
          <div className="bg-[#EDE38E]  text-[#000] gap-2  rounded-lg p-8">
            <h2 className="text-2xl font-bold md:text-center p-3  ">
              {/* Subtotal ({cart.reduce((acc, item) => acc + item.qty, 0)}) items */}
              Subtotal (
              {cart.reduce((acc, item) => acc + parseInt(item.qty), 0)}
              ) items
            </h2>
            <h2 className="text-2xl font-bold p-3 md:text-center ">
              Total Price:
              {cart
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </h2>
            <button
              className="bg-[#fae115]  font-bold text-2xl px-5 py-2 rounded-lg mt-5 disabled:opacity-50"
              disabled={cart.length === 0}
              type="button"
              onClick={checkoutHandler}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
