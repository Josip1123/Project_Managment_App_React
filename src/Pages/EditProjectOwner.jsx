import {useState} from "react";

const EditProjectOwner = () => {
    const [id, setId] = useState("");
    const [owner, setOwner] = useState();
    const [showForm, setShowForm] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [projectId, setProjectId] = useState("");


    const url = "http://localhost:5041/api/ProjectOwner";

    const handleGetOwner = async (id) => {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (!response.ok) {
                console.log(`Failed to get project owner: ${response.status}`);
                setIsSuccess("noUser");
            }


            const result = await response.json();

            setOwner(result);
            setName(result.name);
            setEmail(result.email);
            setProjectId(result.projectId)

            console.log("Server response:", result);
        } catch (error) {
            console.log("Error getting project owner:", error);
        }

    };

    const handleUpdateOwner = async (event) => {
        event.preventDefault();

        const updatedProject = {
            name: name,
            email: email,
            projectId: projectId
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
                setIsSuccess("false");
                return;
            }

            const result = await response.json();
            console.log("Project owner updated successfully:", result);
            setShowForm(false);
            setIsSuccess("true");
        } catch (error) {
            console.log("Error updating project owner:", error);
        }
    };

    return (

        <div className={"project-edit"}>
            <h1>Edit Project owner Here</h1>
            <h2>Type in ID of the Owner you would like to edit</h2>
            {!owner &&(
                <div className={"id-register-form"}>
                    <label htmlFor="project-id"></label>
                    <input type="text" id="project-id" name="projectId" value={id} placeholder={"Project Owner ID"}
                           onChange={(e) => setId(e.target.value)} required/>
                    <button className={"main-btn"} onClick={() => handleGetOwner(id)}>Load Project Owner</button>
                </div>
            )}


            {owner && showForm && (
                <form onSubmit={handleUpdateOwner}>
                    <div>
                        <label htmlFor="project-name">Project Owner Name:</label>
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
                        <label htmlFor="date-due">Email:</label>
                        <input
                            type="email"
                            id="date-due"
                            name="dateDue"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <button className={"update-btn"} type="submit">Update Project Owner</button>
                </form>
            )}

            {isSuccess === "true" &&(
                <div className={"success"}>{"Project owner updated successfully"}</div>
            )}
            {isSuccess === "false" &&(
                <div className={"error"}>{"Something went wrong"}</div>
            )}
            {isSuccess === "noUser" &&(
                <div className={"error"}>{"ID doesnt match any user"}</div>
            )}
        </div>
    );
};

export default EditProjectOwner;