import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Container, Col, Row, Table } from 'react-bootstrap';

function Console(props) {
  const [popular, setPop] = useState([{id: 0, url: '', hits:0}]);
  const [server, setServer] = useState({
    week_write: [],
    week_read: [],
    week_write_total: 0,
    week_read_total: 0,
    sec_read: 0,
    sec_write: 0,
    total_write: 0,
    total_read: 0,
    total_storage: 0,
  });

  const ts = {
    fontSize: '1.2rem',
    color: 'white',
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://briefs.link/console');
      setPop(result.data.top.slice(0, 3));
      setServer(result.data.server);
    };
    fetchData();
  }, []);

  function processNumber(num) {
    if (num < 1000) {
      return num;
    } else {
      var digits = -1;
      while (num >= 1000) {
	num = num / 1000;
	digits += 1;
      }
      const map = ['K', 'M', 'B', 'T', 'G', 'G', 'G'];
      return Number.parseFloat(num).toPrecision(3).toString() + " " + map[digits];
    }
  }

  return (
    <div className="holder">
    <Container className="console">
      <Row>
	<Col xl={8} lg={8} md={12} className="console-meta">
	  <h1 className="console-title">Console</h1>
	  <p>Highest Traffic Links</p>
	  <Table  bordered hover variant="dark">
	    <thead>
	      <tr>
		<td style={ts}>URL</td>
		<td style={ts}>Hits</td>
	      </tr>
	    </thead>
	    <tbody>
	      {popular.map((record) => {
		return (
		  <tr>
		    <td style={ts}>{record.url.slice(8)}</td>
		    <td style={ts}>{processNumber(record.hit)}</td>
		  </tr>
		);
	      })}
	    </tbody>
	  </Table>
	</Col>
	<Col xl={4} lg={4} md={12} className="console-meta">
	  <h1 className="console-title">Server Analytics</h1>
	  <Table  bordered hover variant="dark">
	    <tbody>
	      <tr>
		<td style={ts}>Total Links Created</td>
		<td style={ts}>{processNumber(server.total_write)}</td>
	      </tr>
	      <tr>
		<td style={ts}>Total Link Visits</td>
		<td style={ts}>{processNumber(server.total_read)}</td>
	      </tr>
	      <tr>
		<td style={ts}>Total Storage Used</td>
		<td style={ts}>{server.total_storage}</td>
	      </tr>
	      <tr>
		<td style={ts}>Links Created / Sec</td>
		<td style={ts}>{processNumber(server.sec_write)}</td>
	      </tr>
	      <tr>
		<td style={ts}>Links Visited / Sec</td>
		<td style={ts}>{processNumber(server.sec_read)}</td>
	      </tr>
	      <tr>
		<td style={ts}>Links Created This Week</td>
		<td style={ts}>{processNumber(server.week_write_total)}</td>
	      </tr>
	      <tr>
		<td style={ts}>Links Visited This Week</td>
		<td style={ts}>{processNumber(server.week_read_total)}</td>
	      </tr>
	    </tbody>
	  </Table>
	</Col>
      </Row>
    </Container>
    </div>
  );
}

/*
week_write: [],
week_read: [],
*/
export default Console;
