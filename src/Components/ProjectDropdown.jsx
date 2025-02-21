import Dropdown from 'react-bootstrap/Dropdown';

function ProjectDropdown() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic"> Project
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="/">Create Project</Dropdown.Item>
                <Dropdown.Item href="/all">Show All Projects</Dropdown.Item>
                <Dropdown.Item href="/edit_project">Edit Project</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default ProjectDropdown;