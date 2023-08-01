import defender1 from '../../assets/defender1.png';
import defender2 from '../../assets/briandf.png';
import defender3 from '../../assets/HumphreyDF1.png';
import defender4 from '../../assets/PeterMwaura.png';
import defender5 from '../../assets/CentricDF.png';
import defender7 from '../../assets/VictorDF.png';
import defender8 from '../../assets/GideonWere.png';
import defender9 from '../../assets/RajabDF.png';
import defender10 from '../../assets/ThomasDF.png';

const Defender = () => {
  const defenders = [
    {
      name1: 'Samuel',
      name2: 'Semo',
      image: defender1,
      number: '70',
      id: 4,
    },
    {
      name1: 'Brian',
      name2: 'Marvin',
      image: defender2,
      number: '40',
      id: 5,
    },
    {
      name1: 'Humphrey',
      name2: 'Obina',
      image: defender3,
      id: 6,
      number: '22',
    },
    {
      name1: 'Peter',
      name2: 'Mwaura(Cpt)',
      image: defender4,
      id: 7,
      number: '04',
    },
    {
      name1: 'Centic',
      name2: 'Asango',
      image: defender5,
      id: 8,
      number: '21',
    },
    {
      name1: 'Victory',
      name2: 'Onyango',
      image: defender7,
      id: 9,
      number: '03',
    },
    {
      name1: 'Gideon',
      name2: 'Were',
      image: defender8,
      id: 10,
      number: '19',
    },
    {
      name1: 'Rajab',
      name2: 'Omar',
      image: defender9,
      id: 11,
      number: '12',
    },
    {
      name1: 'Thomas',
      name2: 'Wainaina',
      image: defender10,
      id: 12,
      number: '13',
    },

  ];
  return (
    <div className="my-4 ml-8">
      <h1 className="text-4xl pb-4 md:pb-0 md:p-4 font-bold">Defenders</h1>
      <hr className="ml-4 sm:w-[6%] md:w-[12%] lg:w-[12%] xl:w-[8%] w-[18%]  bg-[#FAE115] h-[10px]" />
      <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 flex-col text-center p-2">
        {defenders.map((defender) => (
          <div
            key={defender.id}
            className="w-[300px] flex-flex-col cursor-pointer hover:scale-105 hover:text-[#FAE115] transition ease-in-out duration-500 mb-6"
          >
            <img src={defender.image} alt="player" />
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h1 className="self-start">{defender.name1}</h1>
                <h1 className="font-semibold text-2xl">{defender.name2}</h1>
              </div>
              <h1 className="text-gray-400 text-5xl">{defender.number}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Defender;
