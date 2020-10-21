import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home';
import Console from './Console';
import { Navbar, Nav } from 'react-bootstrap';

export default function App() {
  return (
    <Router>
      <div className="scaffold">
        <Navbar expand="lg" bg="dark" variant="dark" className="navbar">
          <Navbar.Brand href="/">Briefs.Link</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/console">Console</Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/console">
            <Console />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
