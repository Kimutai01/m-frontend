import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams, Link } from "react-router-dom";
// import { selectUser } from '../features/userSlice';
import {
  // fetchNews,
  fetchTeamById,
  // selectAllNews,
  selectSingleTeam,
  updateTeamById,
} from "../features/teamsSlice";

const TeamEdit = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const teamById = useSelector(selectSingleTeam);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      updateTeamById({
        _id: teamById._id,
        name,
        image,
      })
    );

    toast.success("News Updated Successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
    });

    navigate("/admin/teams");
  };
  // const user = useSelector(selectUser);

  const uploadFileHandler = (files) => {
    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("upload_preset", "e2e6z2lx");

    fetch("https://api.cloudinary.com/v1_1/dapnnry4b/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setImage(data.secure_url);
      });
  };

  useEffect(() => {
    dispatch(fetchTeamById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (teamById) {
      setName(teamById.name);
      setImage(teamById.logo);
    }
  }, [teamById]);

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
          Edit Team
        </h1>
        <div className="flex justify-center md:flex-row gap-5 pt-10">
          <div className="flex flex-col w-full">
            <label
              htmlFor="name"
              className="text-white mb-3 uppercase font-bold"
            >
              Name
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
                className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
              />
            </label>
          </div>
        </div>

        <div className="flex justify-center md:flex-row mt-10 gap-5">
          <div className="flex flex-col w-full">
            <img src={image} alt="" className="h-20 w-20" />
            <label
              htmlFor="image"
              className="text-white mb-3 uppercase font-bold"
            >
              Image
              <input
                type="file"
                accept="image/*"
                id="image"
                onChange={(e) => uploadFileHandler(e.target.files)}
                className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
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

export default TeamEdit;
