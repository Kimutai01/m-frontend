import forward1 from "../../assets/forward1.png";
import forward2 from "../../assets/forward2.png";

const Forwards = () => {
  const forwards = [
    {
      name1: "Christian ",
      name2: "Mutiso",
      image: forward1,
      number: "06",
      id: 8,
    },
    {
      name1: "Tom",
      name2: "Kangeta",

      image: forward2,
      number: "06",
      id: 9,
    },
  ];
  return (
    <div>
      <div className="my-4 ml-8">
        <h1 className="text-4xl pb-4 md:pb-0 md:p-4 font-bold">Forwards</h1>
        <div className="flex flex-col md:flex-row p-2 gap-8">
          {forwards.map((forward) => (
            <div
              key={forward.id}
              className="w-[300px] flex-flex-col cursor-pointer hover:scale-105 transition ease-in-out duration-500"
            >
              <img src={forward.image} alt="player" />
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h1 className="">{forward.name1}</h1>
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
