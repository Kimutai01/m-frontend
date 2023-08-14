import banner from '../../assets/logo.png';
import wazito from '../../assets/wazitologo.png';

// eslint-disable-next-line import/prefer-default-export
const SingleMatch = () => (
  <div className="flex flex-col justify-center md:flex-row mb-2 gap-5">
    <div className="bg-[#FFF] border-[#FAE115] border-t-4 mb-2 justify-between">
      <div className="flex justify-between border-[#FAE115] border-b-2 p-2">
        <p className="m-2">Sun 29 April 2023 | St. Sebastian Park</p>
        <p className="m-2">Kenya Premier League</p>
      </div>
      <div className="flex m-10">

        <div className=" align-center hidden md:flex">
          <img src={banner} alt="logo" className="h-40" />
        </div>
        <div className="flex flex-col justify-center mb-10 ">
          <div className="flex flex-col">
            <div className="flex align-center text-center">
              <p className="mr-1">Sun 29 April</p>
              {/* vertical line */}
              <div className="border-l-2 border-[#000] h-5" />
              <p className="ml-1 mr-1">2:00pm</p>
              <div className="border-l-2 border-[#000] h-5" />
              <p className="ml-1">Murang&apos;a stadium</p>
            </div>
          </div>
        </div>
        <div className="align-center hidden md:flex">
          <img src={wazito} alt="logo" className="h-40" />
        </div>
      </div>

    </div>
  </div>
);

export default SingleMatch;
