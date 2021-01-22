import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllStudents, addNewStudent } from "../redux/reducers";
import { Link } from "react-router-dom";

import DisplayStudent from "./DisplayStudent";

class AllStudents extends Component {
    render() {
        // Length not defined on this.props.students.length
        /*
        if(this.props.students.length > 0) {
            return (
                <div>
                    {this.props.students.map((item, index) => {
                        return (
                            <DisplayStudent
                                id={item.id}
                                key={index}
                                name={item.name}
                                gpa={item.gpa}
                                email={item.email}
                                imageUrl={item.imageUrl}
                            />
                        );
                    })}
                </div>
            );
        }
        */
        return (
            <div>
                <p> No Students Found </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    student: state.student,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAll: () => dispatch(getAllStudents()),
    addNew: () => dispatch(addNewStudent()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);
