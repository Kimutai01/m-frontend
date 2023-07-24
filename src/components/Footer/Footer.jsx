import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { AiOutlineSearch } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="bg-[#000] hidden md:block  p-8  text-white">
        <div className="mx-auto py-8 w-[80%] flex flex-col md:flex-row justify-between">
          <h1>Murangaseals@gmail.com</h1>
          <h1>+2547 000 000 000</h1>
          <div className="flex gap-4 justify-between">
            <AiFillInstagram size={40} />
            <BsTwitter size={35} />
            <ImFacebook size={35} />
            <AiOutlineSearch size={35} className="block md:block" />
          </div>
          <AiOutlineSearch size={35} className="hidden md:block" />
        </div>

        <div className="w-[80%] my-8 mx-auto flex justify-between">
          <div className="flex flex-col gap-2">
            <h5 className="text-[#fae115]">News</h5>
            <ul>
              <li>Home Jersey</li>
              <li>Season Jersey</li>
              <li>News trophy</li>
              <li>room</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-[#fae115]">Tickets</h5>
            <ul>
              <li>Home Jersey</li>
              <li>Season Jersey</li>
              <li>News trophy</li>
              <li>room</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-[#fae115]">Teams</h5>
            <ul>
              <li>Home Jersey</li>
              <li>Season Jersey</li>
              <li>News trophy</li>
              <li>room</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-[#fae115]">Memberships</h5>
            <ul>
              <li>Home Jersey</li>
              <li>Season Jersey</li>
              <li>News trophy</li>
              <li>room</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-[#fae115]">Club & History</h5>
            <ul>
              <li>Home Jersey</li>
              <li>Season Jersey</li>
              <li>News trophy</li>
              <li>room</li>
            </ul>
          </div>
        </div>
        <div className="w-[80%] mx-auto  flex  flex-col gap-2">
          <h1 className="text-3xl  font-bold pt-4">Newsletter</h1>
          <div className="flex items-center gap-1">
            <input
              type="text"
              placeholder="Enter your email"
              className="h-[50px] w-[455px] p-2 bg-[#A8A2A2] focus:outline-none placeholder-[#D9D9D9]"
            />
            <p className="text-3xl font-bold text-[#F4E721] p-2 cursor-pointer">
              Subscribe
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#000] block md:hidden">
        <div className="mx-6">
          <h1 className="text-white text-2xl py-4 font-bold">
            Explore Murang&apos;a seals app
          </h1>
          <div className="text-white flex gap-10 ">
            <div className="">
              <ul className="flex flex-col gap-4">
                <li>Home</li>
                <li>News</li>
                <li>Teams</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-4">
                <li>Tickets</li>
                <li>Membership</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex justify-between">
            <div className="text-white">
              <p>murangaseals@gmail.com</p>
              <p className="mt-3">07000000000</p>
            </div>
            <div>
              <button className="bg-[#fae115] p-4 text-[#000] rounded-xl">
                Subscribe
              </button>
            </div>
          </div>
          <hr className="text-grey mt-5" />
          <div className="flex justify-between mt-5">
            <div className="text-white">
              <ul>
                <li>Home Jersey</li>
                <li>Season Jersey</li>
                <li>News trophy</li>
                <li>room</li>
                <li>Advertise with us</li>
              </ul>
            </div>
            <div className="text-white">
              <ul>
                <li>About Murang’a Seals</li>
                <li> Cookies</li>
                <li>Parental Guide</li>
              </ul>
            </div>
          </div>
          <div className="flex mt-10 text-white text-center gap-12 items-center  justify-center">
            <AiFillInstagram size={40} />
            <BsTwitter size={35} />
            <ImFacebook size={35} />
          </div>
          <p className="text-white text-center py-4">
            Copyright @ 2023 Muranga Seals.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
