import axios from "axios";

import {
  GOT_ALL_CAMPUSES,
  GOT_SINGLE_CAMPUS,
  ADDED_NEW_CAMPUS,
  GOT_ALL_STUDENTS,
  GOT_ONE_STUDENT,
  ADDED_NEW_STUDENT

} from "./actionTypes";

const initialState = {
  campuses: [],
  singleCampus: {},
  studentList: [],
  student: {}
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
    case GOT_SINGLE_CAMPUS:
      return { ...state, singleCampus: action.payload };
    default:
      return state;
  }
};

// ------------Student Reducer------------ //

const gotAllStudents = (payload) => ({
  type: GOT_ALL_STUDENTS,
  payload,
});

const addedNewStudent = () => ({
  type: ADDED_NEW_STUDENT,
});

const gotOneStudent = (payload) => ({
  type: GOT_ONE_STUDENT,
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

export const getSingleStudent = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/students/${id}`
      );
      dispatch(gotOneStudent(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addNewStudent = () => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/students/addNewStudent",
      );
      dispatch(addedNewStudent());
    } catch (error) {
      console.error(error);
    }
  };
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_STUDENTS:
      return { ...state, studentList: action.payload };
    case ADDED_NEW_STUDENT:
      return state;
    case GOT_ONE_STUDENT:
      return { ...state, student: action.payload };
    default:
      return state;
  }
};

export default campusReducer;
