import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      url: '',
    };
  }

  handleSubmit(url) {
    // do some stuff with backend
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>make a brief link</h1>
          <br/>
          <div className="input">
            <InputGroup>
              <FormControl
                placeholder="url"
                aria-label="url"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="outline-secondary">Submit</Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
