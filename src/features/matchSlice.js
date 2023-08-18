import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const matchUrl = "http://127.0.0.1:8000/api/matches";
const initialState = {
  matches: [],
  status: "idle",
  error: null,
  createdMatch: {},
  match: {},
};

export const fetchMatches = createAsyncThunk("news/fetchMatches", async () => {
  const response = await axios.get(newsUrl);
  return response.data;
});

export const fetchMatchById = createAsyncThunk(
  "news/fetchMatchById",
  async (id) => {
    const response = await axios.get(`${newsUrl}/${id}`);
    return response.data;
  }
);

export const updateMatchById = (news) => async (dispatch, getState) => {
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
    await axios.put(`${matchUrl}/update/${news._id}/`, news, config);
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
    const { data } = await axios.post(`${newsUrl}/create/`, {}, config);
    dispatch(fetchNews());
    dispatch(createNews(data));
  } catch (error) {
    console.error("Error creating product:", error);
  }
};

const matchSlice = createSlice({
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
      state.new = action.payload;
    },
    [fetchMatchById.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default matchSlice.reducer;

export const { deleteMatch } = matchSlice.actions;
export const { createMatch } = matchSlice.actions;
export const { createMatchReset } = matchSlice.actions;
export const selectAllMatches = (state) => state.matches.matches;
export const selectSingleMatch = (state) => state.matches.match;
export const getMatchesStatus = (state) => state.matches.status;
export const getMatchesError = (state) => state.matches.error;
export const getCreatedMatch = (state) => state.matches.createdMatch;
