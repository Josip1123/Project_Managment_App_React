import Dropdown from 'react-bootstrap/Dropdown';

function ServicesDropdown() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Services
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="/create_customer">Create Service</Dropdown.Item>
                <Dropdown.Item href="/">Show All Services</Dropdown.Item>
                <Dropdown.Item href="/">Edit Service</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default ServicesDropdown;