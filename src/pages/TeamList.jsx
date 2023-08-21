import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';

import {
  fetchTeams,
  deleteTeamById,
  createNewTeam,
  createTeamsReset,
  selectAllTeams,
  getCreatedTeam,
  getTeamsStatus,
  getTeamsError,
} from '../features/teamsSlice';

const TeamList = () => {
  const navigate = useNavigate();
  const teams = useSelector(selectAllTeams);
  console.log(teams);
  const error = useSelector(getTeamsError);
  const status = useSelector(getTeamsStatus);
  const dispatch = useDispatch();
  const created = useSelector(getCreatedTeam);

  const fetchAllTeams = () => {
    dispatch(fetchTeams());
  };

  useEffect(() => {
    fetchAllTeams();
  }, []);

  useEffect(() => {
    if (status === 'failed') {
      toast.error(error, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });
    }
  }, [status, error]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch(deleteTeamById(id));
      toast.success('Product Deleted Successfully', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });
    }
  };

  const createTeamHandler = () => {
    dispatch(createNewTeam());
  };

  useEffect(() => {
    if (created && created._id) {
      navigate(`/admin/teams/${created._id}/edit`);

      dispatch(createTeamsReset());
    }
  }, [created, navigate, dispatch]);

  return (
    <div className="bg-[#000] pt-20 px-20">
      <ToastContainer />
      <div className="flex justify-between">
        <h1 className="text-[#fff] text-3xl uppercase items-center font-bold mt-10">
          Teams
        </h1>
        <button
          className="why-btn ml-40  mt-10 mb-10 "
          type="button"
          onClick={createTeamHandler}
        >
          <h1 className="font-bold">Create Team</h1>
        </button>
      </div>
      {status === 'loading' && (
        <div className="flex justify-center items-center pt-28 bg-black">
          <div className="w-20 h-20 rounded-full animate-spin border-2 border-solid border-[red] border-t-transparent" />
        </div>
      )}
      <div className="w-full">
        <table className="table-fixed text-[#fff] w-full">
          <thead>
            <tr>
              <th className="w-1/12 ">ID</th>
              <th className="w-1/6">Logo</th>
              <th className="w-1/6">Name</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((product) => (
              <tr key={product._id} className="border-b border-[#555]">
                <td className="py-2">{product._id}</td>
                <td className="py-2">
                  <img
                    src={`http://127.0.0.1:8000${product.logo}`}
                    alt={product.name}
                    className="h-20 mx-auto w-[65%] rounded-t-lg"
                  />
                </td>
                <td className="py-2">{product.name}</td>

                <td className="py-2">
                  <Link to={`/admin/teams/${product._id}/edit`}>
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
                    onClick={() => deleteHandler(product._id)}
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

export default TeamList;
