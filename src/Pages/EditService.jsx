import {useState} from "react";

const EditService = () => {
    const [id, setId] = useState("");
    const [service, setCustomer] = useState();
    const [showForm, setShowForm] = useState(true);
    const [isSuccess, setIsSuccess] = useState("");

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [projectId, setProjectId] = useState("");


    const url = "http://localhost:5041/api/Service";

    const handleGetService = async (id) => {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (!response.ok) {
                console.log(`Failed to get service: ${response.status}`);
                setIsSuccess("noUser");
            }


            const result = await response.json();

            setCustomer(result);
            setName(result.name);
            setDescription(result.description);
            setPrice(result.price);
            setProjectId(result.projectId)

            console.log("Server response:", result);
        } catch (error) {
            console.log("Error getting service:", error);
        }

    };

    const handleUpdateService = async (event) => {
        event.preventDefault();

        const updatedProject = {
            name: name,
            description: description,
            price: price,
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
                console.log(`Failed to update Service: ${response.status}`);
                setIsSuccess("false");
                return;
            }

            const result = await response.json();
            console.log("Service updated successfully:", result);
            setShowForm(false);
            setIsSuccess("true");
        } catch (error) {
            console.log("Error updating service:", error);
        }
    };

    return (

        <div className={"project-edit"}>
            <h1>Edit Service Here</h1>
            <h2>Type in ID of the Service you would like to edit</h2>
            {!service &&(
                <div className={"id-register-form"}>
                    <label htmlFor="project-id"></label>
                    <input type="text" id="project-id" name="projectId" value={id} placeholder={"Service ID"}
                           onChange={(e) => setId(e.target.value)} required/>
                    <button className={"main-btn"} onClick={() => handleGetService(id)}>Load Service</button>
                </div>
            )}


            {service && showForm && (
                <form onSubmit={handleUpdateService}>
                    <div>
                        <label htmlFor="project-name">Service Name:</label>
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
                        <label htmlFor="description">Description:</label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            maxLength={150}
                            required
                        />
                        <label htmlFor="price">Price:</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </div>

                    <button className={"update-btn"} type="submit">Update Service</button>
                </form>
            )}

            {isSuccess === "true" && (
                <div className={"success"}>{"Service updated successfully"}</div>
            )}
            {isSuccess === "false" && (
                <div className={"error"}>{"Something went wrong"}</div>
            )}
            {isSuccess === "noUser" &&(
                <div className={"error"}>{"ID doesnt match any user"}</div>
            )}
        </div>
    );
};

export default EditService;