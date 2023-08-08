import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { loginSuccess } from './userSlice';

const initialState = {
  userDetails: {},
};

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    const {
      user: { user },
    } = getState();
    const { token } = user;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(
      `https://mbackend-65aa08f37e31.herokuapp.com/api/users/${id}/`,
      config,
    );

    dispatch(userDetails(data));
  } catch (error) {
    console.error('Error updating profile:', error);
  }
};

export const updateUserProfile = (userr) => async (dispatch, getState) => {
  try {
    const {
      user: { user },
    } = getState();
    const { token } = user;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.put(
      'https://mbackend-65aa08f37e31.herokuapp.com/api/users/profile/update/',
      userr,
      config,
    );
    dispatch(loginSuccess(data));
    dispatch(userDetails(data));
    dispatch(updateUser(data));
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    console.error('Error updating profile:', error);
  }
};

export const updateUserProfileAdmin = (userr) => async (dispatch, getState) => {
  try {
    const {
      user: { user },
    } = getState();
    const { token } = user;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    await axios.put(
      `https://mbackend-65aa08f37e31.herokuapp.com/api/users/update/${userr.id}/`,
      userr,
      config,
    );
    dispatch(getUserDetails(userr.id));
  } catch (error) {
    console.error('Error updating profile:', error);
  }
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    userDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    updateUser: (state, action) => {
      state.userDetails = action.payload;
    },
    userDetailReset: (state) => {
      state.userDetails = {};
    },
  },
});

export const { userDetails, updateUser, userDetailReset } = profileSlice.actions;

export const selectUserDetails = (state) => state.userDetails.userDetails;

export default profileSlice.reducer;
