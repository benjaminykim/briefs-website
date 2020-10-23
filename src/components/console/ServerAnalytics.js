import React from 'react';
import '../../App.css';
import { processNumber, parsePercentage, formatData } from '../../Helper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Row, Col } from 'react-bootstrap';
import CircleGraphCard from './components/CircleGraphCard.js';

function ServerAnalytics(props) {
  const server = props.server;
  const cpu = props.cpu;
  const mem = props.mem;

  const  memPercent = parsePercentage(mem.used/mem.total);
  const cpuPercent = parsePercentage(parseInt(cpu.speed) / 5);
  const ts = {
    fontSize: '1.2rem',
    color: 'white',
  };

  return(
    <div>
      <h1 className="console-title">Server Analytics</h1>
      <Row>
	<Col xl={3}>
	  <CircleGraphCard name="Memory" value={memPercent} unit={"%"} text={`${formatData(mem.used)} of ${formatData(mem.total)} used` } />
	</Col>
	<Col xl={3}>
	  <CircleGraphCard name="CPU Usage" value={cpuPercent} unit={"GHz"} text={`${cpu.speed} GHz`}/>
	</Col>
	<Col xl={3}>
	  <CircleGraphCard name="Memory" value="50" />
	</Col>
      </Row>
      <br/>
      <br/>
      <br/>
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
      </div>
    );
}

export default ServerAnalytics;
