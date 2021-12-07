import React from "react";

class UseApi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: false,
      loading: false,
      fetched: false,
      val: 1,
      newData: [],
    };
  }

  getUnique(arr, index) {
    const unique = arr
      .map((e) => e[index])
      .map((e, i, final) => final.indexOf(e) === i && i)

      .filter((e) => arr[e])
      .map((e) => arr[e]);

    return unique;
  }

  request = async (...args) => {
    this.setState({ loading: true });

    const response = await this.props(...args);
    this.setState({ loading: false });

    if (!response.ok) return this.setState({ error: true });

    if (this.state.val === 1) {
      this.setState({ data: [], newData: [] });

      console.log("before setting data: " + this.state.val);

      this.setState({
        data: response.data.items,
        newData: response.data.items,
        val: this.state.val + 1,
      });

      console.log("data object: " + this.state.data);
    } else {
      console.log("setting data: " + this.state.val);

      this.setState({
        newData: this.state.newData.concat(response.data.items),
        data: this.getUnique(newData, "id"),
      });
    }
    this.setState({ fetched: true });
  };

  render() {}
}
// const b = new UseApi();
export default UseApi;
