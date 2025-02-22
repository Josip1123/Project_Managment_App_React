import {useEffect, useState} from "react";


const CustomerRegistrationForm = () => {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [projectId, setProjectId] = useState("");
    const [isSuccess, setIsSuccess] = useState("");

    const url = "http://localhost:5041/api/Customer";

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
            console.error('Error creating customer:', error);
        }
        handleReset();
    };
    return (
        <div className={"create"}>
            <form className={"customer-form"} onSubmit={handleSubmit}>
                <h1>Create Customer</h1>
                <h2>Create a new customer for a existing project</h2>
                <div>
                    <label htmlFor="customer-name">Customer Name:</label>
                    <input type="text" id="customer-name" name="customer" value={name}
                           onChange={(e) => setName(e.target.value)} required/>
                </div>

                <div>
                    <label htmlFor="customer-email">Customer Contact:</label>
                    <input type="email" id="customer-email" name="CustomerEmail" value={contact}
                           onChange={(e) => setContact(e.target.value)} required/>
                </div>

                <div>
                    <label htmlFor="project-id">Project ID:</label>
                    <input type="text" id="project-id-customer" name="project-id" value={projectId}
                           onChange={(e) => setProjectId(e.target.value)} required/>
                </div>

                <div>
                    <button className={"submit-btn"} type="">Create Customer</button>
                </div>

            </form>
            {isSuccess === "true" ? <span className={"success"}>Customer saved successfully</span> : "" }
            {isSuccess === "false" ? <span className={"error"}>Something went wrong, try again later</span> : ""}
        </div>
    );
};

export default CustomerRegistrationForm;