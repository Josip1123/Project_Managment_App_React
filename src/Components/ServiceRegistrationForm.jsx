
const ServiceRegistrationForm = () => {
    return (
        <div>
            <div>
                <label htmlFor="service-name">Service Name:</label>
                <input type="text" id="service-name" name="serviceName" required/>
            </div>

            <div>
                <label htmlFor="service-description">Service Description:</label>
                <textarea id="service-description" name="serviceDescription" maxLength={150} required></textarea>
            </div>

            <div>
                <label htmlFor="service-price">Price:</label>
                <input type="number" id="service-price" name="servicePrice" required/>
            </div>
        </div>
    );
};

export default ServiceRegistrationForm;