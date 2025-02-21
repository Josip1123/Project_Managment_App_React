import CustomerDropdown from "./CustomerDropdown.jsx";
import ProjectDropdown from "./ProjectDropdown.jsx";
import ServicesDropdown from "./ServicesDropdown.jsx";
import ProjectOwnersDropdown from "./ProjectOwnersDropdown.jsx";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <ProjectDropdown/>
                </li>


                <li>
                    <CustomerDropdown/>
                </li>


                <li>
                    <ServicesDropdown/>
                </li>

                <li>
                    <ProjectOwnersDropdown/>
                </li>
            </ul>
        </nav>
    )
        ;
};

export default Navbar;