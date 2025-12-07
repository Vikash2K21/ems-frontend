import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createEmployee, updateEmployee, getEmployee } from "../services/EmployeeServices";

function EmployeeComponent() {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    mobno: "",
    department: "",
    designation: "",
    salary: "",
    joinDate: "",
  });

  const navigate = useNavigate();
  const { id } = useParams(); // If id exists → Update mode

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((res) => {
          // Convert joinDate to yyyy-MM-dd for input type="date"
          const emp = res.data;
          if (emp.joinDate) {
            emp.joinDate = emp.joinDate.toString().split("T")[0];
          }
          setEmployee(emp);
        })
        .catch((err) => console.log("Error fetching employee", err));
    }
  }, [id]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const saveOrUpdateEmployee = (e) => {
  e.preventDefault();

  // 🚨 VALIDATION: block empty submission
  if (
    employee.name.trim() === "" ||
    employee.email.trim() === "" ||
    employee.mobno.trim() === "" ||
    employee.department.trim() === "" ||
    employee.designation.trim() === "" ||
    employee.salary === "" ||
    employee.joinDate === ""
  ) {
    alert("Please fill out all fields before submitting!");
    return; // ⛔ STOP HERE — do NOT submit
  }

  // Convert salary to number because backend expects Double
  const empToSend = {
    ...employee,
    salary: Number(employee.salary),
  };

  if (!id) {
    createEmployee(empToSend)
      .then(() => navigate("/employees"))
      .catch((err) => console.log("Save Error", err));
  } else {
    updateEmployee(id, empToSend)
      .then(() => navigate("/employees"))
      .catch((err) => console.log("Update Error", err));
  }
};


  return (
    <div className="container-fluid mt-4 px-3">
      <h2 className="text-center my-4 fw-bold">{id ? "Update Employee" : "Add Employee"}</h2>

      <form onSubmit={saveOrUpdateEmployee} className="mt-3">

        <div className="row">
  <div className="col-md-6 mb-3">
    <input
      className="form-control"
      type="text"
      placeholder="Enter Name"
      name="name"
      value={employee.name}
      onChange={handleChange}
    />
  </div>

  <div className="col-md-6 mb-3">
    <input
      className="form-control"
      type="email"
      placeholder="Enter Email"
      name="email"
      value={employee.email}
      onChange={handleChange}
    />
  </div>

  <div className="col-md-6 mb-3">
    <input
      className="form-control"
      type="text"
      placeholder="Enter Mobile No"
      name="mobno"
      value={employee.mobno}
      onChange={handleChange}
    />
  </div>

  <div className="col-md-6 mb-3">
    <input
      className="form-control"
      type="text"
      placeholder="Enter Department"
      name="department"
      value={employee.department}
      onChange={handleChange}
    />
  </div>

  <div className="col-md-6 mb-3">
    <input
      className="form-control"
      type="text"
      placeholder="Enter Designation"
      name="designation"
      value={employee.designation}
      onChange={handleChange}
    />
  </div>

  <div className="col-md-6 mb-3">
    <input
      className="form-control"
      type="number"
      placeholder="Enter Salary"
      name="salary"
      value={employee.salary}
      onChange={handleChange}
    />
  </div>

  <div className="col-md-6 mb-3">
    <input
      className="form-control"
      type="date"
      name="joinDate"
      value={employee.joinDate}
      onChange={handleChange}
    />
  </div>
</div>

{/* Buttons */}
<div className="d-flex mt-3">
  {!id && (
    <button className="btn btn-success me-3" type="submit">
      Save
    </button>
  )}

  {id && (
    <button className="btn btn-info me-3" type="submit">
      Update
    </button>
  )}

  <button type="button" className="btn btn-danger" onClick={() => navigate("/employees")}>
    Cancel
  </button>
</div>


      </form>
    </div>
  );
}

export default EmployeeComponent;
