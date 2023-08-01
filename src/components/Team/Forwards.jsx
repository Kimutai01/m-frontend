import forward1 from '../../assets/BrianJumaAT.png';
import forward2 from '../../assets/JohnMwitaAT.png';
import forward3 from '../../assets/SalimAT.png';
import forward4 from '../../assets/FrancisAT.png';

const Forwards = () => {
  const forwards = [
    {
      name1: 'Brian',
      name2: 'Juma',
      image: forward1,
      number: '06',
      id: 24,
    },
    {
      name1: 'John',
      name2: 'Mwita',
      image: forward2,
      number: '07',
      id: 25,
    },
    {
      name1: 'Salim',
      name2: 'Akatha',
      image: forward3,
      number: 25,
      id: 26,
    },
    {
      name1: 'Francis',
      name2: 'Ocholla',
      image: forward4,
      number: 88,
      id: 27,
    },
  ];
  return (
    <div>
      <div className="my-4 ml-8 justify-center">
        <h1 className="text-4xl pb-4 md:pb-0 md:p-4 font-bold">Forwards</h1>
        <hr className="ml-4 sm:w-[6%] md:w-[12%] lg:w-[12%] xl:w-[8%] w-[18%]  bg-[#FAE115] h-[10px] mb-2" />
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 flex-col text-center p-2 mb-6">
          {forwards.map((forward) => (
            <div
              key={forward.id}
              className="2xl:w-[300px] xl:w-[250px] lg:w-[250px] min-w-[200px] flex-flex-col cursor-pointer hover:scale-105 hover:text-[#FAE115] transition ease-in-out duration-500 mb-6"
            >
              <img src={forward.image} alt="player" />
              <div className="flex justify-between 2xl:w-[300px] xl:w-[250px] lg:w-[250px] max-w-[300px]">
                <div className="flex flex-col">
                  <h1 className="self-start">{forward.name1}</h1>
                  <h1 className="font-semibold text-2xl">{forward.name2}</h1>
                </div>
                <h1 className="text-gray-400 text-5xl">{forward.number}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forwards;
