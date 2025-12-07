import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listEmployees, deleteEmployee } from "../services/EmployeeServices";

function ListEmployeeComponent() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = () => {
    listEmployees()
      .then((response) => setEmployees(response.data))
      .catch((error) => console.log("Error loading employees", error));
  };

  const removeEmployee = (id) => {
    deleteEmployee(id)
      .then(() => loadEmployees())
      .catch((error) => console.log("Delete failed", error));
  };

  return (
    <div className="container mt-4">
      <button className="btn btn-primary mb-3" onClick={() => navigate("/add-employee")}>
        Add Employee
      </button>

      <h2 className="text-center mb-4">List of Employees</h2>

     <div className="table-responsive">
         <table className="table table-bordered table-striped text-center">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Email ID</th>
            <th>Mobile No</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Join Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.mobno}</td>
              <td>{emp.department}</td>
              <td>{emp.designation}</td>
              <td>{emp.salary}</td>
              <td>{emp.joinDate}</td>

              <td>
                <button
                  className="btn btn-info me-2"
                  onClick={() => navigate(`/edit-employee/${emp.id}`)}
                >
                  Update
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => removeEmployee(emp.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>
    </div>
  );
}

export default ListEmployeeComponent;
