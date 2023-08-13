import SingleMatch from './SingleMatch';
import Membership from './Membership';

const Ticket = () => (
  <div>
    <h1 className="p-8 bg-[#FAE115] font-bold uppercase text-5xl">Tickets</h1>
    <div className="m-[4%] ">
      <SingleMatch />
      <SingleMatch />
      <SingleMatch />
    </div>
    <Membership />
  </div>
);

export default Ticket;
