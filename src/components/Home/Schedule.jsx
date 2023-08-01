import { useNavigate } from 'react-router-dom';
import wazitologo from '../../assets/wazitologo.png';
import msealskit from '../../assets/msealskit.png';
import msealslogo from '../../assets/msealslogo.png';

const Schedule = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black text-white px-4 py-8 md:ml-[28px] md:mr-[28px]">
        <h1 className="uppercase">Match Schedule</h1>
        <div className="flex flex-col md:flex-row justify-between ">
          <div className=" text-center border-r  flex flex-col gap-2 border-white">
            <div className="flex gap-4 mt-8 items-center ">
              <div className="flex ml-4 mr-12  flex-col ">
                <img src={wazitologo} alt="wazitologo" />
                <h1 className="mt-3">Wazito FC</h1>
              </div>
              <p>VS</p>
              <div className="flex flex-col ml-10">
                <img src={msealslogo} alt="msealslogo" />
                <h1 className="mt-3">Murang&apos;a Seals</h1>
              </div>
            </div>
            <h1 className="text-center w-[70%] mt-5 mx-auto text-[#867A7A]">
              Murang&apos;a stadium , Email muranga seals to book a ticket today
            </h1>
            <p className="text-[#867A7A]">29/April/2023</p>
            <button
              className="bg-[#FAE115] text-black mt-5 font-bold p-2 w-[40%] mx-auto"
              type="button"
            >
              Previous Match
            </button>
          </div>

          <div className=" text-center border-r  flex flex-col gap-2 border-white">
            <div className="flex gap-4 mt-8 items-center ">
              <div className="flex ml-4 mr-12  flex-col ">
                <img src={wazitologo} alt="wazitologo" />
                <h1 className="mt-3">Wazito FC</h1>
              </div>
              <p>VS</p>
              <div className="flex flex-col ml-10">
                <img src={msealslogo} alt="msealslogo" />
                <h1 className="mt-3">Murang&apos;a Seals</h1>
              </div>
            </div>
            <h1 className="text-center w-[70%] mt-5 mx-auto text-[#867A7A]">
              Murang&apos;a stadium , Email muranga seals to book a ticket today
            </h1>
            <p className="text-[#867A7A]">29/April/2023</p>
            <button
              className="bg-[#FAE115] text-black mt-5 font-bold p-2 w-[40%] mx-auto"
              type="button"
            >
              Next Match
            </button>
          </div>

          <div className="flex justify-between p-4 ">
            <div className="flex flex-col gap-2">
              <p className="mb-4">AUTHENTIC HOME SHIRT</p>
              <p className="text-[#867A7A] mb-5">Team jersey</p>
              <p className="mb-4 text-[#867A7A]">1500 KSh</p>
              <p className="mb-4 text-[#867A7A]">Short sleeve</p>
              <p className="mb-4 text-[#867A7A]">
                10% Discount off On membership
              </p>
              <p className="mb-5 text-[#867A7A]">Medium</p>
              <button
                className="bg-[#FAE115]  flex justify-center text-black font-bold p-2 w-[80%] "
                type="button"
                onClick={() => {
                  navigate('/shop');
                }}
              >
                Buy Now
              </button>
            </div>
            <img src={msealskit} alt="msealskit" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
