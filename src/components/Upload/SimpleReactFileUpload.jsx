import React from "react";
import axios, { post } from "axios";
import styles from "./simplereactfileupload.module.css";
import { getToken } from "../../services/auth";

class SimpleReactFileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault(); // Stop form submit
    this.fileUpload(this.state.file).then((response) => {
      console.log(response);
      var responseData = Object.values(response.data);
      this.props.passChildData(responseData);
    });
  }

  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }

  fileUpload(file) {
    const url = "http://localhost:3001/comprovantes/" + this.props.comprType;

    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${getToken()}`,
      },
    };
    return post(url, formData, config);
  }

  onButtonClick() {
    this.props.onButtonClick(true);
  }

  render() {
    return (
      <form className={styles.formCompr} onSubmit={this.onFormSubmit}>
        <br />
        <br />
        <input type="file" onChange={this.onChange} />
        <button type="submit" onClick={this.onButtonClick}>
          Emitir
        </button>
      </form>
    );
  }
}

export default SimpleReactFileUpload;
