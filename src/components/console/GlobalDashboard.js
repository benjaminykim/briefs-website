import React from 'react';
import '../../App.css';
import { processNumber } from '../../Helper';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';

function GlobalDash(props) {
  return(
    <div>
      <h1 className="console-title">Global Dashboard</h1>
      <h2 className="console-subtitle">High Traffic Links</h2>
      <LinkTable popular={props.popular} />
    </div>
  );
}

function LinkTable(props) {
  const ts = {
    fontSize: '1.2rem',
    color: 'white',
  };

  return (
    <Table responsive bordered hover variant="dark">
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
