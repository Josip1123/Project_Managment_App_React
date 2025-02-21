
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllProjects from "./Pages/AllProjects.jsx";
import EditProject from "./Pages/EditProject.jsx";
import CreateCustomer from "./Pages/CreateCustomer.jsx";
import EditServices from "./Pages/EditServices.jsx";
import CreateProject from "./Pages/CreateProject.jsx";
import Navbar from "./Components/Navbar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
      <BrowserRouter >
          <main>
              <Navbar/>
            <Routes>
                  <Route path="/" element={<CreateProject />} />
                  <Route path="/all" element={<AllProjects />} />
                  <Route path="/edit_project" element={<EditProject />} />
                  <Route path="/create_customer" element={<CreateCustomer />} />
                  <Route path="/edit_services" element={<EditServices />} />
            </Routes>
          </main>
      </BrowserRouter>

  )
}

export default App
