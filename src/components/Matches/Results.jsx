import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllMatches,
  fetchMatches,

} from '../../features/matchesSlice';
import SingleMatchResult from './SingleMatchResult';

const Results = () => {
  const dispatch = useDispatch();
  const matches = useSelector(selectAllMatches);

  console.log(matches);
  useEffect(() => {
    dispatch(fetchMatches());
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center md:flex-row gap-5   m-[4%]">
        <div>
          {matches.map((match) => (
            // eslint-disable-next-line react/jsx-key
            <SingleMatchResult match={match} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Results;
