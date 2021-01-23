import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllStudents, addNewStudent } from "../redux/reducers";
import { Link } from "react-router-dom";

import DisplayStudent from "./DisplayStudent";

class AllStudents extends Component {
    
    async componentDidMount() {
        await this.props.getAllStudents();
    }
    
    render() {
        // Length not defined on this.props.students.length
        console.log(this.props);
        if(this.props.studentList.length > 0) {
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
        
        return (
            <div>
                <p> No Students Found </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    studentList: state.studentList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllStudents: () => dispatch(getAllStudents()),
    addNewStudent: () => dispatch(addNewStudent()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);
