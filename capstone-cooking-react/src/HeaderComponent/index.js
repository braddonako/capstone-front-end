import React from 'react';
// import { Link } from 'react-router-dom';
import {Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import { Header, List, Menu } from 'semantic-ui-react';


const HeaderComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#">What to eat?</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Register</Nav.Link>
        <NavDropdown title="Random meal!" id="collasible-nav-dropdown">
        <NavDropdown.Item href = "/breakfastRecipes" > Breakfast </NavDropdown.Item>
        <NavDropdown.Item href="/recipes">Dinner</NavDropdown.Item>
        <NavDropdown.Item href="/savedRecipes">Your saved recipes</NavDropdown.Item>
        {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
        <NavDropdown.Divider/>
        {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/login">Log Out</Nav.Link>
    </Nav>
  </Navbar>

  )
}
export default HeaderComponent;