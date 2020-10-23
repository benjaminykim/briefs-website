import React from 'react';
import '../../App.css';
import { processNumber } from '../../Helper';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table, Row, Col, Card } from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function GlobalDash(props) {
  return(
    <div>
      <h1 className="console-title">Global Dashboard</h1>
      <Row>
	<Col xl={3}>
	  <CircularGraph name="Data" value="50"/>
	</Col>
	<Col>
	</Col>
      </Row>
      <br/>
      <br/>
      <br/>
      <h2>High Traffic Links</h2>
      <LinkTable popular={props.popular} />
    </div>
  );
}

function CircularGraph(props) {
  return (
    <Card bg="dark">
      <Card.Header style={{color: 'white', fontSize: '1.4rem'}}>{props.name}</Card.Header>
      <Card.Body>
	<div className="circleGraph">
	  <CircularProgressbar value={props.value} text={`${props.value}%`} />
	</div>
	<p>Text Data Stuff Here</p>
      </Card.Body>
    </Card>
  );
}

function LinkTable(props) {
  const ts = {
    fontSize: '1.2rem',
    color: 'white',
  };

  return (
    <Table  bordered hover variant="dark">
      <thead>
	<tr>
	  <td style={ts}>URL</td>
	  <td style={ts}>Hits</td>
	</tr>
      </thead>
      <tbody>
	{props.popular.map((record) => {
	  return (
	    <tr>
	      <td style={ts}>{record.url.slice(8)}</td>
	      <td style={ts}>{processNumber(record.hit)}</td>
	    </tr>
	  );
	})}
      </tbody>
    </Table>
  );
}

export default GlobalDash;
