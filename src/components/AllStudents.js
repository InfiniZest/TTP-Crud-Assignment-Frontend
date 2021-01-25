import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllStudents, addNewStudent } from "../redux/reducers";
import { Link } from "react-router-dom";

import DisplayStudent from "./DisplayStudent";
import NewStudent from "./NewStudent";

class AllStudents extends Component {
  async componentDidMount() {
    await this.props.getAll();
  }

  render() {
    console.log(this.props);
    if (this.props.myStudents.length > 0)
      return (
        <div>
          <Link to="/student/new">
            <button className="addNew">Add New Student</button>
          </Link>

          <div className="displayAll">
            {this.props.myStudents.map((item, index) => {
              return (
                <DisplayStudent
                  id={item.id}
                  key={index}
                  firstName={item.firstName}
                  lastName={item.lastName}
                  gpa={item.gpa}
                  email={item.email}
                  imageUrl={item.imageUrl}
                />
              );
            })}
          </div>
        </div>
      );
    else
      return (
        <div>
          <Link to="/student/new">
            <button>Add New Student</button>
          </Link>

          <p> No Students Found</p>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    myStudents: state.students,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAll: () => dispatch(getAllStudents()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);
