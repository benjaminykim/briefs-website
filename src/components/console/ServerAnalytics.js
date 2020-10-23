import React from 'react';
import '../../App.css';
import { processNumber } from '../../Helper';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';

function ServerAnalytics(props) {
  let server = props.server;
  const ts = {
    fontSize: '1.2rem',
    color: 'white',
  };

  return(
    <div>
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
      </div>
    );
}

export default ServerAnalytics;
