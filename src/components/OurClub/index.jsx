import clubhistory1 from '../../assets/clubhistory1.png';
import clubhistory2 from '../../assets/clubhistory2.png';
import clubhistory3 from '../../assets/clubhistory3.png';
import clubhistory4 from '../../assets/clubhistory4.png';
import clubhistory5 from '../../assets/clubhistory5.png';

const index = () => {
  const clubhistorycontent = [
    {
      id: 1,
      image: clubhistory1,
      title: 'Our team members',
      content:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi ',
    },
    {
      id: 2,
      image: clubhistory2,
      title: 'Our management',
      content:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi ',
    },
    {
      id: 3,
      image: clubhistory3,
      title: 'OUR SPONSORS  &  PARTNERS ',
      content:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi ',
    },
    {
      id: 4,
      image: clubhistory4,
      title: 'Our Academy',
      content:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi ',
    },
    {
      id: 5,
      image: clubhistory5,
      title: 'OUR  CLUB PRODUCTS  ',
      content:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi ',
    },
  ];

  return (
    <div>
      <div className="p-8 bg-[#FAE115] font-bold uppercase text-5xl">
        CLUB & HISTORY
      </div>

      {/* Club History */}

      <div className="flex flex-col gap-4">
        {clubhistorycontent.map((clubhistory) => (
          <div
            key={clubhistory.id}
            className={
              clubhistory.id % 2 === !0
                ? 'flex flex-col-reverse md:flex-row  items-center border-t-2  border-[#FAE115] my-4 bg-[#fdfee9] p-10'
                : 'flex  flex-col-reverse md:flex-row-reverse items-center border-t-2  border-[#FAE115] my-4 bg-[#fdfee9] p-4'
            }
          >
            <div className="flex flex-col  ">
              <h1 className="md:text-4xl text-3xl uppercase mt-5 font-normal mb-8">
                {clubhistory.title}
              </h1>
              <p className="md:w-[928px] font-light text-xl">
                {clubhistory.content}
              </p>

              <button
                className="w-[290px] h-[53px] bg-[#F4E721] font-normal my-3 py-3 text-2xl "
                type="button"
              >
                Read More
              </button>
            </div>

            <div className="my-10 mx-10">
              <img src={clubhistory.image} alt="logo" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
