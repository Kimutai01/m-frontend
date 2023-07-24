import { useState } from "react";
import banner from "../../assets/banner.png";
import news1 from "../../assets/news1.png";
import news2 from "../../assets/news2.png";
import news3 from "../../assets/news3.png";
import news4 from "../../assets/news4.png";
import featured1 from "../../assets/featured1.png";

const Landing = () => {
  const [current, setCurrent] = useState(0);
  const images = [news1, news2, news3, news4];
  const changeImage = () => {
    setTimeout(() => {
      setCurrent(current === images.length - 1 ? 0 : current + 1);
    }, 500);
  };
  const news = [
    {
      id: 1,
      title: "AQUINAS FC  1-0 MURANGA SEAL ",
      description: "Penalty for Wazito fc on the ground  ",
      date: " 20th/ April/ 2023 ",
      image: news1,
    },
    {
      id: 1,
      title: "WAZITO FC  1-0 MURANGA SEAL ",
      description: "Penalty for Wazito fc on the ground  ",
      date: " 20th/ April/ 2023 ",
      image: news2,
    },
    {
      id: 1,
      title: "WAZITO FC  1-0 MURANGA SEAL ",
      description: "Penalty for Wazito fc on the ground  ",
      date: " 20th/ April/ 2023 ",
      image: news3,
    },
    {
      id: 1,
      title: "WAZITO FC  1-0 MURANGA SEAL ",
      description: "Penalty for Wazito fc on the ground  ",
      date: " 20th/ April/ 2023 ",
      image: news4,
    },
  ];

  const featuredNews = [
    {
      id: 1,
      title: "DONT MISS THIS GAME FOR ALL STARS VS SEALS",
      image: featured1,
    },
    {
      id: 2,
      title: "DONT MISS THIS GAME FOR ALL STARS VS SEALS",
      image: featured1,
    },
  ];
  return (
    <div className="flex flex-col md:flex-row gap-5 mt-20  m-4 md:m-[28px]">
      <div>
        <div>
          <a
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row "
          >
            <img
              className="object-cover w-full rounded-t-lg h-[400px] md:w-[750px] md:rounded-none md:rounded-l-lg hover:bg-[#FAE115]"
              src={banner}
              alt=""
            />
            <div className="flex flex-col justify-between leading-normal p-2">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </a>
        </div>
        <div className="flex flex-col md:flex-row bg-[#FAE115]  justify-between md:mr-[20px]">
          {news.map((item) => (
            <div
              key={item.id}
              className="flex  h-32 md:h-min p-[2px]   flex-row-reverse md:flex-col-reverse justify-between md:mt-5 md:p-2  group hover:bg-[#FAE115]  hover:scale-105 transition-all duration-500 cursor-pointer"
              onMouseEnter={changeImage}
            >
              <div className="flex-col bg-white">
                <p className="md:bg-[#FAE115] p-2 flex group-hover:bg-black group-hover:text-white justify-center  rounded-lg font-semibold">
                  Feature
                </p>
                <p className="font-medium text-sm">{item.title}</p>
                <p className="text-sm">{item.description}</p>
              </div>
              <img className="" src={item.image} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white  flex flex-col md:flex-row border-t-indigo-500">
        <div className="flex flex-col md:items-end mt-5 gap-5  ">
          {featuredNews.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:w-[303px] text-white bg-black"
            >
              <img src={item.image} alt="" className="md:w-[300px]" />
              <p className=" text-xs p-2">Featured</p>
              <p className="text-xl p-4 font-bold w-[90%]">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
