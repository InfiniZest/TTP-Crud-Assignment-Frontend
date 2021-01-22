import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCampuses, addNewCampus } from "../redux/reducers";

import DisplayCampus from "./DisplayCampus";

class AllCampuses extends Component {
  async componentDidMount() {
    await this.props.getAll();
    // await this.props.addNewCampus;
  }

  handleClick = () => {
    this.props.addNew();
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={this.handleClick}>Add New Campus</button>
        {this.props.campuses.map((item, index) => {
          return (
            <DisplayCampus
              key={index}
              name={item.name}
              address={item.address}
              description={item.description}
            />
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAll: () => dispatch(getAllCampuses()),
    addNew: () => dispatch(addNewCampus()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);

// export default AllCampuses;
