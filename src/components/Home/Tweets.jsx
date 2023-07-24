import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Tweets = () => (
  <div>
    <Swiper
      className="md:pr-20"
      spaceBetween={50}
      breakpoints={{
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 1,
        },
        // when window width is >= 1200px
        1200: {
          width: 1200,
          slidesPerView: 3,
        },
      }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        // navigation={true}
      pagination
    >
      <SwiperSlide className="p-20">
        <h1>
          <span className="text-[#FAE115]">Manager</span>
          {' '}
          seals Junior
        </h1>
        <p className="font-bold z-30 text-2xl">
          We are mentoring the future team leaders locally
        </p>
        <p className="text-[#F4EEEEB8] font-bold text-8xl absolute top-[35%] left-[70%] z-0">
          01
        </p>
        <button className="bg-[#FAE115] font-extralight p-2 my-4">
          Read Tweet
        </button>
      </SwiperSlide>
      <SwiperSlide className="p-20">
        <h1>
          <span className="text-[#FAE115]">Coaches</span>
          {' '}
          Seals
        </h1>
        <p className="font-bold z-30 text-2xl">
          We are mentoring the future team leaders locally
        </p>
        <p className="text-[#F4EEEEB8] font-bold text-8xl absolute top-[35%] left-[70%] z-0">
          02
        </p>
        <button className="bg-[#FAE115] font-extralight p-2 my-4">
          Read Tweet
        </button>
      </SwiperSlide>
      <SwiperSlide className="p-20">
        <h1>
          <span className="text-[#FAE115]">Coaches</span>
          {' '}
          Seals
        </h1>
        <p className="font-bold z-30 text-2xl">
          We are mentoring the future team leaders locally
        </p>
        <p className="text-[#F4EEEEB8] font-bold text-8xl absolute md:top-[35%] md:left-[70%] z-0">
          03
        </p>
        <button className="bg-[#FAE115] font-extralight p-2 my-4">
          Read Tweet
        </button>
      </SwiperSlide>
      <SwiperSlide className="p-20">
        <h1>
          <span className="text-[#FAE115]">Coaches</span>
          {' '}
          Seals
        </h1>
        <p className="font-bold z-30 text-2xl">
          We are mentoring the future team leaders locally
        </p>
        <p className="text-[#F4EEEEB8] font-bold text-8xl absolute top-[35%] left-[70%] z-0">
          04
        </p>
        <button className="bg-[#FAE115] font-extralight p-2 my-4">
          Read Tweet
        </button>
      </SwiperSlide>
    </Swiper>
  </div>
);

export default Tweets;
