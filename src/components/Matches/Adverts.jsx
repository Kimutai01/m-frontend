import { useEffect, useState } from 'react';

const Adverts = () => {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/adverts/')
      .then((res) => res.json())
      .then((data) => setAdverts(data.slice(0, 1)));
  }, []);

  return (
    <div className="md:flex-col  border-t-indigo-500 ">
      {adverts.map((advert) => (
        <div
          key={advert._id}
          className="flex flex-col md:items-end gap-5 mb-2  sm:flex  "
        >
          <div className="flex flex-col lg:w-[300px] md:w-[300px]  text-white bg-black">
            <img
              src={`http://127.0.0.1:8000${advert.image}`}
              alt=""
              className="w-[300px] h-[300px] "
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Adverts;
