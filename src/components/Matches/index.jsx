import { useState } from 'react';
import SingleMatch from './SingleMatch';
import Membership from './Membership';
import Adverts from './Adverts';
import Fixtures from './Fixtures';
import Results from './Results';
import Table from './Table';

const Match = () => {
  const [activeComponent, setActiveComponent] = useState('performance check');

  return (
    <>
      {/* <div className="bg-[#e6e6e6]">
      <h1 className="p-8 bg-[#FAE115] font-bold uppercase text-5xl">Matches</h1>
      <div className="flex flex-col justify-center md:flex-row gap-5   m-[4%]">
        <div>
          <SingleMatch />
          <SingleMatch />
          <SingleMatch />
        </div>
        <Adverts />
      </div>
      <Membership />
    </div> */}
      <div className="bg-[#161616] md:w-[85%] rounded-xl mx-5 md:mx-32  ">
        <div className="flex flex-col md:flex-row justify-between md:border-b md:border-[grey] ">
          <div
            onClick={() => setActiveComponent('performance check')}
            className="border-b border-[grey] md:border-none "
          >
            {activeComponent === 'performance check' ? (
              <h1 className="bg-[#ff4d23] text-white text-xl text-center md:text-left md:text-3xl p-3 md:p-6 rounded-xl uppercase font-bold">
                Performance check
              </h1>
            ) : (
              <h1 className="text-white p-3 text-center md:p-6 text-xl md:text-3xl font-bold uppercase">
                Performance check
              </h1>
            )}
          </div>
          <div
            onClick={() => setActiveComponent('autocheck')}
            className="border-b border-[grey] md:border-none"
          >
            {activeComponent === 'autocheck' ? (
              <h1 className="bg-[#ff4d23] text-white text-xl text-center md:text-left md:text-3xl p-3 md:p-6 rounded-xl uppercase font-bold">
                Auto Maintainance
              </h1>
            ) : (
              <h1 className="text-white p-3 text-center md:p-6 text-xl md:text-3xl font-bold uppercase">
                Auto Maintainance
              </h1>
            )}
          </div>

          <div onClick={() => setActiveComponent('fleet services')}>
            {activeComponent === 'fleet services' ? (
              <h1 className="bg-[#ff4d23] text-white text-xl text-center md:text-left md:text-3xl p-3 md:p-6 rounded-xl uppercase font-bold">
                Fleet services
              </h1>
            ) : (
              <h1 className="text-white p-3 text-center md:p-6 text-xl md:text-3xl font-bold uppercase">
                Fleet services
              </h1>
            )}
          </div>
        </div>

        {activeComponent === 'performance check' && <Fixtures />}
        {activeComponent === 'autocheck' && <Results />}
        {activeComponent === 'fleet services' && <Table />}
      </div>
    </>
  );
};

export default Match;
