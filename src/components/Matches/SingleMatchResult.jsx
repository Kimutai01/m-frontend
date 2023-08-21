import banner from "../../assets/logo.png";
import wazito from "../../assets/wazitologo.png";

// eslint-disable-next-line import/prefer-default-export
const SingleMatchResult = ({ match }) => {
  return (
    <div className="flex flex-col justify-center md:flex-row mb-2 gap-5">
      <div className="bg-[#FFF] border-[#FAE115] border-t-4 mb-2 justify-between">
        <div className="flex justify-between border-[#FAE115] border-b-2 p-2">
          <p className="m-2">
            {match.date} at {match.time} | {match.stadium}
          </p>
          <p className="m-2">{match.category}</p>
        </div>
        <div className="flex gap-5 m-10">
          <div className=" align-center hidden md:flex flex-col">
            <img
              src={`http://localhost:8000${match.team1.logo}`}
              alt="logo"
              className="h-32 w-40"
            />
            <p>{match.team1.name} </p>
          </div>
          <div className="flex flex-col justify-center mb-10 text-5xl">
            {match.team1_score} - {match.team2_score}
          </div>
          <div className="align-center hidden md:flex flex-col">
            <img
              src={`http://localhost:8000${match.team2.logo}`}
              alt="logo"
              className="h-32 w-40"
            />
            <p>{match.team2.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMatchResult;
