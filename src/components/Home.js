import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';
import logo from '../logo.png';

function Home(props) {
    const [url, setUrl] = useState('');
    const [stub, setStub] = useState('');

    function handleChange(event) {
	    setUrl(event.target.value);
    }

    function handleKeyPress(event) {
	    if (event.charCode===13) {
		    handleSubmit();
	    }
    }

    async function handleSubmit() {
	const payload = {"url": "https://" + url};
	await axios.post("https://www.briefs.link", payload)
	    .then(response => {
		setUrl("https://" + url);
		setStub(response.data.stub);
		console.log("try page change");
	});
    }

    function copyToClipboard() {
	navigator.clipboard.writeText("https://briefs.link/" + stub);
    }

    if (stub === '') {
	return (
	    <div className="container">
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
			    onChange={handleChange}
			    onKeyPress={handleKeyPress}
			/>
			<InputGroup.Append>
			    <Button
				variant="outline-secondary"
				onClick={handleSubmit}
			    >
				    Submit
			    </Button>
			</InputGroup.Append>
		    </InputGroup>
		</div>
	    </div>
	);
    } else {
	return (
	    <div className="container">
		<img className="logo" src={logo} alt="Logo" />
		<h1 className="title">your brief link:</h1>
		<div className="urlDisplay">
		    <p>briefs.link/{stub}</p>
		    <Button onClick={copyToClipboard}>
			    <img className="copyImage" alt="copy url icon" src="https://img.icons8.com/fluent/96/000000/clipboard.png"/>
		    </Button>
		</div>
	    </div>
	);
    }
}

export default Home;
