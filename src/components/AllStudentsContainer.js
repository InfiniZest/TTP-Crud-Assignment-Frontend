import React, { Component } from "react";
import { Link } from "react-router-dom";

import AllStudents from "./AllStudents";

class AllStudentsContainer extends Component {
    async componentDidMount() {
        await this.props.getAll();
    }

    render() {
        return (
            <div className="AllStudentsPage">
                <div className="AllStudentsTitle">
                    <h1 className="AllStudentsTitle">All Students</h1>
                    <Link to="/students/new">
                        <button className="AddStudentButton">Add Student</button>
                    </Link>
                </div>
                <AllStudents />
            </div>
        );
    }
}

export default AllStudentsContainer;
