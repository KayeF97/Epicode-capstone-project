import React from "react";
import {Outlet, Link} from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function Layout (){
    return(
        <>
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="/">Fit Find</Navbar.Brand>
                <Nav className="me-auto" style={{display:"flex", flexDirection:"row"}}>
                    <Nav.Link href="/" >Home</Nav.Link> 
                    <Nav.Link href="/Homepage">Search</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <Outlet />
        </>
    )
}

export default Layout;
