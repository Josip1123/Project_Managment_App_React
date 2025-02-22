import Dropdown from 'react-bootstrap/Dropdown';

function ServicesDropdown() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Services
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="/create_service">Create Service</Dropdown.Item>
                <Dropdown.Item href="/all_services">Show All Services</Dropdown.Item>
                <Dropdown.Item href="/edit_service">Edit Service</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default ServicesDropdown;