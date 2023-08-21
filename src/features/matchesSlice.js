import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const matchUrl = "https://mbackend-65aa08f37e31.herokuapp.com/api/matches";
const initialState = {
  matches: [],
  status: "idle",
  error: null,
  createdMatch: {},
  match: {},
};

export const fetchMatches = createAsyncThunk(
  "matches/fetchMatches",
  async () => {
    const response = await axios.get(matchUrl);
    return response.data;
  }
);

export const fetchMatchById = createAsyncThunk(
  "matches/fetchMatchById",
  async (id) => {
    const response = await axios.get(`${matchUrl}/${id}`);
    return response.data;
  }
);

export const updateMatchById = (matches) => async (dispatch, getState) => {
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
    await axios.put(`${matchUrl}/update/${matches._id}/`, matches, config);
    dispatch(fetchMatches());
  } catch (error) {
    console.error("Error updating product:", error);
  }
};

export const deleteMatchById = (id) => async (dispatch, getState) => {
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
    await axios.delete(`${matchUrl}/delete/${id}`, config);
    dispatch(deleteMatch(id));
    dispatch(fetchMatches());
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};

export const createNewMatch = () => async (dispatch, getState) => {
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
    const { data } = await axios.post(`${matchUrl}/create/`, {}, config);
    dispatch(fetchMatches());
    dispatch(createMatch(data));
  } catch (error) {
    console.error("Error creating product:", error);
  }
};

const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
    createMatch: (state, action) => {
      state.createdMatch = action.payload;
    },
    createMatchReset: (state) => {
      state.createdMatch = {};
    },
    deleteMatch: (state, action) => {
      state.matches = state.matches.filter(
        (match) => match._id !== action.payload
      );
    },
  },
  extraReducers: {
    [fetchMatches.pending]: (state) => {
      state.status = "loading";
    },
    [fetchMatches.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.matches = action.payload;
    },
    [fetchMatches.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [fetchMatchById.pending]: (state) => {
      state.status = "loading";
    },
    [fetchMatchById.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.match = action.payload;
    },
    [fetchMatchById.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default matchesSlice.reducer;

export const { deleteMatch } = matchesSlice.actions;
export const { createMatch } = matchesSlice.actions;
export const { createMatchReset } = matchesSlice.actions;
export const selectAllMatches = (state) => state.match.matches;
export const selectSingleMatch = (state) => state.match.match;
export const getMatchesStatus = (state) => state.match.status;
export const getMatchesError = (state) => state.match.error;
export const getCreatedMatch = (state) => state.match.createdMatch;
