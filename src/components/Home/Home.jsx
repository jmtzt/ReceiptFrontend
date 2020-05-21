import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import ComprovanteBradescoHome from "../ComprovanteBradescoHome/ComprovanteBradescoHome";
import ComprovanteBBHome from "../ComprovanteBBHome/ComprovanteBBHome";
import ChequeHome from "../ChequeHome/ChequeHome";
import ReciboHome from "../ReciboHome/ReciboHome";
import "./homeStyle.css";

function Home() {
  return (
    <div className="Home">
      <Router>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Inicio</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/Comprovantes/Bradesco">
                <NavLink>Comprovantes Bradesco</NavLink>
              </Link>
            </NavItem>

            <NavItem>
              <Link to="/Comprovantes/BB">
                <NavLink>Comprovantes BB</NavLink>
              </Link>
            </NavItem>

            <NavItem>
              <Link to="/Cheque">
                <NavLink>Cheque</NavLink>
              </Link>
            </NavItem>

            <NavItem>
              <Link to="/ReciboPadrao">
                <NavLink>Recibo Padrao</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/Comprovantes/Bradesco">
            <ComprovanteBradescoHome />
          </Route>

          <Route path="/Comprovantes/BB">
            <ComprovanteBBHome />
          </Route>

          <Route path="/Cheque">
            <ChequeHome />
          </Route>

          <Route path="/ReciboPadrao">
            <ReciboHome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Home;
