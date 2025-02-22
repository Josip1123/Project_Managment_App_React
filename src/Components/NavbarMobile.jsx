import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarMobile() {
    return (
        <Navbar expand="lg"  className="bg-body-tertiary nav-mobile">
            <Container>
                <Navbar.Brand href="/">Project Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Project" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/">Create Project</NavDropdown.Item>
                            <NavDropdown.Item href="/all">
                                All Projects
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/edit_project">Edit Project</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Customer" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/create_customer">Create Customer</NavDropdown.Item>
                            <NavDropdown.Item href="/all_customers">
                                All Customers
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/edit_customers">Edit Customer</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Project Owner" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/create_project_owner">Create Project Owner</NavDropdown.Item>
                            <NavDropdown.Item href="/all_project_owners">
                                All Project Owners
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/edit_project_owner">Edit Project Owner</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Service" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/create_Service">Create Service</NavDropdown.Item>
                            <NavDropdown.Item href="/all_services">
                                All Services
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/edit_service">Edit Service</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarMobile;