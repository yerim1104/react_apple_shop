import React, { useState } from 'react';
import { Navbar,Container,Nav,NavDropdown,Button } from 'react-bootstrap';
import './App.css';
import Data from './data.js';

function App() {

  let [shoes, shoesedit] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div class="background">
        <div class="container2">
          <h1 class="display-4">20% Season Off</h1>
          <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          <Button variant="dark">Dark</Button>
        </div>
      </div>

      <div className='container3'>
        <div className='row'>
        
        {shoes.map(function(a,i){
          return <Card shoes={shoes[i]} i={i} key={i}/>
        })
        }
     
        </div>

      </div>

    </div>
  );
}

function Card(props){
  return(

  <div className='col-md-4'>
  <img src={"https://codingapple1.github.io/shop/shoes"+ (props.i + 1) +".jpg"} width="100%" />
  <h4>{props.shoes.title}</h4>
  <p>{props.shoes.content} & {props.shoes.price} </p>
  </div>

  )

}


export default App;
