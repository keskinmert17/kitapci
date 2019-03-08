import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      kitap: "",
      yazar: "",
      yayinevi: ""
    };

    this.state = this.initialState;
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };
  render() {
    const { kitap, yazar, yayinevi } = this.state;

    return (
      <form>
        <label>kitap</label>
        <input
          type="text"
          name="kitap"
          value={kitap}
          onChange={this.handleChange}
        />
        <label>yazar</label>
        <input
          type="text"
          name="yazar"
          value={yazar}
          onChange={this.handleChange}
        />
        <label>yayinevi</label>
        <input
          type="text"
          name="yayinevi"
          value={yayinevi}
          onChange={this.handleChange}
        />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}
export default Form;
