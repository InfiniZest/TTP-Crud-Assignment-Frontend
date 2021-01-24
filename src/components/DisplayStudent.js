import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { deleteStudent } from "../redux/reducers";

class DisplayStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  handleClick = () => {
    this.props.delete(this.props.id);
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) return <Redirect to="/students"></Redirect>;
    const myLink = `/students/${this.props.id}`;
    return (
      <div>
        Last Name: {this.props.lastName}
        <br />
        First Name: {this.props.firstName}
        <br />
        <button onClick={this.handleClick}>DELETE</button>
        <Link to={`/student/edit/${this.props.id}`}>
          <button>EDIT</button>
        </Link>
        <br />
        <Link to={myLink}>View Student</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (id) => dispatch(deleteStudent(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayStudent);
