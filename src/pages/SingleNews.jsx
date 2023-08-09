import React from 'react';
import { Link } from 'react-router-dom';

const SingleNews = ({ singleNews }) => (
  <Link to={`/news/${singleNews.id}`}>
    <div className=" mt-5 flex mb-6 h-28 md:w-[100%] md:h-40 hover:shadow-lg hover:shadow-[#FAE115] md:hover:scale-105 lg:h-auto border-r border-b border-l border-t lg:border-l-0 lg:border-t">
      <div className=" h-28 md:h-40  sm:h-30 lg:rounded-t-none lg:rounded-l md:text-center overflow-hidden">
        {/* <%= image_tag(news.image, class: "w-28 md:w-96 h-28 md:h-40 ") %> */}
        <img
          src={`https://mbackend-65aa08f37e31.herokuapp.com${singleNews.image}`}
          alt=""
          className="w-28 md:w-96 h-28 md:h-40 "
        />
      </div>
      <div className="lg:w-[90%] w-[300px] bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-start leading-normal">
        <div className="">
          <p className="text-sm text-gray-600 flex items-center uppercase">
            {singleNews.category}
          </p>

          <div className="text-gray-900 font-bold text-xl mb-2 md:mt-3 sm:text-sm md:text-xl truncate ">
            {singleNews.title}
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export default SingleNews;
