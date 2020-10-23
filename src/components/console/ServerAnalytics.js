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

  function ServerTable(props) {
    const server = props.server;
    const ts = {
      fontSize: '1.2rem',
      color: 'white',
    };

    return(
      <div className="dataTable">
      <h2 className="console-subtitle">Server Data</h2>
      <Table responsive bordered hover variant="dark">
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

  function CpuTable(props) {
    const cpu = props.cpu;
    const ts = {
      fontSize: '1.2rem',
      color: 'white',
    };

    return(
      <div className="dataTable">
      <h2 className="console-subtitle">CPU  Data</h2>
      <Table responsive bordered hover variant="dark">
	<tbody>
	  <tr>
	    <td style={ts}>CPU Model</td>
	    <td style={ts}>{cpu.manufacturer + " " + cpu.brand}</td>
	  </tr>
	  <tr>
	    <td style={ts}>Processors</td>
	    <td style={ts}>{cpu.processors}</td>
	  </tr>
	  <tr>
	    <td style={ts}>Cores</td>
	    <td style={ts}>{cpu.cores}</td>
	  </tr>
	</tbody>
      </Table>
      </div>
    );
  }

  function MemTable(props) {
    const mem = props.mem;
    const ts = {
      fontSize: '1.2rem',
      color: 'white',
    };

    return(
      <div className="dataTable">
      <h2 className="console-subtitle">Memory</h2>
      <Table responsive bordered hover variant="dark">
	<tbody>
	  {Object.keys(mem).map((key, index) => {
	    return(
	      <tr>
		<td style={ts}>{key}</td>
		<td style={ts}>{formatData(mem[key])}</td>
	      </tr>
	    );
	  })}
	  <tr>
	    <td style={ts}></td>
	    <td style={ts}>{}</td>
	  </tr>
	</tbody>
      </Table>
      </div>
    );
  }
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
      </Row>
      <br/>
      <br/>
      <br/>
      <CpuTable cpu={cpu} />
      <ServerTable server={server} />
      <MemTable mem={mem} />
      </div>
    );
}

export default ServerAnalytics;
