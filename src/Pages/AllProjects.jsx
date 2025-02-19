import {useEffect, useState} from "react";


const AllProjects = () => {

    const [projects, setProjects] = useState([]);
    const url = "http://localhost:5041/api/Project";//localhost:5041/api/project"

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url);
            const data = await res.json();
            setProjects(data);
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
        <div className={"project-list"}>
            {projects.map((item) => {

                return <div className={"project-list-item"} key={item.id}>Project ID: {item.id}
                            <br/>Project Name: {item.name},
                            <br/>Date Due: {item.dateDue},
                            <br/>Status: {item.status}
                            <br/><button className={"delete-btn"} onClick={()=> handleDelete(item.id)}>Delete</button>
                        </div>
            })}
        </div>
    );
};

export default AllProjects;