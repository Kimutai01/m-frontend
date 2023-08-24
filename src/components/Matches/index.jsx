import { useState } from 'react';
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
      <div className="bg-[#fff] md:w-[85%] rounded-xl mx-5 md:mx-32  ">
        <div className="flex flex-col justify-center md:flex-row gap-10  ">
          <div
            onClick={() => setActiveComponent('performance check')}
            className="border-b border-[grey] mt-10 md:border-none "
          >
            {activeComponent === 'performance check' ? (
              <h1 className="bg-[#fae115] text-[#000] text-lg text-center md:text-left md:text-2xl p-3 md:p-2 rounded-xl uppercase font-bold">
                Matches
              </h1>
            ) : (
              <h1 className="text-[#000] p-2 text-center md:p-2 text-lg md:text-2xl font-bold uppercase">
                Matches
              </h1>
            )}
          </div>
          <div
            onClick={() => setActiveComponent('autocheck')}
            className="border-b border-[grey] md:border-none mt-10"
          >
            {activeComponent === 'autocheck' ? (
              <h1 className="bg-[#fae115] text-[#000] text-lg text-center md:text-left md:text-2xl p-3 md:p-2 rounded-xl uppercase font-bold">
                Fixtures
              </h1>
            ) : (
              <h1 className="text-[#000] p-2 text-center md:p-2 text-lg md:text-2xl font-bold uppercase">
                Fixtures
              </h1>
            )}
          </div>

          <div onClick={() => setActiveComponent('fleet services')}>
            {activeComponent === 'fleet services' ? (
              <h1 className="bg-[#fae115] text-[#000] text-lg text-center md:text-left md:text-2xl p-3 md:p-2 rounded-xl uppercase font-bold mt-10">
                Tables
              </h1>
            ) : (
              <h1 className="text-[#000] p-2 text-center md:p-2 text-lg md:text-2xl font-bold uppercase mt-10">
                Tables
              </h1>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center md:flex-row gap-10  ">
          {activeComponent === 'performance check' && <Fixtures />}
          {activeComponent === 'autocheck' && <Results />}
          {activeComponent === 'fleet services' && <Table />}
          <Adverts />
        </div>
      </div>
    </>
  );
};

export default Match;
