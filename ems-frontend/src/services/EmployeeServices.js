import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/employees";

export const listEmployees = () => axios.get(REST_API_BASE_URL);

export const createEmployee = (employee) => {
    return axios.post(REST_API_BASE_URL, employee);
};



// ✔ Get single employee by ID
export const getEmployee = (id) => axios.get(`${REST_API_BASE_URL}/${id}`);

// ✔ Update employee
export const updateEmployee = (id, employee) =>
  axios.put(`${REST_API_BASE_URL}/${id}`, employee);

// ✔ Delete employee
export const deleteEmployee = (id) => axios.delete(`${REST_API_BASE_URL}/${id}`);

