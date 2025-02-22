import {useEffect, useState} from "react";

const AllProjects = () => {

    const [projects, setProjects] = useState([]);
    const url = "http://localhost:5041/api/Project";//localhost:5041/api/project"

    useEffect(() => {
        async function fetchData() {
            try{
                const response = await fetch(url);
                const data = await response.json();
                setProjects(data);

                if (!response.ok) {
                    console.log(`Failed to get projects: ${response.status}`);
                }

            } catch (error) {
                console.log("error getting projects", error);
            }
        }

        fetchData();

    }, [])


    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({id})
            });
            if (!response.ok) {
                console.log(`Failed to delete project: ${response.status}`);
            }

            setProjects(p => p.filter(project => project.id !== id));

            const result = await response.json();
            console.log("Server response:", result);
        } catch (error) {
            console.log("Error deleting project:", error);
        }

    };


    return (
        <>
        <h1>Showing all projects:</h1>
        <div className={"project-list"}>
            {projects.map((item) => {

                return <div className={"project-list-item"} key={item.id}><span  className={"project-span"}>Project ID:</span> {item.id}
                            <br/><span className={"project-span"}>Project Name:</span> {item.name}
                            <br/><span className={"project-span"}>Date Created:</span> {item.dateCreated}
                            <br/><span className={"project-span"}>Date Due:</span> {item.dateDue}
                            <br/><span className={"project-span"}>Status:</span> {item.status}
                            {item.owners && item.owners.length > 0 && (
                                <div>
                                    <span className="project-span">Owners: </span>
                                    {item.owners.map((owner) => (
                                        <span key={owner.id}>
                                            <b>{owner.name}</b><i>({owner.id})</i>{" "}
                                        </span>
                                    ))}
                                </div>
                            )}
                            {item.customers && item.customers.length > 0 && (
                                <div>
                                    <span className="project-span">Customers: </span>
                                    {item.customers.map((customer) => (
                                        <span key={customer.id}>
                                            <b>{customer.name}</b><i>({customer.id})</i>{" "}
                                        </span>
                                    ))}
                                </div>
                            )}
                            {item.services && item.services.length > 0 && (
                                <div>
                                    <span className="project-span">Services: </span>
                                    {item.services.map((service) => (
                                        <span key={service.id}>
                                            <b>{service.name}</b><i>({service.id})</i>{" "}
                                        </span>
                                    ))}
                                </div>
                            )}
                            <br/><button className={"delete-btn"} onClick={()=> handleDelete(item.id)}>Delete</button>
                        </div>
            })}
        </div>
        </>
    );
};

export default AllProjects;