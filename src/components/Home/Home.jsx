import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import ComprovanteBradescoHome from "../ComprovanteBradescoHome/ComprovanteBradescoHome";
import ComprovanteBBHome from "../ComprovanteBBHome/ComprovanteBBHome";
import ChequeHome from "../ChequeHome/ChequeHome";
import ReciboHome from "../ReciboHome/ReciboHome";
import "./homeStyle.css";
import { isAuthenticated } from "../../services/auth";

function Home() {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

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
            <NavItem>
              <NavLink href="/">Sair</NavLink>
            </NavItem>
          </Nav>
        </Navbar>

        <Switch>
          <PrivateRoute path="/Comprovantes/Bradesco">
            <ComprovanteBradescoHome />
          </PrivateRoute>

          <PrivateRoute path="/Comprovantes/BB">
            <ComprovanteBBHome />
          </PrivateRoute>

          <PrivateRoute path="/Cheque">
            <ChequeHome />
          </PrivateRoute>

          <PrivateRoute path="/ReciboPadrao">
            <ReciboHome />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default Home;
