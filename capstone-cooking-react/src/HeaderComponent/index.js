import React from 'react';
// import { Link } from 'react-router-dom';
import {Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import { Header, List, Menu } from 'semantic-ui-react';


const HeaderComponent = () => {
  return (
    <Navbar style={{backgroundColor: '#E66767', color: 'black', textTransform: 'uppercase', padding: '15px', opacity: '.9'}}>
    <Navbar.Brand href="#">What to eat?</Navbar.Brand>
    <Nav className="mr-auto">
      <NavDropdown title="Random meal!" id="collasible-nav-dropdown">
        <NavDropdown.Item href = "/breakfastRecipes" > Breakfast </NavDropdown.Item>
        <NavDropdown.Item href="/recipes">Dinner</NavDropdown.Item>
        {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
        <NavDropdown.Divider/>
        {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
    </Nav>
    <Nav>
      <NavDropdown title="Account info" id="collasible-nav-dropdown">
        <NavDropdown.Item href = "/">Register</NavDropdown.Item>
      <NavDropdown.Item href="/login">Login</NavDropdown.Item>
      <NavDropdown.Item href="/login">Log Out</NavDropdown.Item>
      <NavDropdown.Item href="/savedRecipes">Saved recipes</NavDropdown.Item>
    </NavDropdown> 
    </Nav>
  </Navbar>

  )
}
export default HeaderComponent;