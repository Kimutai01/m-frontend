import banner from '../../assets/clubhistory1.png';

const Membership = () => (
  <div className="flex flex-col-reverse md:flex-row">
    <div className="md:w-[50%] flex flex-col items-center text-center gap-5 justify-center p-5">
      <h1 className="font-bold text-2xl md:text-5xl">
        Murang&apos;a Seal membership
      </h1>
      <p className="md:text-4xl text-xl font-light">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi
      </p>
      <button className="uppercase p-4 bg-[#FAE115] md:w-[20%]" type="button">
        Join now
      </button>
    </div>
    <div className="md:w-[50%]">
      <img src={banner} alt="logo" className="w-[100vw]" height={300} />
    </div>
  </div>
);

export default Membership;
