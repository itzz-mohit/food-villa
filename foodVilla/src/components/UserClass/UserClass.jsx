import React from "react";
import "./UserClass.css";

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
    const data = await fetch('https://api.github.com/users/itzz-mohit');
    const json = await data.json();
    console.log(json)

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
      <div className="user-card">
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
        <img src={avatar_url} />
        <h2>Name : {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact : @mohitbite</h3>
      </div>
    );
  }
}

export default UserClass;
