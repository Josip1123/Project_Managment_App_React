

const CustomerRegistrationForm = () => {
    return (
        <div>
            <div>
                <label htmlFor="customer-name">Customer Name:</label>
                <input type="text" id="customer-name" name="customer" required/>
            </div>

            <div>
                <label htmlFor="project-owner-email">Customer Contact:</label>
                <input type="email" id="customer-email" name="CustomerEmail" required/>
            </div>

            <div>
                <button className={"Submit-btn"} type="">Create Project</button>
            </div>
        </div>
    );
};

export default CustomerRegistrationForm;