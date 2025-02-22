import {useEffect, useState} from "react";

const AllServices = () => {

    const [servicess, setServicess] = useState([]);
    const url = "http://localhost:5041/api/Service";//localhost:5041/api/project"

    useEffect(() => {
        async function fetchData() {
            try{
                const response = await fetch(url);
                const data = await response.json();
                setServicess(data);

                if (!response.ok) {
                    console.log(`Failed to get services: ${response.status}`);
                }


            } catch (error) {
                console.log("error getting service", error);
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
                console.log(`Failed to delete service: ${response.status}`);
            }

            setServicess(p => p.filter(project => project.id !== id));

            const result = await response.json();
            console.log("Server response:", result);
        } catch (error) {
            console.log("Error deleting service:", error);
        }

    };


    return (
        <>
            <h1>Showing all services:</h1>
            <div className={"project-list"}>
                {servicess.map((item) => {
                    return <div className={"project-list-item"} key={item.id}><span  className={"project-span"}>Service ID:</span> {item.id}
                        <br/><span className={"project-span"}>Service Name:</span> {item.name}
                        <br/><span className={"project-span"}>Description: </span>{item.description}
                        <br/><span className={"project-span"}>Description:</span> {item.price + " €"}
                        <br/><span className={"project-span"}>Project:</span> <b>{item.projectName}</b><i>({item.projectId}</i>)
                        <br/><button className={"delete-btn"} onClick={()=> handleDelete(item.id)}>Delete</button>
                    </div>
                })}
            </div>
        </>
    );
};

export default AllServices;