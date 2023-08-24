import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Adverts from '../components/Matches/Adverts';

import { fetchNews, selectAllNews } from '../features/newsSlice';
import SingleNews from './SingleNews';
import Adverts from '../components/Matches/Adverts';

const NewsPage = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectAllNews);
  const newsStatus = useSelector((state) => state.news.status);

  useEffect(() => {
    if (newsStatus === 'idle') {
      dispatch(fetchNews());
    }
  }, [newsStatus, dispatch]);
  return (
    <div>
      <div>
        <div className="p-6 bg-[#FAE115] font-bold uppercase lg:text-5xl md:text-4xl text-3xl flex justify-between">
          NEWS
        </div>

        <div className="md:flex-row flex-col flex mt-10 mx-auto md:w-[60%] w-[90%]">
          <div className="flex flex-col md:flex-row md:flex md:justify-between">
            <div className="ml-4 mr-4 md:w-[80%] w-[90%] hover:border-[#FAE115] mb-10">
              {news.map((singleNews) => (
                <SingleNews key={singleNews.id} singleNews={singleNews} />
              ))}
              <div className="flex ml-7 md:ml-60 gap-10" />
            </div>
          </div>
          <Adverts />
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
