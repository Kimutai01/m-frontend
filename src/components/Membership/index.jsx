const index = () => {
  return (
    <div className="p-5 md:p-0">
      <div className="mt-12 mb-5 md:p-8 md:bg-[#FAE115] font-bold uppercase text-3xl md:text-5xl">
        Membership
      </div>
      <div className="md:w-[1280px] flex flex-col gap-4 md:my-24 md:mx-auto bg-[#F7F3ED] md:p-8">
        <h1 className="md:text-5xl text-2xl ">
          JOIN OUR MEMBERSHIP TODAY AND ENJOY OUR PREMIUM SERVICES
        </h1>
        <p className="text-xl font-light mt-5">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
          aliquam erat volutpat. Ut wisi
        </p>
        <div>
          <label htmlFor="">
            Type of membership interested in
            <span className="text-red-500">*</span>
          </label>
          <div>
            <input
              type="text"
              name="membership"
              className="border-b border-[#000] w-[100%] bg-[#F7F3ED] focus:outline-none"
            />
          </div>
        </div>

        <div className="flex  justify-between">
          <input
            type="text"
            placeholder="Title"
            className="h-[50px] w-[45%] p-2 border-b border-black bg-[#F7F3ED] focus:outline-none"
          />
          <input
            type="text"
            placeholder="Names"
            className="h-[50px] flex items-center p-2 w-[45%] border-b bg-[#F7F3ED] border-black focus:outline-none"
          />
        </div>
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="County/Region *"
            className="h-[50px] w-[45%] bg-[#F7F3ED] p-2 border-b border-black focus:outline-none"
            required
          />
          <input
            type="text"
            placeholder="Date of Birth *"
            className="h-[50px] flex bg-[#F7F3ED] items-center p-2 w-[45%] border-b border-black focus:outline-none"
          />
        </div>

        <input
          type="text"
          placeholder="Email *"
          className="h-[50px] bg-[#F7F3ED] w-[100%] p-2 border-b border-black focus:outline-none"
        />
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <p className="md:w-[60%] mb-6">
              Murang&lsquo;a seals may contact me by:
            </p>
            <input
              type="text"
              placeholder="Phone No"
              className="h-[50px] w-[100%] p-2 border-b bg-[#F7F3ED] border-black focus:outline-none"
            />
          </div>
          <div className="md:w-[855px] mt-3 md:mt-0 text-xl">
            Please let us know using the dropdown if you would like to be
            contacted by Murang&lsquo;a seals and its group companies with news
            and promotional information about Murang&lsquo;a seals its official
            sponsors and partners and their products and services, where we have
            the relevant contact details. Please read our Privacy Policy to
            learn more about us and its group companies, how we use your
            information and how to change your mind about receiving marketing
            from us.
          </div>
        </div>
        <button className="w-[300px] mt-10 mb-10 md:mb-10 md:mt-16  mx-auto p-4 bg-[#F4E721] text-3xl text-black">
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default index;
