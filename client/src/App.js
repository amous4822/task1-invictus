import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    orginalString: "",
    encoded: "",
    decoded: "",
  };

  onSubmitEncode = async (e) => {
    e.preventDefault();
    const stringToEncode = e.target.encode.value;

    if (stringToEncode) {
      const response = await axios.post("/api/v1/encode", {
        stringToEncode,
      });
      this.setState({
        encoded: response.data.encoded,
        orginalString: stringToEncode,
      });
    } else {
      alert("please enter some string to encode");
    }
  };

  onSubmitDecode = async (e) => {
    e.preventDefault();
    const stringToDecode = e.target.decode.value;
    if (stringToDecode) {
      const response = await axios.post("/api/v1/decode", {
        stringToDecode,
      });
      this.setState({ decoded: response.data.decoded });
    } else {
      alert("please enter some string to decode");
    }
  };

  render() {
    return (
      <div className="App">
        <div className="encode ">
          <h1>Encode</h1>
          <form onSubmit={this.onSubmitEncode}>
            <input
              className="encoder-input"
              type="text"
              name="encode"
              placeholder="Enter string to encode ..."
            />
            <input type="submit" value="Encode" />
          </form>
          <div className="encode-info">
            <p>{this.state.encoded}</p>
            <p>
              The length of original string: {this.state.orginalString.length}
              <br /> The length of encoded string: {this.state.encoded.length}
            </p>
          </div>
        </div>

        <div className="decode">
          <h1>Decode</h1>
          <form onSubmit={this.onSubmitDecode}>
            <input
              type="text"
              name="decode"
              placeholder="Enter string to decode ..."
            />
            <input type="submit" value="Decode" />
          </form>
          <div className="encode-info">
            <p>{this.state.decoded}</p>
            <p>The length of decoded string: {this.state.decoded.length}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
