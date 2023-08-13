import SingleMatch from './SingleMatch';
import Membership from './Membership';
import Adverts from './Adverts';

const Ticket = () => (
  <div>
    <h1 className="p-8 bg-[#FAE115] font-bold uppercase text-5xl">Tickets</h1>
    <div className="flex flex-col justify-center md:flex-row gap-5   m-[4%]">
      <div>
        <SingleMatch />
        <SingleMatch />
        <SingleMatch />
      </div>
      <Adverts />
    </div>
    <Membership />
  </div>
);

export default Ticket;
