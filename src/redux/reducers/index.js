import axios from "axios";

import { GOT_ALL_CAMPUSES, ADDED_NEW_CAMPUS } from "./actionTypes";

const initialState = {
  campuses: [],
};

const gotAllCampuses = (payload) => ({
  type: GOT_ALL_CAMPUSES,
  payload,
});

const addedNewCampus = () => ({
  type: ADDED_NEW_CAMPUS,
});

export const getAllCampuses = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:8080/api/campuses");
      dispatch(gotAllCampuses(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addNewCampus = () => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/campuses/newCampus",
        { name: "yooooooo", address: "hfheowfhoe", description: "hello" }
      );
      dispatch(addedNewCampus());
    } catch (error) {
      console.error(error);
    }
  };
};

const campusReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_CAMPUSES:
      return { ...state, campuses: action.payload };
    case ADDED_NEW_CAMPUS:
      return state;
    default:
      return state;
  }
};

export default campusReducer;
