import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';
import logo from './logo.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      url: '',
      stub: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  async handleSubmit(event) {
    const payload = {"url": "https://" + this.state.url};
    await axios.post("https://www.briefs.link", payload)
      .then(response => {
        this.setState({submitted: true, url: "https://" + this.state.url, stub: response.data.stub});
    });
  }

  handleChange(event) {
    this.setState({url: event.target.value});
  }

  handleKeyPress(event) {
    if (event.charCode===13) {
      this.handleSubmit(event);
    }
  }

  copyToClipboard(event) {
    navigator.clipboard.writeText("https://briefs.link/" + this.state.stub);
  }

  render() {
    if (this.state.submitted === true) {
      return (
        <div className="App">
          <header className="App-header">
            <img className="logo" src={logo} alt="Logo" />
            <h1 className="title">your brief link:</h1>
            <div className="urlDisplay">
              <p>briefs.link/{this.state.stub}</p>
              <Button onClick={this.copyToClipboard}>
                <img className="copyImage" alt="copy url icon" src="https://img.icons8.com/fluent/96/000000/clipboard.png"/>
              </Button>
            </div>
          </header>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <img className="logo" src={logo} alt="Logo" />
            <h1 className="title">make a brief link</h1>
            <br/>
            <div className="input">
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon3">
                    https://
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  aria-label="url"
                  aria-describedby="basic-addon2"
                  onChange={this.handleChange}
                  onKeyPress={this.handleKeyPress}
                />
                <InputGroup.Append>
                  <Button
                    variant="outline-secondary"
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
          </header>
        </div>
      );
    }
  }
}

export default App;
