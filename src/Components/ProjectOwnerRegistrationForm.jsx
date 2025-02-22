import {useEffect, useState} from "react";


const ProjectOwnerRegistrationForm = () => {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [projectId, setProjectId] = useState("");
    const [isSuccess, setIsSuccess] = useState("");

    const url = "http://localhost:5041/api/ProjectOwner";

    useEffect(()=>{
        setIsSuccess("");
    }, [])

    const handleReset = () => {

        setName("");
        setContact("");
        setProjectId("");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            name: name,
            email: contact,
            projectId: projectId
        };


        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                console.log(`Server error: ${response.status}`);
                setIsSuccess("false");
            }

            const result = await response.json();
            console.log("Server response:", result);
            setIsSuccess("true")

        } catch (error) {
            console.error('Error creating project owner:', error);
        }
        handleReset();
    };
    return (
        <div className={"create"}>
            <form className={"owner-form"} onSubmit={handleSubmit}>
                <h1>Create Project Owner</h1>
                <h2>Create a new Project Owner for a existing project</h2>
                <div>
                    <label htmlFor="owner-name">Project Owner Name:</label>
                    <input type="text" id="owner-name" name="owner" value={name}
                           onChange={(e) => setName(e.target.value)} required/>
                </div>

                <div>
                    <label htmlFor="project-owner-email">Project Owner Contact:</label>
                    <input type="email" id="Owner-email" name="ownerEmail" value={contact}
                           onChange={(e) => setContact(e.target.value)} required/>
                </div>

                <div>
                    <label htmlFor="project-id">Project ID:</label>
                    <input type="text" id="project-id-owner" name="project-id" value={projectId}
                           onChange={(e) => setProjectId(e.target.value)} required/>
                </div>

                <div>
                    <button className={"submit-btn"} type="">Create Project Owner</button>
                </div>

            </form>
            {isSuccess === "true" ? <span className={"success"}>Project Owner saved successfully</span> : ""}
            {isSuccess === "false" ? <span className={"error"}>Something went wrong, try again later</span> : ""}
        </div>
    );
};

export default ProjectOwnerRegistrationForm;