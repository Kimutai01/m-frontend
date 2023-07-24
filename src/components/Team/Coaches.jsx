import coach1 from '../../assets/coach1.png';
import coach2 from '../../assets/coach2.png';

const Coaches = () => {
  const coaches = [
    {
      image: coach1,
      id: 10,
    },
    {
      image: coach2,
      id: 11,
    },
  ];
  return (
    <>
      <div className="my-4 ml-8">
        <h1 className="text-4xl pb-4 md:pb-0 md:p-4 font-bold">Coaches</h1>
        <div className="flex flex-col md:flex-row md:p-2 gap-8">
          {coaches.map((coach) => (
            <div
              key={coach.id}
              className="w-[300px] flex-flex-col cursor-pointer hover:scale-105 transition ease-in-out duration-500"
            >
              <img src={coach.image} alt="player" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Coaches;
