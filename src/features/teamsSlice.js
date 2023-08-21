import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const teamsUrl = "https://mbackend-65aa08f37e31.herokuapp.com/api/teams";
const initialState = {
  teams: [],
  status: "idle",
  error: null,
  createdTeam: {},
  team: {},
};

export const fetchTeams = createAsyncThunk("teams/fetchTeams", async () => {
  const response = await axios.get(teamsUrl);
  return response.data;
});

export const fetchTeamById = createAsyncThunk(
  "teams/fetchTeamById",
  async (id) => {
    const response = await axios.get(`${teamsUrl}/${id}`);
    return response.data;
  }
);

export const updateTeamById = (teams) => async (dispatch, getState) => {
  try {
    const {
      user: { user },
    } = getState();
    const { token } = user;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    await axios.put(`${teamsUrl}/update/${teams._id}/`, teams, config);
    dispatch(fetchTeams());
  } catch (error) {
    console.error("Error updating product:", error);
  }
};

export const deleteTeamById = (id) => async (dispatch, getState) => {
  try {
    const {
      user: { user },
    } = getState();
    const { token } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios.delete(`${teamsUrl}/delete/${id}`, config);
    dispatch(deleteTeam(id));
    dispatch(fetchTeams());
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};

export const createNewTeam = () => async (dispatch, getState) => {
  try {
    const {
      user: { user },
    } = getState();
    const { token } = user;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.post(`${teamsUrl}/create/`, {}, config);
    dispatch(fetchTeams());
    dispatch(createTeam(data));
  } catch (error) {
    console.error("Error creating product:", error);
  }
};

const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    createTeam: (state, action) => {
      state.createdTeam = action.payload;
    },
    createTeamsReset: (state) => {
      state.createdTeam = {};
    },
    deleteTeam: (state, action) => {
      state.teams = state.teams.filter((teams) => teams._id !== action.payload);
    },
  },
  extraReducers: {
    [fetchTeams.pending]: (state) => {
      state.status = "loading";
    },
    [fetchTeams.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.teams = action.payload;
    },
    [fetchTeams.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [fetchTeamById.pending]: (state) => {
      state.status = "loading";
    },
    [fetchTeamById.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.team = action.payload;
    },
    [fetchTeamById.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default teamsSlice.reducer;

export const { deleteTeam } = teamsSlice.actions;
export const { createTeam } = teamsSlice.actions;
export const { createTeamsReset } = teamsSlice.actions;
export const selectAllTeams = (state) => state.teams.teams;
export const selectSingleTeam = (state) => state.teams.team;
export const getTeamsStatus = (state) => state.teams.status;
export const getTeamsError = (state) => state.teams.error;
export const getCreatedTeam = (state) => state.teams.createdTeam;
