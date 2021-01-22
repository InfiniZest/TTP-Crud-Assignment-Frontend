import axios from "axios";

import {
  GOT_ALL_CAMPUSES,
  GOT_SINGLE_CAMPUS,
  ADDED_NEW_CAMPUS,
} from "./actionTypes";

const initialState = {
  campuses: [],
  singleCampus: {},
};

const gotAllCampuses = (payload) => ({
  type: GOT_ALL_CAMPUSES,
  payload,
});

const addedNewCampus = () => ({
  type: ADDED_NEW_CAMPUS,
});

const gotSingleCampus = (payload) => ({
  type: GOT_SINGLE_CAMPUS,
  payload,
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

export const getSingleCampus = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/campuses/${id}`
      );
      dispatch(gotSingleCampus(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addNewCampus = (obj) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/campuses/newCampus",
        obj
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
      return { ...state };
    case GOT_SINGLE_CAMPUS:
      return { ...state, singleCampus: action.payload };
    default:
      return state;
  }
};

export default campusReducer;
