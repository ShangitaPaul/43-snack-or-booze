import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import {Navbar, NavbarBrand, Nav, NavItem} from "reactstrap";

function NavBar() {
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Snack or Booze</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/snacks">Snacks</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/drinks">Drinks</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavBar;

