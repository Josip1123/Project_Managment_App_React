
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllProjects from "./Pages/AllProjects.jsx";
import EditProject from "./Pages/EditProject.jsx";
import EditProjectOwner from "./Pages/EditProjectOwner.jsx";
import EditCustomer from "./Pages/EditCustomer.jsx";
import EditServices from "./Pages/EditServices.jsx";
import CreateProject from "./Pages/CreateProject.jsx";
import Navbar from "./Components/Navbar.jsx";

function App() {


  return (
      <BrowserRouter >
          <main>
              <Navbar/>
            <Routes>
                  <Route path="/" element={<CreateProject />} />
                  <Route path="/all" element={<AllProjects />} />
                  <Route path="/edit_project" element={<EditProject />} />
                  <Route path="/edit_project_owner" element={<EditProjectOwner />} />
                  <Route path="/edit_customer" element={<EditCustomer />} />
                  <Route path="/edit_services" element={<EditServices />} />
            </Routes>
          </main>
      </BrowserRouter>

  )
}

export default App
