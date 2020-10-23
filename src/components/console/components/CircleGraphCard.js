import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CircleGraphCard(props) {
  return (
    <Card bg="dark" className="graphCard">
      <Card.Header style={{color: 'white', fontSize: '1.4rem'}}>{props.name}</Card.Header>
      <Card.Body>
	<div className="circleGraph">
	  <CircularProgressbar value={props.value} text={`${props.value}%`} />
	</div>
	<p style={{textAlign:'center'}}>{props.text}</p>
      </Card.Body>
    </Card>
  );
}

export default CircleGraphCard;
