import {useEffect, useState} from "react";

const AllProjectOwners = () => {

    const [owners, setOwners] = useState([]);
    const url = "http://localhost:5041/api/ProjectOwner";//localhost:5041/api/project"

    useEffect(() => {
        async function fetchData() {
            try{
                const response = await fetch(url);
                const data = await response.json();
                setOwners(data);

                if (!response.ok) {
                    console.log(`Failed to get project owners: ${response.status}`);
                }


            } catch (error) {
                console.log("error getting project owners", error);
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
                console.log(`Failed to delete project owner: ${response.status}`);
            }

            setOwners(p => p.filter(project => project.id !== id));

            const result = await response.json();
            console.log("Server response:", result);
        } catch (error) {
            console.log("Error deleting project owner:", error);
        }

    };


    return (
        <>
            <h1>Showing all project owners:</h1>
            <div className={"project-list"}>
                {owners.map((item) => {
                    return <div className={"project-list-item"} key={item.id}><span  className={"project-span"}>Project Owner ID:</span> {item.id}
                        <br/><span className={"project-span"}>Project Owner Name:</span> {item.name}
                        <br/><span className={"project-span"}>Email:</span> {item.email}
                        <br/><span className={"project-span"}>Project:</span> <b>{item.projectName}</b><i>({item.projectId}</i>)
                        <br/><button className={"delete-btn"} onClick={()=> handleDelete(item.id)}>Delete</button>
                    </div>
                })}
            </div>
        </>
    );
};

export default AllProjectOwners;