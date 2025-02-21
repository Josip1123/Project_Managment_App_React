import Dropdown from 'react-bootstrap/Dropdown';

function CustomerDropdown() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Customer
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="/create_customer">Create Customer</Dropdown.Item>
                <Dropdown.Item href="/all_customers">Show All Customers</Dropdown.Item>
                <Dropdown.Item href="/edit_customers">Edit Customer</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default CustomerDropdown;