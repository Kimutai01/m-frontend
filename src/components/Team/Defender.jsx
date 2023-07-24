import defender1 from "../../assets/defender1.png";
import defender2 from "../../assets/defender2.png";
import defender3 from "../../assets/defender3.png";

const Defender = () => {
  const defenders = [
    {
      name1: "Samuel",
      name2: "Semo",
      image: defender1,
      number: "06",
      id: 3,
    },
    {
      name1: "Henry",
      name2: "Omollo",
      image: defender2,
      id: 4,
      number: "03",
    },
    {
      name1: "Victory",
      name2: "Onyango",
      image: defender3,
      id: 5,
      number: "22",
    },
  ];
  return (
    <div className="my-4 ml-8">
      <h1 className="text-4xl pb-4 md:pb-0 md:p-4 font-bold">Defenders</h1>
      <div className="flex flex-col md:flex-row p-2 gap-8">
        {defenders.map((defender) => (
          <div
            key={defender.id}
            className="w-[300px] flex-flex-col cursor-pointer hover:scale-105 transition ease-in-out duration-500"
          >
            <img src={defender.image} alt="player" />
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h1 className="">{defender.name1}</h1>
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
