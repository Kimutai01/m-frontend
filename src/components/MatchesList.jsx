import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

import {
  fetchMatches,
  deleteMatchById,
  createNewMatch,
  createMatchReset,
  selectAllMatches,
  getCreatedMatch,
  getMatchesStatus,
  getMatchesError,
} from "../features/matchesSlice";

const MatchesList = () => {
  const navigate = useNavigate();
  const matches = useSelector(selectAllMatches);
  console.log(matches);
  const error = useSelector(getMatchesError);
  const status = useSelector(getMatchesStatus);
  const dispatch = useDispatch();
  const created = useSelector(getCreatedMatch);

  const fetchAllMatches = () => {
    dispatch(fetchMatches());
  };

  useEffect(() => {
    fetchAllMatches();
  }, []);

  useEffect(() => {
    fetch("https://mbackend-65aa08f37e31.herokuapp.com/api/teams/").then(
      (res) => res.json()
    );
  }, []);

  useEffect(() => {
    if (status === "failed") {
      toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });
    }
  }, [status, error]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteMatchById(id));
      toast.success("Match Deleted Successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });
    }
  };

  const createMatchHandler = () => {
    dispatch(createNewMatch());
  };

  useEffect(() => {
    if (created && created._id) {
      navigate(`/admin/matches/${created._id}/edit`);

      dispatch(createMatchReset());
    }
  }, [created, navigate, dispatch]);

  return (
    <div className="bg-[#000] pt-20 px-20">
      <ToastContainer />
      <div className="flex justify-between">
        <h1 className="text-[#fff] text-3xl uppercase items-center font-bold mt-10">
          Matches
        </h1>
        <button
          className="why-btn ml-40  mt-10 mb-10 "
          type="button"
          onClick={createMatchHandler}
        >
          <h1 className="font-bold">Create Match</h1>
        </button>
      </div>
      {status === "loading" && (
        <div className="flex justify-center items-center pt-28 bg-black">
          <div className="w-20 h-20 rounded-full animate-spin border-2 border-solid border-[red] border-t-transparent" />
        </div>
      )}
      <div className="w-full">
        <table className="table-fixed text-[#fff] w-full">
          <thead>
            <tr>
              <th className="w-1/12 ">ID</th>
              <th className="w-1/6">team1 photo</th>
              <th className="w-1/6">team1 name</th>
              <th className="w-1/6">team2 photo</th>
              <th className="w-1/6">team2 name</th>
              <th className="w-1/6">date</th>
              <th className="w-1/6">time</th>
              <th className="w-1/6">team1 score</th>
              <th className="w-1/6">team2 score</th>
              <th className="w-1/6">Name</th>
            </tr>
          </thead>
          <tbody>
            {matches.map((match) => (
              <tr key={match._id} className="border-b border-[#555]">
                <td className="py-2">{match._id}</td>
                <td className="py-2">
                  <img
                    className="w-20 h-20 rounded-full"
                    src="match.team1?.logo}"
                    alt={match.team1?.name}
                  />
                </td>
                <td className="py-2">{match.team1?.name}</td>
                <td className="py-2">
                  <img
                    className="w-20 h-20 rounded-full"
                    src={match.team2?.logo}
                    alt={match.team2?.name}
                  />
                </td>

                <td className="py-2">{match.team2?.name}</td>
                <td className="py-2">{match.date}</td>
                <td className="py-2">{match.time}</td>
                <td className="py-2">{match.team1_score}</td>
                <td className="py-2">{match.team2_score}</td>

                <td className="py-2">
                  <Link to={`/admin/matches/${match._id}/edit`}>
                    <button
                      className="bg-[#ff4d24] text-white px-4 py-2 rounded-lg"
                      type="button"
                    >
                      <h1 className="font-bold">Edit</h1>
                    </button>
                  </Link>
                </td>
                <td className="py-2">
                  <button
                    className="bg-[#ff4d24] text-white px-4 py-2 rounded-lg"
                    type="button"
                    onClick={() => deleteHandler(match._id)}
                  >
                    <h1 className="font-bold">Delete</h1>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MatchesList;
