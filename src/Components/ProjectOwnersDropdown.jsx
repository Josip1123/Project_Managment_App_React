import Dropdown from 'react-bootstrap/Dropdown';

function ProjectOwnersDropdown() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                Project Owners
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="/create_customer">Create Project Owner</Dropdown.Item>
                <Dropdown.Item href="/">Show All Project Owners</Dropdown.Item>
                <Dropdown.Item href="/">Edit Project Owner</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default ProjectOwnersDropdown;