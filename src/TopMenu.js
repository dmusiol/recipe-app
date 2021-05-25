import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



export default function TopMenu() {

    return (
     <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">deliSH.com</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="https://www.allrecipes.com/recipes/">AllRecipes.com</Nav.Link>
      <Nav.Link href="http://ohsheglows.com">Healthy Food</Nav.Link>
      <Nav.Link href="https://www.delish.com/food/a35036824/food-trends-2021/">Food Trends</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}