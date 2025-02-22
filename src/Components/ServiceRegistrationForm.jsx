import {useEffect, useState} from "react";

const ServiceRegistrationForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [projectId, setProjectId] = useState("");
    const [isSuccess, setIsSuccess] = useState("");
    const url = "http://localhost:5041/api/Service";

    //to reset isSuccess state
    useEffect(()=>{
        setIsSuccess("");
    }, [])

    const handleReset = () => {

        setName("");
        setPrice("");
        setDescription("");
        setProjectId("")
    };

    const handleSubmit = async (event) => {
        event.preventDefault();


        const data = {
            name: name,
            description: description,
            price: price,
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
            console.error('Error creating service:', error);
        }
        handleReset();
    };
    return (
        <div className={"create"}>

            <h1>Register a Service!</h1>
            <h2>Add service to existing project:</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="service-name">Service Name:</label>
                    <input type="text" id="service-name" name="serviceName" value={name}
                           onChange={(e) => setName(e.target.value)} required/>
                </div>

                <div>
                    <label htmlFor="service-description">Service Description:</label>
                    <textarea id="service-description" name="serviceDescription" maxLength={150} value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              required></textarea>
                </div>
                <div>
                    <label htmlFor="service-price">Price:</label>
                    <input type="number" id="service-price" name="servicePrice" value={price}
                           onChange={(e) => setPrice(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="project-id">Project ID:</label>
                    <input type="text" id="project-id-customer" name="project-id" value={projectId}
                           onChange={(e) => setProjectId(e.target.value)} required/>
                </div>

                <button className={"submit-btn"} type={"submit"}>Submit</button>
            </form>
            {isSuccess === "true" ? <span className={"success"}>Service saved successfully</span> : ""}
            {isSuccess === "false" ? <span className={"error"}>Something went wrong, try again later</span> : ""}
        </div>
    );
};

export default ServiceRegistrationForm;