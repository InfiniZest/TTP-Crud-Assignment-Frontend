import React, { Component } from "react";

class NewCampus extends Component {
  render() {
    return (
      <div>
        <form>
          <label>Campus Name: </label>
          <input></input>
          <label>Address: </label>
          <input></input>
          <label>Description:</label>
          <input></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default NewCampus;
