
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

import ListEmployeeComponent from "./components/ListEmployeeComponent";
import EmployeeComponent from './components/EmployeeComponent';
// Later we will add AddEmployeeComponent, UpdateEmployeeComponent

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />

        <div className="container mt-3">
          <Routes>

            {/* Home Route → List All Employees */}
            <Route path="/" element={<ListEmployeeComponent />}></Route> 

            {/* Route for /employees */}
            <Route path="/employees" element={<ListEmployeeComponent />}></Route>

            {/* Route for /add-employees */}

            <Route path="/add-employee" element={<EmployeeComponent />} />

            {/* Route for /edit-employees */}

            <Route path="/edit-employee/:id" element={<EmployeeComponent />} />



          </Routes>
        </div>

        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;

