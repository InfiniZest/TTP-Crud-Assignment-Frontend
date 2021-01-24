import axios from "axios";

import {
  GOT_ALL_CAMPUSES,
  GOT_SINGLE_CAMPUS,
  ADDED_NEW_CAMPUS,
  GOT_ALL_STUDENTS,
  ADDED_NEW_STUDENT,
  DELETED_CAMPUS,
  GOT_SINGLE_STUDENT,
  DELETED_STUDENT,
  UPDATED_CAMPUS,
  UPDATED_STUDENT,
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

const updatedCampus = () => ({
  type: UPDATED_CAMPUS,
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

export const updateCampus = (obj, id, ownProps) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/campuses/edit/${id}`,
        obj
      );
      console.log(response.data);
      dispatch(updatedCampus(response.data));
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

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_CAMPUSES:
      return { ...state, campuses: action.payload };
    case ADDED_NEW_CAMPUS:
      return { ...state, singleCampus: action.payload };
    case GOT_SINGLE_CAMPUS:
      return { ...state, singleCampus: action.payload };
    case DELETED_CAMPUS:
      return { ...state };
    case UPDATED_CAMPUS:
      return { ...state };
    case GOT_ALL_STUDENTS:
      return { ...state, students: action.payload };
    case GOT_SINGLE_STUDENT:
      return { ...state, singleStudent: action.payload };
    case ADDED_NEW_STUDENT:
      return { ...state, singleStudent: action.payload };
    case DELETED_STUDENT:
      return { ...state };
    case UPDATED_STUDENT:
      return { ...state };
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

const deletedStudent = () => ({
  type: DELETED_STUDENT,
});

export const deleteStudent = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/students/delete/${id}`
      );
      dispatch(deletedStudent());
    } catch (error) {
      console.error(error);
    }
  };
};

const updatedStudent = () => ({
  type: UPDATED_STUDENT,
});

export const updateStudent = (obj, id) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/students/edit/${id}`,
        obj
      );
      console.log(response.data);
      dispatch(updatedStudent(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export default rootReducer;
