import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams, Link } from 'react-router-dom';

import {
  // fetchNews,
  fetchMatchById,
  // selectAllNews,
  selectSingleMatch,
  updateMatchById,
} from '../features/matchesSlice';

const MatchesEdit = () => {
  const { id } = useParams();
  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');
  const [team1Score, setTeam1Score] = useState('');
  const [team2Score, setTeam2Score] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  // const [image, setImage] = useState('');
  // const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const matchById = useSelector(selectSingleMatch);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      updateMatchById({
        _id: matchById._id,
        team1_score: team1Score,
        team2_score: team2Score,
        date,
        time,
      }),
    );

    toast.success('News Updated Successfully', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
    });

    navigate('/admin/matches');
  };

  // const uploadFileHandler = async (e) => {
  //   const file = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append('image', file);
  //   formData.append('team_id', id);

  //   try {
  //     setUploading(true);

  //     const config = {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //         Authorization: `Bearer ${user.token}`,
  //       },
  //     };

  //     const { data } = await axios.post(
  //       'https://mbackend-65aa08f37e31.herokuapp.com/api/teams/upload/',
  //       formData,
  //       config,
  //     );

  //     setImage(data);

  //     setUploading(false);
  //   } catch (error) {
  //     setUploading(false);
  //   }
  // };

  useEffect(() => {
    dispatch(fetchMatchById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (matchById) {
      setTeam1(matchById.team1?.name);
      setTeam2(matchById.team2?.name);
      setTeam1Score(matchById.team1_score);
      setTeam2Score(matchById.team2_score);
      setDate(matchById.date);
      setTime(matchById.time);
    }
  }, [matchById]);

  return (
    <div className="bg-[#000] pt-28">
      <Link to="/admin/teams">
        <button className="why-btn ml-40  mt-10 mb-10 " type="button">
          <h1 className="font-bold">Go Back</h1>
        </button>
      </Link>

      <ToastContainer />
      <div className="bg-[#161616] mx-auto w-[30%] px-10 rounded-lg pb-10">
        <h1 className="text-[#fff] text-center font-bold text-2xl pt-10">
          Edit Match
        </h1>
        <div className="flex justify-center md:flex-row gap-5 pt-10">
          <div className="flex flex-col w-full">
            <label
              htmlFor="name"
              className="text-white mb-3 uppercase font-bold"
            >
              Team 1
              <input
                type="text"
                id="name"
                name="name"
                value={team1}
                className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
                readOnly
              />
            </label>
          </div>
        </div>

        <div className="flex justify-center md:flex-row gap-5 pt-10">
          <div className="flex flex-col w-full">
            <label
              htmlFor="name"
              className="text-white mb-3 uppercase font-bold"
            >
              Team 2
              <input
                type="text"
                id="name"
                name="name"
                value={team2}
                className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
                readOnly
              />
            </label>
          </div>
        </div>
        <div className="flex justify-center md:flex-row gap-5 pt-10">
          <div className="flex flex-col w-full">
            <label
              htmlFor="name"
              className="text-white mb-3 uppercase font-bold"
            >
              {team1}
              {' '}
              score
              <input
                type="text"
                id="name"
                name="name"
                value={team1Score}
                className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
                onChange={(e) => setTeam1Score(e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="flex justify-center md:flex-row gap-5 pt-10">
          <div className="flex flex-col w-full">
            <label
              htmlFor="name"
              className="text-white mb-3 uppercase font-bold"
            >
              {team2}
              {' '}
              score
              <input
                type="text"
                id="name"
                name="name"
                value={team2Score}
                className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
                onChange={(e) => setTeam2Score(e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="flex justify-center md:flex-row gap-5 pt-10">
          <div className="flex flex-col w-full">
            <label
              htmlFor="name"
              className="text-white mb-3 uppercase font-bold"
            >
              date of match
              <input
                type="date"
                id="name"
                name="name"
                value={date}
                className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="flex justify-center md:flex-row gap-5 pt-10">
          <div className="flex flex-col w-full">
            <label
              htmlFor="name"
              className="text-white mb-3 uppercase font-bold"
            >
              Time
              <input
                type="time"
                id="name"
                name="name"
                value={time}
                className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
                onChange={(e) => setTime(e.target.value)}
              />
            </label>
          </div>
        </div>

        <button
          className="why-btn  w-full mt-10 mb-10 "
          onClick={(e) => submitHandler(e)}
          type="submit"
        >
          <h1 className="font-bold">Update</h1>
        </button>
      </div>
    </div>
  );
};

export default MatchesEdit;
