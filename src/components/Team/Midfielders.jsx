import midfielder1 from "../../assets/midfielder1.png";
import midfielder2 from "../../assets/midfielder2.png";

const Midfielders = () => {
  const midfielders = [
    {
      name1: "Francis",
      name2: "Ocholla",
      image: midfielder1,
      id: 6,
      number: "06",
    },
    {
      name1: "Victory",
      name2: "Onyango",
      image: midfielder2,
      number: "22",
      id: 7,
    },
  ];
  return (
    <div className="my-4 ml-8">
      <h1 className="text-4xl pb-4 md:pb-0 md:p-4 font-bold">Midfielders</h1>
      <div className="flex flex-col md:flex-row p-2 gap-8">
        {midfielders.map((midfielder) => (
          <div
            key={midfielder.id}
            className="w-[300px] flex-flex-col cursor-pointer hover:scale-105 transition ease-in-out duration-500"
          >
            <img src={midfielder.image} alt="player" />
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h1 className="">{midfielder.name1}</h1>
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
