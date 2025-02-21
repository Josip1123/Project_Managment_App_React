import {useEffect, useState} from "react";

const AllCustomers = () => {

    const [customers, setCustomers] = useState([]);
    const url = "http://localhost:5041/api/Customer";//localhost:5041/api/project"

    useEffect(() => {
        async function fetchData() {
            try{
                const response = await fetch(url);
                const data = await response.json();
                setCustomers(data);

                if (!response.ok) {
                    console.log(`Failed to get customers: ${response.status}`);
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
                console.log(`Failed to delete customer: ${response.status}`);
            }

            setCustomers(p => p.filter(project => project.id !== id));

            const result = await response.json();
            console.log("Server response:", result);
        } catch (error) {
            console.log("Error deleting project:", error);
        }

    };


    return (
        <div className={"project-list"}>
            {customers.map((item) => {

                return <div className={"project-list-item"} key={item.id}><span  className={"project-span"}>Customer ID:</span> {item.id}
                    <br/><span className={"project-span"}>Customer Name:</span> {item.name}
                    <br/><span className={"project-span"}>Email:</span> {item.email}
                    <br/><span className={"project-span"}>Project:</span> <b>{item.projectName}</b><i>({item.projectId}</i>)
                    <br/><button className={"delete-btn"} onClick={()=> handleDelete(item.id)}>Delete</button>
                </div>
            })}
        </div>
    );
};

export default AllCustomers;