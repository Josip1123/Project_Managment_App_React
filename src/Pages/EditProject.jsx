import {useState} from "react";


const EditProject = () => {

    const [id, setId] = useState("");
    const [project, setProject] = useState();
    const [showForm, setShowForm] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);

    const [name, setName] = useState("");
    const [dateDue, setDateDue] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);

    const url = "http://localhost:5041/api/Project";

    const handleGetProject = async (id) => {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (!response.ok) {
                console.log(`Failed to get project: ${response.status}`);
            }


            const result = await response.json();

            setProject(result);
            setName(result.name);
            setDateDue(result.dateDue);
            setIsCompleted(result.isCompleted);

            console.log("Server response:", result);
        } catch (error) {
            console.log("Error deleting project:", error);
        }

    };

    const handleUpdateProject = async (event) => {
        event.preventDefault();

        const updatedProject = {
            name: name,
            dateDue: dateDue,
            isCompleted: isCompleted,
        };

        try {
            const response = await fetch(`${url}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedProject),
            });

            if (!response.ok) {
                console.log(`Failed to update project: ${response.status}`);
                return;
            }

            const result = await response.json();
            console.log("Project updated successfully:", result);
            setShowForm(false);
            setIsSuccess(true);
        } catch (error) {
            console.log("Error updating project:", error);
        }
    };

    return (

        <div className={"project-edit"}>
            <h1>Edit Your Project Here</h1>
            <h2>Type in ID of the Project you would like to edit</h2>
            {!project &&(
                <div className={"id-register-form"}>
                <label htmlFor="project-id"></label>
                <input type="text" id="project-id" name="projectId" value={id} placeholder={"Project ID"}
                       onChange={(e) => setId(e.target.value)} required/>
                <button className={"main-btn"} onClick={() => handleGetProject(id)}>Load Project</button>
            </div>
            )}


            {project && showForm && (
                <form onSubmit={handleUpdateProject}>
                    <div>
                        <label htmlFor="project-name">Project Name:</label>
                        <input
                            type="text"
                            id="project-name"
                            name="projectName"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="date-due">Date Due:</label>
                        <input
                            type="date"
                            id="date-due"
                            name="dateDue"
                            value={dateDue}
                            onChange={(e) => setDateDue(e.target.value)}
                            required
                        />
                    </div>
                    <div className="isCompletedCheckbox">
                        <label htmlFor="is-completed">Is Completed?</label>
                        <input
                            type="checkbox"
                            id="is-completed"
                            name="isCompleted"
                            checked={isCompleted}
                            onChange={(e) => setIsCompleted(e.target.checked)}
                        />
                    </div>
                    <button className={"update-btn"} type="submit">Update Project</button>
                </form>
            )}
            {isSuccess &&(
                <div className={"success"}>{"Project updated successfully"}</div>
            )}
        </div>
    );
};

export default EditProject;