import React from "react";
import TextComponent from "../components/textComponent";

class NewClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "current state",
    };
    //this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {}

  handleClick = (name) => {
    // this.setState(() => ({
    //   text: name,
    // }));
  };
  func = (newDate) => {
    console.log("before: " + this.state.text);
    this.state.text = newDate;
    console.log("after: " + this.state.text);
  };
  render() {
    return <TextComponent>{this.state.text}</TextComponent>;
  }
}

export default NewClass;
