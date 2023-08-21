import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllMatches,
  selectSingleMatch,
  getMatchesError,
  fetchMatches,
  updateMatchById,
  fetchMatchById,
} from "../../features/matchesSlice";
import SingleMatch from "./SingleMatch";
import Adverts from "./Adverts";

const Fixtures = () => {
  const dispatch = useDispatch();
  const matches = useSelector(selectAllMatches);
  const matchById = useSelector(selectSingleMatch);
  const error = useSelector(getMatchesError);

  console.log(matches);
  useEffect(() => {
    dispatch(fetchMatches());
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center md:flex-row gap-5   m-[4%]">
        <div>
          {matches.map((match) => (
            <SingleMatch match={match} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Fixtures;
