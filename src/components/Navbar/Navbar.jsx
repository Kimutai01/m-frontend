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
import sportpesa from "../../assets/SP_logo-01.png";
import fin from "../../assets/finix-casino.png";

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
    <>
      <div class="p-2 content-end bg-[#F6F6F6] border-b-4 border-[#f4e721] hidden md:block">
        <ul class="flex justify-end gap-5 p-2 text-[#F6F6F6]">
          <li>
            <a target="_blank" rel="noreferrer" href="#">
              <i class="fa-brands fa-instagram text-[#050505] hover:text-[#f4e721]"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/Mseal_FC"
            >
              <i class="fa-brands fa-twitter text-[#050505] hover:text-[#f4e721]"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/msealfc/"
            >
              <i class="fa-brands fa-facebook-f fa-lg text-[#050505] hover:text-[#f4e721]"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/@murangasealfc"
            >
              <i class="fa-brands fa-youtube text-[#050505] hover:text-[#f4e721]"></i>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="#">
              <i class="fa-brands fa-tiktok text-[#050505] hover:text-[#f4e721]"></i>
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.ke.sportpesa.com/en/sports-betting/football-1/"
            >
              <img
                src={fin}
                alt="Finix Casino"
                className="w-[100px] text-[#F6F6F6]"
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.ke.sportpesa.com/en/sports-betting/football-1/"
            >
              <img
                src={sportpesa}
                alt="Sportpesa"
                className="w-[100px] text-[#F6F6F6]"
              />
            </a>
          </li>
        </ul>
      </div>
      <div
        style={{ backgroundColor: `${navBg}` }}
        className={
          shadow
            ? "w-full h-20 shadow-xl z-[100] md:px-24"
            : "w-full h-20 z-[100] md:px-24"
        }
      >
        <div className="flex justify-between items-center w-full h-full py-4 px-2 rounded">
          <div>
            <Link className="text-[#fff] font-bold " to="/">
              <img
                src={logo}
                alt="Muranga seals logo"
                className="md:h-40 h-28 mt-8 mx-4"
              />
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
                  <li className="font-medium uppercase hover:underline  text-[#f4e721] underline-offset-8 hover:text-[#f4e721] hover:scale-105 transition-all duration-all hover:border-y-black ">
                    Admin
                    <div className="opacity-0 group-hover:opacity-100 w-[200px] absolute left-0 top-full bg-[#000] pt-10 py-2 rounded-lg shadow-lg">
                      <ul className="p-2 flex flex-col">
                        <Link
                          to="/admin/userlist"
                          className="text-[#f4e721] hover:underline underline-offset-8 py-1 px-2 relative  hover:scale-105 transition-all duration-all hover:border-y-black"
                        >
                          Users
                        </Link>
                        <Link to="/admin/products">
                          <div className="text-[#f4e721] py-1 px-2  hover:underline underline-offset-8  hover:scale-105 transition-all duration-all hover:border-y-black">
                            Products
                          </div>
                        </Link>

                        <Link to="/admin/orderlist">
                          <div className="text-[#f4e721] py-1 px-2  hover:underline underline-offset-8 hover:scale-105 transition-all duration-all hover:border-y-black">
                            Orders
                          </div>
                        </Link>
                        <Link to="/admin/news">
                          <div className="text-[#f4e721] py-1 px-2  hover:underline underline-offset-8 hover:scale-105 transition-all duration-all hover:border-y-black">
                            News
                          </div>
                        </Link>
                        <Link to="/admin/adverts">
                          <div className="text-[#f4e721] py-1 px-2  hover:underline underline-offset-8 hover:scale-105 transition-all duration-all hover:border-y-black">
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
              <Link to="/cart">
                <div className="relative">
                  <HiShoppingCart
                    size={40}
                    className="text-[#f4e721] text-center align-middle justify-center mr-3 "
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
                className="text-[#f4e721] text-center align-middle items-center justify-center"
              />
            </div>
          </div>
          <div className="hidden md:flex">
            <div className="flex">
              {user ? (
                <div className="group ml-10">
                  <li className="font-medium  text-xl text-[#f4e721] mt-[10px] hover:underline underline-offset-8 hover:scale-105 transition-all duration-all hover:border-y-black list-none">
                    {user.name}
                    <div className="opacity-0 group-hover:opacity-100 w-[200px] absolute left-0 top-full bg-[#000] pt-10 py-2 rounded-lg shadow-lg">
                      <ul className="p-2 flex flex-col">
                        <Link
                          to="/profile"
                          className="text-[#f4e721] py-1 px-2 relative hover:underline underline-offset-8 hover:scale-105 transition-all duration-all hover:border-y-black"
                        >
                          Profile
                        </Link>
                        <div
                          className="text-[#f4e721] py-1 px-2 hover:underline underline-offset-8 hover:scale-105 transition-all duration-all hover:border-y-black cursor-pointer"
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
                  <CiUser size={40} className="text-[#f4e721] cursor-pointer" />
                </Link>
              )}
            </div>

            <Link to="/cart">
              <div className="relative">
                <HiShoppingCart
                  size={40}
                  className="text-[#f4e721] text-center align-middle justify-center mr-3 mt-2  cursor-pointer"
                />
                {cartItemsCount > 0 && (
                  <div className="absolute top-[-5px] right-[-5px] bg-[#000] text-[#f4e721] rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    {cartItemsCount}
                  </div>
                )}
              </div>
            </Link>
          </div>
        </div>

        <div
          className={
            nav
              ? "md:hiddden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
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
              <div className="flex justify-between items-center w-full  px-3">
                <Link className="font-bold text-4xl uppercase" to="/">
                  <img src={logo} alt="logo" className="h-32" />
                </Link>
                <div
                  onClick={handleNav}
                  className="cursor-pointer text-[#f4e721] mb-8"
                >
                  <AiOutlineClose size={35} />
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col text-2xl  py-4">
                <ul>
                  <Link to="/" onClick={handleNav}>
                    <li className="ml-4 text-2xl text-[#f4e721] underline-offset-8 hover:text-[#f4e721] uppercase">
                      Home
                    </li>
                  </Link>

                  {user ? (
                    <li className="relative">
                      <div
                        className="flex items-center justify-between px-5 py-4 cursor-pointer"
                        onClick={handleServicesClick}
                      >
                        <div className="text-2xl uppercase text-[#f4e721] underline-offset-8 hover:text-[#f4e721]">
                          {" "}
                          {user.name}
                        </div>
                        <div>
                          <BsChevronDown size={25} className="text-[#f4e721]" />
                        </div>
                      </div>
                      {showServicesDetails && (
                        <ul className="left-full bg-[#000] py-2 rounded-lg shadow-lg">
                          <Link
                            to="/profile"
                            className=" text-[#f4e721] uppercase hover:text-[#f4e721] ml-5 py-1 text-2xl px-2 relative hover:underline underline-offset-8 hover:scale-105 transition-all duration-all hover:border-y-black"
                          >
                            Profile
                          </Link>
                          <div
                            className="text-2xl text-[#f4e721] mt-5 hover:text-[#f4e721] ml-5 uppercase py-1 px-2 hover:underline underline-offset-8 hover:scale-105 transition-all duration-all hover:border-y-black"
                            onClick={logoutHandler}
                          >
                            Logout
                          </div>
                        </ul>
                      )}
                    </li>
                  ) : (
                    <Link to="/login">
                      <li className="py-4 text-xl ml-3 cursor-pointer">
                        Login
                      </li>
                    </Link>
                  )}

                  <Link exact="true" to="/ourclub">
                    <li className="ml-4 mt-5 hover:underline text-[#f4e721] underline-offset-8 hover:text-[#f4e721]">
                      OUR CLUB
                    </li>
                  </Link>
                  <Link exact="true" to="/news">
                    <li className="ml-4 mt-5 hover:underline text-[#f4e721] underline-offset-8 hover:text-[#f4e721]">
                      NEWS
                    </li>
                  </Link>

                  <Link exact="true" to="/team">
                    <li className="ml-4 mt-5 hover:underline text-[#f4e721] underline-offset-8 hover:text-[#f4e721]">
                      TEAM
                    </li>
                  </Link>

                  <Link exact="true" to="/ticket">
                    <li className="ml-4 mt-5 hover:underline text-[#f4e721] underline-offset-8 hover:text-[#f4e721]">
                      TICKETS
                    </li>
                  </Link>
                  <Link exact="true" to="/membership">
                    <li className="ml-4 mt-5 hover:underline text-[#f4e721] underline-offset-8 hover:text-[#f4e721]">
                      MEMBERSHIP
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
