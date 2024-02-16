import React from "react";
import "./UserClass.css";
import { Link } from "react-router-dom";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //   count: 0,
      //   count2: 1,

      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    //console.log("Child constructor");
  }

  async componentDidMount() {
    //console.log("Child did mount");
    const data = await fetch("https://api.github.com/users/itzz-mohit");
    const json = await data.json();
    //console.log(json)

    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    //console.log("Component did update")
  }

  componentWillUnmount() {
    //it will happen when we will go to other pages
    //console.log("Component will unmount")
  }
  render() {
    //console.log("Child render");
    // const { name, location } = this.props;
    // const { count } = this.state;

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="bg-white p-8 shadow-md rounded-lg text-center">
        {/* <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Button
        </button> */}
        <img
          src={avatar_url}
          className="rounded-full w-20 mx-auto mb-4"
          alt="User Avatar"
        />
        <h2 className="text-3xl font-bold mb-2">{name}</h2>
        <p className="text-lg text-gray-600 mb-4">{location}</p>
        <p className="text-xl mb-4">
          Welcome to our profile! We are dedicated to providing exceptional
          services and building meaningful connections.
        </p>
        <div className="flex justify-center space-x-4 mb-4">
          <Link to="/" className="text-blue-500 hover:underline">
            Website
          </Link>
          <Link
            to="https://github.com/itzz-mohit"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            gitHub
          </Link>
        </div>
        <Link to="/contact">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Contact Us
          </button>
        </Link>
      </div>
    );
  }
}

export default UserClass;
