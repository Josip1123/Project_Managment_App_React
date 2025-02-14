
const ProjectRegistrationForm = () => {
    return (
        <>

        <h1>Register a Project!</h1>

        <form action="" method="">

            {/*Project*/}
            <div>
                <label htmlFor="project-name">Project Name:</label>
                <input type="text" id="project-name" name="projectName" required/>
            </div>
            <div>
                <label htmlFor="date-due">Date Due:</label>
                <input type="date" id="date-due" name="dateDue"/>
            </div>
            <div className={"isCompletedCheckbox"}>
                <label>Is It Completed?</label>
                <input type="checkbox" id="is-completed" name="isCompleted"/>
            </div>

            {/*Project owner*/}
            <div>
                <label htmlFor="project-owner-name">Project Owner:</label>
                <input type="text" id="project-owner-name" name="projectOwner" required/>
            </div>

            <div>
                <label htmlFor="project-owner-email">Project Owner Contact:</label>
                <input type="email" id="project-owner-email" name="projectOwnerEmail" required/>
            </div>

            {/*Services*/}
            <div>
                <label htmlFor="service-name">Service Name:</label>
                <input type="text" id="service-name" name="serviceName" required/>
            </div>

            <div>
                <label htmlFor="service-description">Service Description:</label>
                <textarea id="service-description" name="serviceDescription" maxLength={150} required></textarea>
            </div>

            <div>
                <label htmlFor="service-price">Price:</label>
                <input type="number" id="service-price" name="servicePrice" required/>
            </div>

            {/*Customer*/}
            <div>
                <label htmlFor="customer-name">Customer Name:</label>
                <input type="text" id="customer-name" name="customer" required/>
            </div>

            <div>
                <label htmlFor="project-owner-email">Customer Contact:</label>
                <input type="email" id="customer-email" name="CustomerEmail" required/>
            </div>

            <div>
                <button className={"Submit-btn"} type="">Create Project</button>
            </div>
        </form>

        </>
    );
};

export default ProjectRegistrationForm;