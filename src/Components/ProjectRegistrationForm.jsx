import {useEffect, useState} from "react";

const ProjectRegistrationForm = () => {

    const [name, setName] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);
    const [dateDue, setDateDue] = useState("");
    const [isSuccess, setIsSuccess] = useState("");
    const url = "http://localhost:5041/api/Project";

    //to reset isSuccess state
    useEffect(()=>{
        setIsSuccess("");
    }, [])

    const handleReset = () => {

        setName("");
        setDateDue("");
        setIsCompleted(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();


        const data = {
            name: name,
            isCompleted: isCompleted,
            dateDue: dateDue,
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
            console.error('Error creating project:', error);
        }
        handleReset();
    };

    return (
        <div className={"create"}>

        <h1>Register a Project!</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="project-name">Project Name:</label>
                    <input type="text" id="project-name" name="projectName" value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="date-due">Date Due:</label>
                    <input type="date" id="date-due" name="dateDue" value={dateDue} onChange={(e) => setDateDue(e.target.value)} required/>
                </div>
                <div className={"isCompletedCheckbox"}>
                    <label>Is It Completed?</label>
                    <input type="checkbox" id="is-completed" name="isCompleted" checked={isCompleted} onChange={(e) => setIsCompleted(e.target.checked)}/>
                </div>

                <button className={"submit-btn"} type={"submit"} >Submit</button>
            </form>
            {isSuccess === "true" ? <span className={"success"}>Customer saved successfully</span> : "" }
            {isSuccess === "false" ? <span className={"error"}>Something went wrong, try again later</span> : ""}

        </div>
    );
};

export default ProjectRegistrationForm;