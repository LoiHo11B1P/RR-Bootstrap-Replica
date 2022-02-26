import { Button, Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" >
            
            <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
                <img src="https://www.instacart.com/assets/beetstrap/brand/instacart-logo-color-4db9d81ca0b7638befdc4bd331f64a2633df790c0b55ef627c99b1ba77af72b7.svg" alt="instacard logo"/> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
                
                <Nav>
                    <Nav.Link href="#LogIn">Log In</Nav.Link>
                    <Button variant="success">Sign Up</Button>{' '}
                </Nav>
            </Navbar.Collapse>
           
        </Navbar>
    )
}

export default NavBar;