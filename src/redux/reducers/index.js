import axios from "axios";

import {
  GOT_ALL_CAMPUSES,
  GOT_SINGLE_CAMPUS,
  ADDED_NEW_CAMPUS,
  GOT_ALL_STUDENTS,
  ADDED_NEW_STUDENT,
  DELETED_CAMPUS,
  GOT_SINGLE_STUDENT,
} from "./actionTypes";

const initialState = {
  campuses: [],
  singleCampus: {},
  students: [],
  singleStudent: {},
};

const gotAllCampuses = (payload) => ({
  type: GOT_ALL_CAMPUSES,
  payload,
});

const addedNewCampus = (payload) => ({
  type: ADDED_NEW_CAMPUS,
  payload,
});

const gotSingleCampus = (payload) => ({
  type: GOT_SINGLE_CAMPUS,
  payload,
});

const deletedCampus = () => ({
  type: DELETED_CAMPUS,
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
      console.log(response.data);
      dispatch(addedNewCampus(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteCampus = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/campuses/delete/${id}`
      );
      dispatch(deletedCampus());
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
      return { ...state, singleCampus: action.payload };
    case GOT_SINGLE_CAMPUS:
      return { ...state, singleCampus: action.payload };
    case DELETED_CAMPUS:
      return { ...state };
    case GOT_ALL_STUDENTS:
      return { ...state, students: action.payload };
    case GOT_SINGLE_STUDENT:
      return { ...state, singleStudent: action.payload };
    case ADDED_NEW_STUDENT:
      return { ...state, singleStudent: action.payload };
    default:
      return state;
  }
};

const gotAllStudents = (payload) => ({
  type: GOT_ALL_STUDENTS,
  payload,
});

export const getAllStudents = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:8080/api/students");
      dispatch(gotAllStudents(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

const gotSingleStudent = (payload) => ({
  type: GOT_SINGLE_STUDENT,
  payload,
});

export const getSingleStudent = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/students/${id}`
      );
      dispatch(gotSingleStudent(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

const addedNewStudent = (payload) => ({
  type: ADDED_NEW_STUDENT,
  payload,
});

export const addNewStudent = (obj) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/students/newStudent",
        obj
      );
      dispatch(addedNewStudent(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export default campusReducer;
