
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllProjects from "./Pages/AllProjects.jsx";
import EditProject from "./Pages/EditProject.jsx";
import CreateCustomer from "./Pages/CreateCustomer.jsx";
import EditCustomer from "./Pages/EditCustomer.jsx";
import CreateProject from "./Pages/CreateProject.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import AllCustomers from "./Pages/AllCustomers.jsx";
import CreateProjectOwner from "./Pages/CreateProjectOwner.jsx";
import EditProjectOwner from "./Pages/EditProjectOwner.jsx";
import AllProjectOwners from "./Pages/AllProjectOwners.jsx";
import AllServices from "./Pages/AllServices.jsx";
import CreateService from "./Pages/CreateService.jsx";
import EditService from "./Pages/EditService.jsx";
import NavbarMobile from "./Components/NavbarMobile.jsx";

function App() {


  return (
      <BrowserRouter >
          <main>

              <NavbarMobile/>
            <Routes>
                  <Route path="/" element={<CreateProject />} />
                  <Route path="/all" element={<AllProjects />} />
                  <Route path="/edit_project" element={<EditProject />} />
                  <Route path="/create_customer" element={<CreateCustomer />} />
                  <Route path="/all_customers" element={<AllCustomers />} />
                  <Route path="/edit_customers" element={<EditCustomer />} />
                  <Route path="/create_project_owner" element={<CreateProjectOwner />} />
                  <Route path="/edit_project_owner" element={<EditProjectOwner />} />
                  <Route path="/all_project_owners" element={<AllProjectOwners />} />
                  <Route path="/create_service" element={<CreateService />} />
                  <Route path="/all_services" element={<AllServices />} />
                  <Route path="/edit_service" element={<EditService />} />
            </Routes>
          </main>
      </BrowserRouter>

  )
}

export default App
