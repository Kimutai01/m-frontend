import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { AiOutlineClose } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { useNavigate, Link } from "react-router-dom";

import { RiMenu5Line } from "react-icons/ri";
import { HiShoppingCart } from "react-icons/hi";
import "./Navbar.css";
import { BsChevronDown } from "react-icons/bs";

import logo from "../../assets/logo.png";
import { logoutUser, selectUser } from "../../features/userSlice";
import { selectCartItemsCount } from "../../features/cartSlice";

const NavBar = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  useEffect(() => {
    setNavBg("#000");
    setLinkColor("#ecf0f3");
  }, []);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const [showServicesDetails, setShowServicesDetails] = useState(false);

  const handleServicesClick = () => {
    setShowServicesDetails(!showServicesDetails);
  };

  const cartItemsCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser());

    toast.success("Logged out successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
    });
    navigate("/");
  };

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] md:px-24"
          : "fixed w-full h-20 z-[100] md:px-24"
      }
    >
      <div className="flex justify-between items-center w-full h-full md:px-4 py-4 px-2 2xl:px-16 rounded">
        <div className="animate-pulse">
          <Link className="text-[#fff] font-bold text-3xl" to="/">
            <img src={logo} alt="Muranga seals logo" className="h-28" />
          </Link>
        </div>
        <div>
          <ul
            className="hidden md:flex md:justify-between"
            style={{ color: `${linkColor}` }}
          >
            <Link exact="true" to="/news">
              <li className="hover:underline text-[#f4e721] underline-offset-8 hover:text-[#f4e721]">
                NEWS
              </li>
            </Link>

            <Link exact="true" to="/team">
              <li className="ml-10 hover:underline text-[#f4e721] underline-offset-8 hover:text-[#f4e721]">
                TEAM
              </li>
            </Link>

            <Link exact="true" to="/ticket">
              <li className="ml-10 hover:underline text-[#f4e721] underline-offset-8 hover:text-[#f4e721]">
                TICKETS
              </li>
            </Link>
            <Link exact="true" to="/membership">
              <li className="ml-10 hover:underline text-[#f4e721] underline-offset-8 hover:text-[#f4e721]">
                MEMBERSHIP
              </li>
            </Link>
            <Link exact="true" to="/ourclub">
              <li className="ml-10 hover:underline text-[#f4e721] underline-offset-8 hover:text-[#f4e721]">
                OUR CLUB
              </li>
            </Link>
            <Link exact="true" to="/shop">
              <li className="ml-10 hover:underline text-[#f4e721] uppercase underline-offset-8 hover:text-[#f4e721]">
                Shop
              </li>
            </Link>

            {user && user.isAdmin && (
              <div className="group ml-10">
                <li className="font-medium  text-xl hover:text-[#ff4d23] hover:scale-105 transition-all duration-all hover:border-y-black ">
                  Admin
                  <div className="opacity-0 group-hover:opacity-100 w-[200px] absolute left-0 top-full bg-[#000] pt-10 py-2 rounded-lg shadow-lg">
                    <ul className="p-2 flex flex-col">
                      <Link
                        to="/admin/userlist"
                        className="text-white py-1 px-2 relative hover:text-[#ff4d23] hover:scale-105 transition-all duration-all hover:border-y-black"
                      >
                        Users
                      </Link>
                      <Link to="/admin/products">
                        <div className="text-[#fff] py-1 px-2 hover:text-[#ff4d23] hover:scale-105 transition-all duration-all hover:border-y-black">
                          Products
                        </div>
                      </Link>

                      <Link to="/admin/orderlist">
                        <div className="text-[#fff] py-1 px-2 hover:text-[#ff4d23] hover:scale-105 transition-all duration-all hover:border-y-black">
                          Orders
                        </div>
                      </Link>
                      <Link to="/admin/news">
                        <div className="text-[#fff] py-1 px-2 hover:text-[#ff4d23] hover:scale-105 transition-all duration-all hover:border-y-black">
                          News
                        </div>
                      </Link>
                      <Link to="/admin/adverts">
                        <div className="text-[#fff] py-1 px-2 hover:text-[#ff4d23] hover:scale-105 transition-all duration-all hover:border-y-black">
                          Adverts
                        </div>
                      </Link>
                    </ul>
                  </div>
                </li>
              </div>
            )}
          </ul>
          <div
            className="md:hidden flex justify-between items-center w-full h-full"
            onClick={handleNav}
            style={{ color: `${linkColor}` }}
          >
            {/* cart with item count */}
            <Link to="/cart">
              <div className="relative">
                <HiShoppingCart
                  size={40}
                  className="text-[#ff4d23] text-center align-middle justify-center mr-3 "
                />
                {cartItemsCount > 0 && (
                  <div className="absolute top-[-5px] right-[-5px] bg-[#ff4d23] text-[#fff] rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    {cartItemsCount}
                  </div>
                )}
              </div>
            </Link>
            <RiMenu5Line
              size={40}
              className="text-[#ff4d23] text-center align-middle items-center justify-center"
            />
            {user ? (
              <div className="group ml-10">
                <li className="font-medium  text-xl hover:text-[#ff4d23] hover:scale-105 transition-all duration-all hover:border-y-black ">
                  {user.name}
                  <div className="opacity-0 group-hover:opacity-100 w-[200px] absolute left-0 top-full bg-[#000] pt-10 py-2 rounded-lg shadow-lg">
                    <ul className="p-2 flex flex-col">
                      <Link
                        to="/profile"
                        className="text-white py-1 px-2 relative hover:text-[#ff4d23] hover:scale-105 transition-all duration-all hover:border-y-black"
                      >
                        Profile
                      </Link>
                      <div
                        className="text-[#fff] py-1 px-2 hover:text-[#ff4d23] hover:scale-105 transition-all duration-all hover:border-y-black"
                        onClick={logoutHandler}
                      >
                        Logout
                      </div>
                    </ul>
                  </div>
                </li>
              </div>
            ) : (
              <Link to="/login">
                <CiUser size={40} className="text-[#ff4d23] cursor-pointer" />
              </Link>
            )}
          </div>
        </div>
        <div className="hidden md:flex">
          <div className="flex">
            {user ? (
              <div className="group ml-10">
                <li className="font-medium  text-xl text-white mt-[10px] hover:text-[#ff4d23] hover:scale-105 transition-all duration-all hover:border-y-black list-none">
                  {user.name}
                  <div className="opacity-0 group-hover:opacity-100 w-[200px] absolute left-0 top-full bg-[#000] pt-10 py-2 rounded-lg shadow-lg">
                    <ul className="p-2 flex flex-col">
                      <Link
                        to="/profile"
                        className="text-white py-1 px-2 relative hover:text-[#ff4d23] hover:scale-105 transition-all duration-all hover:border-y-black"
                      >
                        Profile
                      </Link>
                      <div
                        className="text-[#fff] py-1 px-2 hover:text-[#ff4d23] hover:scale-105 transition-all duration-all hover:border-y-black cursor-pointer"
                        onClick={logoutHandler}
                      >
                        Logout
                      </div>
                    </ul>
                  </div>
                </li>
              </div>
            ) : (
              <Link to="/login">
                <CiUser size={40} className="text-[#ff4d23] cursor-pointer" />
              </Link>
            )}
          </div>

          <Link to="/cart">
            <div className="relative">
              <HiShoppingCart
                size={40}
                className="text-[#ff4d23] text-center align-middle justify-center mr-3 mt-2  cursor-pointer"
              />
              {cartItemsCount > 0 && (
                <div className="absolute top-[-5px] right-[-5px] bg-[#ff4d23] text-[#fff] rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  {cartItemsCount}
                </div>
              )}
            </div>
          </Link>
        </div>
      </div>

      <div
        className={
          nav ? "md:hiddden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%]  h-screen bg-[#000] text-white p-2 ease-in duration-500"
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex justify-between items-center w-full mt-3 px-3">
              <Link
                className="font-bold text-4xl uppercase animate-pulse"
                to="/"
              >
                Mechanic
              </Link>
              <div
                onClick={handleNav}
                className="cursor-pointer text-[#ff4d23]"
              >
                <AiOutlineClose size={35} />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col  py-4">
              <ul>
                <Link to="/" onClick={handleNav}>
                  <li className="ml-3 text-xl">Home</li>
                </Link>
                <li className="relative">
                  <div
                    className="flex items-center justify-between px-3 py-4 cursor-pointer"
                    onClick={handleServicesClick}
                  >
                    <div className="text-xl">Services</div>
                    <div>
                      <BsChevronDown size={25} className="" />
                    </div>
                  </div>
                  {showServicesDetails && (
                    <ul className="left-full bg-[#000] py-2 rounded-lg shadow-lg">
                      <Link to="/services">
                        <li
                          className="text-[#fff] text-xl py-1 px-10 hover:bg-gray-200"
                          onClick={handleNav}
                        >
                          Services
                        </li>
                      </Link>
                      <Link to="/performance" onClick={handleNav}>
                        <li className="text-[#fff] text-xl py-1 px-10 hover:bg-gray-200">
                          Service Details
                        </li>
                      </Link>
                    </ul>
                  )}
                </li>
                <Link to="/store" onClick={handleNav}>
                  <li className="ml-3 text-xl">Store</li>
                </Link>
                <Link to="/about" onClick={handleNav}>
                  <li className="py-4 text-xl ml-3 cursor-pointer">About</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
