import goalkeeper1 from '../../assets/wilsongk.png';
import goalkeeper2 from '../../assets/goalkeeper2.png';
import goalkeeper3 from '../../assets/christiangk.png';

const Goalkeeper = () => {
  const goalkeepers = [
    {
      name1: 'Wilson',
      name2: 'Mwangi',
      image: goalkeeper1,
      number: '01',
      id: 1,
    },
    {
      name1: 'Kevin',
      name2: 'Magona',
      image: goalkeeper2,
      number: '22',
      id: 2,
    },
    {
      name1: 'Christian',
      name2: 'Kimeu',
      image: goalkeeper3,
      number: '33',
      id: 3,
    },
  ];

  return (
    <>
      <div className="my-4 ml-8">
        <h1 className="text-4xl pb-4 md:pb-0 md:p-4 font-bold">Goalkeepers</h1>
        <hr className="ml-4 sm:w-[6%] md:w-[12%] lg:w-[12%] xl:w-[8%] w-[18%]  bg-[#FAE115] h-[10px] mb-2" />
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 flex-col text-center p-2 mb-6">
          {goalkeepers.map((goalkeeper) => (
            <div
              key={goalkeeper.id}
              className="2xl:w-[300px] xl:w-[250px] lg:w-[250px] min-w-[200px] flex-flex-col cursor-pointer hover:scale-105 hover:text-[#FAE115] transition ease-in-out duration-500"
            >
              <img src={goalkeeper.image} alt="player" />
              <div className="flex justify-between 2xl:w-[300px] xl:w-[250px] lg:w-[250px] max-w-[300px]">
                <div className="flex flex-col">
                  <h1 className="self-start uppercase">{goalkeeper.name1}</h1>
                  <h1 className="font-semibold text-2xl uppercase">{goalkeeper.name2}</h1>
                </div>
                <h1 className="text-5xl">{goalkeeper.number}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Goalkeeper;
