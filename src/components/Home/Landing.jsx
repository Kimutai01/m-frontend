import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import featured1 from "../../assets/featured1.png";

const Landing = () => {
  const [news, setNews] = useState([]);
  const [featured, setFeatured] = useState({});
  const [otherNews, setOtherNews] = useState([]);
  const [adverts, setAdverts] = useState([]);
  console.log(adverts);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/news/latest")
      .then((res) => res.json())
      .then((data) => setNews(data));

    news.map((news) => setFeatured(news));
  }, [news]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/news/otherlatest")
      .then((res) => res.json())
      .then((data) => setOtherNews(data));
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/adverts/")
      .then((res) => res.json())
      .then((data) => setAdverts(data.slice(0, 1)));
  }, []);

  return (
    <div className="flex flex-col justify-center md:flex-row gap-5   m-[4%]">
      <div className="">
        <div className="flex flex-col items-start h-16 bg-[#FAE115] border border-[#FAE115] shadow md:flex-row 2xl:min-w-[1024px] xl:min-w-[860px] lg:w-[650px] md:w-[500px] ">
          <h1 className="text-[#000] font-bold uppercase text-xl md:text-2xl lg:text-3xl pl-4 pt-4 2xl:min-w-[1024px] xl:min-w-[860px] lg:w-[650px] md:w-[500px]">
            {featured.title}
          </h1>
        </div>

        <div className=" flex flex-col items-start border-t-4 border border-[#FAE115] mt-3  shadow md:flex-row 2xl:min-w-[1024px] xl:min-w-[860px] lg:w-[650px] md:w-[500px] ">
          {/* <%= image_tag(news.image, class: "object-cover 2xl:w-[800px] xl:w-[600px] xl:h-[400px] lg:w-[400px] lg:h-[250px] md:h-[400px] md:w-[600px] sm:w-[200px]" ) %> */}
          <img
            src={`http://127.0.0.1:8000/${featured.image}`}
            alt=""
            className="object-cover 2xl:w-[800px] xl:w-[600px] xl:h-[400px] lg:w-[400px] lg:h-[250px] md:h-[400px] md:w-[600px] sm:w-[200px]"
          />
          <div className="flex flex-col justify-start leading-normal p-5">
            <h1 className="text-gray-500 uppercase font-medium">
              {featured.category}
            </h1>
            <h5 className="mb-6 text-3xl truncate max-w-[200px] font-bold tracking-tight text-[#000] mt-5 uppercase">
              {/* <%= news.type_of_news %> */}
              {featured.description}
            </h5>

            <p className="mb-2 font-normal text-[#000] truncate max-w-[200px] md:w-full lg:w-[300px]">
              {/* <%= news.header_news %> */}
            </p>
            <Link
              to="/news"
              class="bg-[#FAE115] p-2 flex group-hover:bg-black group-hover:text-white justify-center uppercase font-semibold"
            >
              <p className="bg-[#FAE115] sm:p-2 flex group-hover:bg-black group-hover:text-white justify-center uppercase font-semibold">
                Read More
              </p>
            </Link>
          </div>
        </div>

        <div className="md:grid grid-cols-3 md:grid-cols-3 gap-5 mt-[28px] 2xl:min-w-[1024px] xl:min-w-[860px] lg:w-[650px] md:w-[500px]">
          {/* <% @news.limit(4).each_with_index do |news, index| %>
          <% if index == 0 %>
            <%# Handle the last item separately %>
          <% else %>
            <% @news.length - index %> */}
          {otherNews.map((bla) => (
            <div className="" key={bla.id}>
              <div className="bg-white border border-[#FAE115] border-t-4 flex flex-col mt-2 hover:scale-105">
                {/* <%= image_tag(news.image, class: "h-[200px] w-full")  %> */}
                <img
                  src={`http://127.0.0.1:8000${bla.image}`}
                  alt=""
                  className="h-[200px] w-full"
                />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 truncate uppercase">
                    {/* <%= news.type_of_news %> */}
                    {bla.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 truncate ...">
                    {/* <%= news.header_news %>. */}
                    {bla.description}
                  </p>
                  <Link
                    to="/news"
                    class=" flex group-hover:bg-black  uppercase font-semibold"
                  >
                    <div className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-black hover:text-[#FAE115] bg-[#FAE115] uppercase hover:bg-white hover:border-[#FAE115] border focus:ring-4 focus:outline-none focus:ring-blue-300">
                      Read More
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white md:flex-col  border-t-indigo-500 ">
        {/* <% @advert.limit(2).each do |advert| %> */}
        {adverts.map((advert) => (
          <div
            key={advert.id}
            className="flex flex-col md:items-end gap-5 mb-2  sm:flex  "
          >
            <div className="flex flex-col lg:w-[300px] md:w-[300px] text-white bg-black">
              <img
                src={`http://127.0.0.1:8000${advert.image}`}
                alt=""
                className="w-[300px] h-[300px] "
              />
            </div>
          </div>
        ))}
        {/* <% end %>
          <% @advert.limit(1).each do |advert| %> */}
        {/* {advert.map((advert) => (
          <div
            className="sm:flex flex-col md:items-end m-[4%] md:hidden lg:hidden xl:hidden "
            key={advert.id}
          >
            <div className="flex flex-col w-[100%] h-[100px] text-white bg-black">
              <img
                src={advert.mobile_image}
                alt=""
                className="w-[100%] h-[100px] "
              />
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Landing;
