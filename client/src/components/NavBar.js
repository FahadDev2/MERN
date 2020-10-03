import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink

} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <header className="header">
        <h1>Expense</h1>
        <div className="buttons">
          <div className="login"><a href="/login">Login</a></div>
          <div className="register"><a href="/register">Register</a></div>
        </div> 
      </header> 
      {/* <Navbar color="dark" light expand="md">
        <NavbarBrand href="/" style={{color: '#F3f3f3'}}><h2>Expense</h2></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink style={{color: '#F3f3f3'}} href="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color: '#F3f3f3'}} href="/register">Register</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar> */}
    </div>
  );
}

export {NavBar};
