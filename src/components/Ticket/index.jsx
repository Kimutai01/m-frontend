import { AiOutlineDown } from "react-icons/ai";
import SingleTicket from "./SingleTicket";
import Membership from "./Membership";

const Ticket = () => {
  return (
    <div>
      <h1 className="p-8 bg-[#FAE115] font-bold uppercase text-5xl">Tickets</h1>
      <div className="p-6">
        <h1 className="text-3xl font-normal mb-3">Ticket availability</h1>
        <button className="flex bg-[#FAE115] w-[317px] justify-between items-center">
          <p className="ml-4">All</p>
          <AiOutlineDown className="mr-4" size={35} />
        </button>
      </div>
      <div className="bg-[#D9D9D9] grid grid-cols-2 gap-4 p-6">
        <div>
          <button>Features</button>
        </div>
        <div className="flex justify-between pr-10">
          <button>On sale</button>
          <button>Now selling</button>
        </div>
      </div>
      <div className="bg-[#FAE115]">
        <SingleTicket />
        <SingleTicket />
        <SingleTicket />
      </div>
      <Membership />
    </div>
  );
};

export default Ticket;
