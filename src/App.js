import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';

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

  render() {
    if (this.state.submitted === true) {
      return (
        <div className="App">
          <header className="App-header">
            <h1>find your url at: briefs.link/{this.state.stub}</h1>
          </header>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <h1>make a brief link</h1>
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
