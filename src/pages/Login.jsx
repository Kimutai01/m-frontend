import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { selectUser, login } from '../features/userSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const location = useLocation();
  const navigate = useNavigate();

  const redirect = location.search ? location.search.split('=')[1] : '/';

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (user) {
      navigate(redirect);
    }
  }, [navigate, redirect, user]);

  return (
    <div className="bg-[#000] pt-28">
      <ToastContainer />
      <div className="bg-[#161616] mx-auto md:w-[30%] w-[80%] px-10 rounded-lg pb-10">
        <div className="flex justify-center md:flex-row gap-5 pt-10">
          <div className="flex flex-col w-full">
            <label
              htmlFor="email"
              className="text-white mb-3 uppercase font-bold"
            >
              Email Address
              <br />
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address.."
                className="bg-[#161616] text-white border-[grey] mt-5 w-full border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
              />
            </label>
          </div>
        </div>
        <div className="flex justify-center md:flex-row mt-10 gap-5">
          <div className="flex flex-col w-full">
            <label
              htmlFor="password"
              className="text-white mb-3 uppercase font-bold"
            >
              Password
              <br />
              <input
                type="password"
                id="password"
                name="name"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password.."
                className="bg-[#161616] text-white border-[grey] w-full mt-5 border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
              />
            </label>
          </div>
        </div>

        <button
          className="why-btn  w-full mt-10 mb-10 "
          type="submit"
          onClick={(e) => submitHandler(e)}
        >
          <h1 className="font-bold">Login</h1>
        </button>
        <p className="text-[#fff] font-medium">
          Don&apos;t have an account?
          {' '}
          <Link
            to={redirect ? `/register?redirect=${redirect}` : '/register'}
            className="text-[#fae115] font-bold ]"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
