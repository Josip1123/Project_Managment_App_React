import Dropdown from 'react-bootstrap/Dropdown';

function ProjectOwnersDropdown() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                Project Owners
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="/create_project_owner">Create Project Owner</Dropdown.Item>
                <Dropdown.Item href="/all_project_owners">Show All Project Owners</Dropdown.Item>
                <Dropdown.Item href="/edit_project_owner">Edit Project Owner</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default ProjectOwnersDropdown;