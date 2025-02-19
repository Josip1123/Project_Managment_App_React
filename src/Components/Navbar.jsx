
const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><a className={"home"} href="/">Create Project</a></li>

                <li><a className={"show-projects"} href="/all">Show All Projects</a></li>

                <li><a className={"edit-project"} href="/edit-projects">Edit Project</a></li>


                <li>
                    <a className="dropdown-btn">Customer ▾</a>
                    <div className="dropdown-customer">
                        <a href="#">Create customer</a>
                        <a href="#">Delete Customer</a>
                        <a href="#">Edit Customer</a>
                        <a href="#">Show All Customers</a>
                    </div>
                </li>


                <li>
                    <a className="dropdown-btn">Services ▾</a>
                    <div className="dropdown-service">
                        <a href="#">Create Services</a>
                        <a href="#">Delete Services</a>
                        <a href="#">Edit Services</a>
                        <a href="#">Show All Services</a>
                    </div>
                </li>

                <li>
                    <a className="dropdown-btn">Project Owner ▾</a>
                    <div className="dropdown-project-owner">
                        <a href="#">Create Project Owner</a>
                        <a href="#">Delete SProject Owner</a>
                        <a href="#">Edit SProject Owner</a>
                        <a href="#">Show All Project Owners</a>
                    </div>
                </li>
            </ul>
        </nav>
    )
        ;
};

export default Navbar;