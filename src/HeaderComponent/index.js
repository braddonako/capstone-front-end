import React from 'react';
// import { Link } from 'react-router-dom';
import {Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import { Header, List, Menu } from 'semantic-ui-react';


const HeaderComponent = () => {
  const handleLogOutSubmit = (e) => {
    e.preventDefault();
    localStorage.clear();
    const refreshPage = window.location.reload(false);
  }
  if (localStorage.getItem('sessionId')){
  return (
    <Navbar style={{backgroundColor: '#E66767', color: 'white', textTransform: 'uppercase', padding: '15px', opacity: '.9'}}>
    <Navbar.Brand href="#">What to eat?</Navbar.Brand>
    <Nav className="mr-auto">
      <NavDropdown title="IDK, you tell me!" id="collasible-nav-dropdown">
        <NavDropdown.Item href = "/breakfastRecipes" >Breakfast</NavDropdown.Item>
        <NavDropdown.Item href="/recipes">Dinner</NavDropdown.Item>
        <NavDropdown.Item href="/glutenFreeBreakfasts">Gluten Free Breakfast</NavDropdown.Item>
        <NavDropdown.Item href="/glutenFreeRecipes">Gluten Free Dinner</NavDropdown.Item>
        <NavDropdown.Item href="/vegetarianBreakfasts">Vegetarian Breakfast</NavDropdown.Item>
        <NavDropdown.Item href="/vegetarianDinners">Vegetarian Dinner</NavDropdown.Item>
        {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
        <NavDropdown.Divider/>
        {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
    </Nav>
    <Nav style={{color: 'black'}}>
      <NavDropdown.Item href="/savedRecipes">Bookmarked recipes</NavDropdown.Item>
      <NavDropdown.Item href="/login" onClick={handleLogOutSubmit}>Log Out</NavDropdown.Item> 
    </Nav>
  </Navbar>

  )} else {
    return(    <Navbar style={{backgroundColor: '#E66767', color: 'white', textTransform: 'uppercase', padding: '15px', opacity: '.9'}}>
    <Navbar.Brand href="#">What to eat?</Navbar.Brand>
    <Nav className="mr-auto">
      <NavDropdown title="IDK, you tell me!" id="collasible-nav-dropdown">
        <NavDropdown.Item href = "/breakfastRecipes" >Breakfast</NavDropdown.Item>
        <NavDropdown.Item href="/recipes">Dinner</NavDropdown.Item>
        <NavDropdown.Item href="/glutenFreeBreakfasts">Gluten Free Breakfast</NavDropdown.Item>
        <NavDropdown.Item href="/glutenFreeRecipes">Gluten Free Dinner</NavDropdown.Item>
        <NavDropdown.Item href="/vegetarianBreakfasts">Vegetarian Breakfast</NavDropdown.Item>
        <NavDropdown.Item href="/vegetarianDinners">Vegetarian Dinner</NavDropdown.Item>
        {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
        <NavDropdown.Divider/>
        {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
    </Nav>
    <Nav>
      <NavDropdown title="Account info" id="collasible-nav-dropdown">
        <NavDropdown.Item href = "/">Register</NavDropdown.Item>
      <NavDropdown.Item href="/login">Login</NavDropdown.Item>
    </NavDropdown> 
    </Nav>
  </Navbar>)
  }
}
export default HeaderComponent;