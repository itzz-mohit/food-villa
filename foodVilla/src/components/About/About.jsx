import React from "react";
import { UserClass } from "../index";

class About extends React.Component {
  constructor(props) {
    super(props);


    console.log("Parent Constructor")
  }

  componentDidMount(){
    console.log("Parent did mount")
  }
  render() {
    console.log("Parend render")
    return (
      <div>
        <h1>hello About</h1>
        <UserClass name={"Mohit Class"} location={"Nalanda"} />
      </div>
    );
  }
}

export default About;
