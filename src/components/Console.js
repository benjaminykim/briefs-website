import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import GlobalDash from './console/GlobalDashboard';
import UserDash from './console/UserDashboard';
import ServerAnalytics from './console/ServerAnalytics';
import LinkAnalytics from './console/LinkAnalytics';

function Console(props) {
  const [page, setPage] = useState(0);
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
  const [cpu, setCpu] = useState({});
  const [mem, setMem] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://briefs.link/console');
      setPop(result.data.top.slice(0, 3));
      setServer(result.data.server);
      setCpu(result.data.cpu);
      setMem(result.data.cpuMem);
      console.log(result.data);
    };
    fetchData();
  }, []);

  function onPageClick(page) {
    return (() => {
      setPage(page);
    });
  }

  function getOpacity(pageIndex) {
    if (page === pageIndex) {
      return {opacity:'100%'};
    }
    return {opacity:'50%'};
  }

  function getPage(pageIndex) {
    if (pageIndex === 0) {
      return (<GlobalDash popular={popular} />);
    } else if (pageIndex === 1) {
      return (<ServerAnalytics server={server} cpu={cpu} mem={mem} />);
    } else if (pageIndex === 2) {
      return (<UserDash />);
    } else if (pageIndex === 3) {
      return (<LinkAnalytics />);
    }
  }

  return (
    <Container fluid className="console-background">
      <Row>
	<Col xl={3} className="console-panel console-sidebar">
	  <div className="sidebar-item" style={getOpacity(0)} onClick={onPageClick(0)}>Global Dashboard</div>
	  <div className="sidebar-item" style={getOpacity(1)} onClick={onPageClick(1)}>Server Analytics</div>
	  <div className="sidebar-item" style={getOpacity(2)} onClick={onPageClick(2)}>User Dashboard</div>
	  <div className="sidebar-item" style={getOpacity(3)} onClick={onPageClick(3)}>Link Analytics</div>
	</Col>
	<Col xl={9} className="console-panel console-main">
	  {getPage(page)}
	</Col>
      </Row>
    </Container>
  );
}

export default Console;
