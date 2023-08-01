import coach1 from '../../assets/coach1.png';
import coach2 from '../../assets/coach2.png';

const Coaches = () => {
  const coaches = [
    {
      image: coach1,
      name1: 'John',
      name2: 'Karanja',
      id: 10,
    },
    {
      image: coach2,
      name1: 'John',
      name2: 'Karanja',
      id: 11,
    },
  ];
  return (
    <>
      <div className="my-4 ml-8 justify-center">
        <h1 className="text-4xl pb-4 md:pb-0 md:p-4 font-bold">Coaches</h1>
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 flex-col text-center p-2 mb-6">
          {coaches.map((coach) => (
            <div
              key={coach.id}
              className="2xl:w-[300px] xl:w-[250px] lg:w-[250px] min-w-[200px] flex-flex-col cursor-pointer hover:scale-105 hover:text-[#FAE115] transition ease-in-out duration-500 mb-6"
            >
              <img src={coach.image} alt="player" />
              <div className="flex justify-between 2xl:w-[300px] xl:w-[250px] lg:w-[250px] max-w-[300px]">
                <div className="flex flex-col">
                  <h1 className="self-start">{coach.name1}</h1>
                  <h1 className="font-semibold text-2xl">{coach.name2}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Coaches;
