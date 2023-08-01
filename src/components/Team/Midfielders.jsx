import midfielder1 from '../../assets/EricBalecho.png';
import midfielder2 from '../../assets/HenryDF.png';
import midfielder3 from '../../assets/John-Omondi-MF.png';
import midfielder4 from '../../assets/defender3.png';
import midfielder5 from '../../assets/JohnMwangiMF.png';
import midfielder6 from '../../assets/EricJumaMF.png';
import midfielder7 from '../../assets/AllyYusufMF.png';

const Midfielders = () => {
  const midfielders = [
    {
      name1: 'Eric',
      name2: 'Balecho',
      image: midfielder1,
      id: 11,
      number: '08',
    },
    {
      name1: 'Henry',
      name2: 'Omollo',
      image: midfielder2,
      number: '11',
      id: 12,
    },
    {
      name1: 'John',
      name2: 'Omondi',
      image: midfielder3,
      number: '39',
      id: 13,
    },
    {
      name1: 'Victory',
      name2: 'Onyango',
      image: midfielder4,
      number: '05',
      id: 14,
    },
    {
      name1: 'John',
      name2: 'Mwangi',
      image: midfielder5,
      number: '16',
      id: 15,
    },
    {
      name1: 'Eric',
      name2: 'Juma',
      image: midfielder6,
      number: 88,
      id: 16,
    },
    {
      name1: 'Ally',
      name2: 'Yusuf',
      image: midfielder7,
      number: 25,
      id: 17,
    },
    {
      name1: 'Eric',
      name2: 'Juma',
      image: midfielder6,
      number: '22',
      id: 18,
    },
    {
      name1: 'Eric',
      name2: 'Juma',
      image: midfielder6,
      number: '22',
      id: 19,
    },
    {
      name1: 'Eric',
      name2: 'Juma',
      image: midfielder6,
      number: '22',
      id: 20,
    },
    {
      name1: 'Eric',
      name2: 'Juma',
      image: midfielder6,
      number: '22',
      id: 21,
    },
    {
      name1: 'Eric',
      name2: 'Juma',
      image: midfielder6,
      number: '22',
      id: 22,
    },
    {
      name1: 'Eric',
      name2: 'Juma',
      image: midfielder6,
      number: '22',
      id: 23,
    },
  ];
  return (
    <div className="my-4 ml-8">
      <h1 className="text-4xl pb-4 md:pb-0 md:p-4 font-bold">Midfielders</h1>
      <hr className="ml-4 sm:w-[6%] md:w-[12%] lg:w-[12%] xl:w-[8%] w-[18%]  bg-[#FAE115] h-[10px] mb-2" />
      <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 flex-col text-center p-2">
        {midfielders.map((midfielder) => (
          <div
            key={midfielder.id}
            className="w-[300px] flex-flex-col cursor-pointer hover:scale-105 hover:text-[#FAE115] transition ease-in-out duration-500 mb-6"
          >
            <img src={midfielder.image} alt="player" />
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h1 className="self-start">{midfielder.name1}</h1>
                <h1 className="font-semibold text-2xl">{midfielder.name2}</h1>
              </div>
              <h1 className="text-gray-400 text-5xl">{midfielder.number}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Midfielders;
