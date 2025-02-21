
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllProjects from "./Pages/AllProjects.jsx";
import EditProject from "./Pages/EditProject.jsx";
import CreateCustomer from "./Pages/CreateCustomer.jsx";
import EditCustomer from "./Pages/EditCustomer.jsx";
import CreateProject from "./Pages/CreateProject.jsx";
import Navbar from "./Components/Navbar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import AllCustomers from "./Pages/AllCustomers.jsx";

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
                  <Route path="/all_customers" element={<AllCustomers />} />
                <Route path="/edit_customers" element={<EditCustomer />} />
            </Routes>
          </main>
      </BrowserRouter>

  )
}

export default App
