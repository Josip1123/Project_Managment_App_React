
const ProjectOwnerRegistrationForm = () => {
    return (
        <div>
            <div>
                <label htmlFor="project-owner-name">Project Owner:</label>
                <input type="text" id="project-owner-name" name="projectOwner" required/>
            </div>

            <div>
                <label htmlFor="project-owner-email">Project Owner Contact:</label>
                <input type="email" id="project-owner-email" name="projectOwnerEmail" required/>
            </div>

        </div>
    );
};

export default ProjectOwnerRegistrationForm;