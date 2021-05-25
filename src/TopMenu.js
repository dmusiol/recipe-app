import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



export default function TopMenu() {

    return (
     <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">del<span className="brand-name">iSH</span>.com</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    <Nav className="mr-center">
      <Nav.Link href="https://www.allrecipes.com/recipes/" className="nav-link" target="_blank">AllRecipes.com</Nav.Link>
      <Nav.Link href="http://ohsheglows.com"className="nav-link" target="_blank">Healthy Food</Nav.Link>
      <Nav.Link href="https://www.delish.com/food/a35036824/food-trends-2021/" className="nav-link"target="_blank">Food Trends</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}