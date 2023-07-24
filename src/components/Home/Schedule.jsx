import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import wazitologo from '../../assets/wazitologo.png';
import msealskit from '../../assets/msealskit.png';
import msealslogo from '../../assets/msealslogo.png';

const Schedule = () => {
  const [showModal, setShowModal] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_abzd5cf',
        'template_ncd937d',
        form.current,
        'cea2TAaV7fu3Aqtyp',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  return (
    <>
      {showModal && (
        <div className="fixed kulim-park inset-0 bg-opacity-50 z-10 flex  items-center justify-center px-8 md:w-[500px] mx-auto">
          <div className="bg-white p-12 rounded-lg">
            <div className="flex justify-end">
              <button
                className="bg-[#000] text-white px-4 py-2 rounded-lg"
                onClick={() => setShowModal(false)}
              >
                X
              </button>
            </div>

            <h2 className=" text-2xl uppercase md:text-5xl font-bold mb-2 text-[#000] text-center">
              Make purchase
            </h2>

            <div className="">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-3"
              >
                <input
                  type="text"
                  placeholder="ticket, jersey"
                  className="border border-[#000] p-3 rounded-lg focus:outline-[#FAE115] placeholder-black"
                  required
                />
                <input
                  type="number"
                  placeholder="Quantity"
                  className="border border-[#000] p-3 rounded-lg focus:outline-[#FAE115] placeholder-black"
                  required
                />
                <input
                  type="text"
                  placeholder="home, away, third"
                  className="border border-[#000] p-3 rounded-lg focus:outline-[#FAE115] placeholder-black"
                />
                <button
                  className="bg-[#000] md:mr-24  hover:scale-105 transition-all duration-500 text-[#FAE115] uppercase text-center py-4 px-8 justify-start  shadow-[#00000040] rounded-md shadow-xl"
                  type="submit"
                >
                  Book order
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      <div
        className={`bg-black text-white px-4 py-8 md:ml-[28px] md:mr-[28px] ${
          showModal ? 'blur-lg' : 'blur-none'
        }`}
      >
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
            <button className="bg-[#FAE115] text-black mt-5 font-bold p-2 w-[40%] mx-auto">
              Buy Ticket
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
              onClick={() => setShowModal(true)}
            >
              Buy Ticket
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
                onClick={() => setShowModal(true)}
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
