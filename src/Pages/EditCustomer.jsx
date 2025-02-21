import {useState} from "react";

const EditCustomer = () => {
    const [id, setId] = useState("");
    const [customer, setCustomer] = useState();
    const [showForm, setShowForm] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [projectId, setProjectId] = useState("");


    const url = "http://localhost:5041/api/Customer";

    const handleGetCustomer = async (id) => {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (!response.ok) {
                console.log(`Failed to get customer: ${response.status}`);
                setIsSuccess("noUser");
            }


            const result = await response.json();

            setCustomer(result);
            setName(result.name);
            setEmail(result.email);
            setProjectId(result.projectId)

            console.log("Server response:", result);
        } catch (error) {
            console.log("Error deleting project:", error);
        }

    };

    const handleUpdateCustomer = async (event) => {
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
            console.log("Project updated successfully:", result);
            setShowForm(false);
            setIsSuccess("true");
        } catch (error) {
            console.log("Error updating customer:", error);
        }
    };

    return (

        <div className={"project-edit"}>
            <h1>Edit Customer Here</h1>
            <h2>Type in ID of the Customer you would like to edit</h2>
            {!customer &&(
                <div className={"id-register-form"}>
                    <label htmlFor="project-id"></label>
                    <input type="text" id="project-id" name="projectId" value={id} placeholder={"Customer ID"}
                           onChange={(e) => setId(e.target.value)} required/>
                    <button className={"main-btn"} onClick={() => handleGetCustomer(id)}>Load Customer</button>
                </div>
            )}


            {customer && showForm && (
                <form onSubmit={handleUpdateCustomer}>
                    <div>
                        <label htmlFor="project-name">Customer Name:</label>
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

                    <button className={"update-btn"} type="submit">Update Customer</button>
                </form>
            )}

            {isSuccess === "true" &&(
                <div className={"success"}>{"Project updated successfully"}</div>
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

export default EditCustomer;