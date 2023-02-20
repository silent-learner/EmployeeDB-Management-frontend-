import React, { useState } from "react";
import { DatePicker } from "rsuite";
import "../../node_modules/rsuite/dist/rsuite.min.css";

const CreateEmployees = () => {
  const [employee, setemployee] = useState({
    name: "",
    email: "",
    aadharNumber: "",
    phone: "",
    company_name: "",
    department: "",
    address: "",
    city: "",
    country: "",
    salary: "",
    dateOfJoining: "",
  });
  const [message, setmessage] = useState("");
  // const URL = "https://backend-production-0322.up.railway.app"
  const URL = "http://localhost:8080";
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(employee);
    let data = await fetch(`${URL}/employee/create`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });
    let json = await data.json();
    console.log(json);
    setemployee({
      name: "",
      email: "",
      aadharNumber: "",
      phone: "",
      company_name: "",
      department: "",
      address: "",
      city: "",
      country: "",
      salary: "",
      dateOfJoining: "",
    });
    setmessage(json.message);
    setTimeout(() => {
      setmessage("");
    }, 2000);
  };
  return (
    <div className="container mt-5">
      <form onSubmit={handlesubmit} autoComplete="off">
        <p className="text-center text-primary" style={{ fontSize: "1.5rem" }}>
          {message}
        </p>
        <div className="row my-2">
          <div className="col">
            <label htmlFor="name">Name</label>
            <input
              required
              id="name"
              type="text"
              className="form-control"
              placeholder="Name"
              value={employee.name}
              onChange={(e) => {
                setemployee({ ...employee, name: e.target.value });
              }}
            />
          </div>
          <div className="col">
            <label htmlFor="aadharNumber">Aadhar Number</label>
            <input
              required
              id="aadharNumber"
              type="number"
              className="form-control"
              placeholder="Aadhar Number"
              value={employee.aadharNumber}
              onChange={(e) => {
                setemployee({ ...employee, aadharNumber: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="col">
            <label htmlFor="company">Company</label>
            <input
              required
              id="company"
              type="text"
              className="form-control"
              placeholder="Company"
              value={employee.company_name}
              onChange={(e) => {
                setemployee({ ...employee, company_name: e.target.value });
              }}
            />
          </div>
          <div className="col">
            <label htmlFor="Department">Department</label>
            <input
              required
              id="Department"
              type="number"
              className="form-control"
              placeholder="Department"
              value={employee.department}
              onChange={(e) => {
                setemployee({ ...employee, department: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="col">
            <label htmlFor="email">Email</label>
            <input
              required
              id="email"
              type="email"
              className="form-control"
              placeholder="Email"
              value={employee.email}
              onChange={(e) => {
                setemployee({ ...employee, email: e.target.value });
              }}
            />
          </div>
          <div className="col">
            <label htmlFor="phone">Phone</label>
            <input
              required
              id="phone"
              type="number"
              className="form-control"
              placeholder="Contact Number"
              value={employee.phone}
              onChange={(e) => {
                setemployee({ ...employee, phone: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="col">
            <label htmlFor="address">Address</label>
            <input
              required
              id="address"
              type="text"
              className="form-control"
              placeholder="Address"
              value={employee.address}
              onChange={(e) => {
                setemployee({ ...employee, address: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="col">
            <label htmlFor="city">City</label>
            <input
              required
              id="city"
              type="text"
              className="form-control"
              placeholder="city"
              value={employee.city}
              onChange={(e) => {
                setemployee({ ...employee, city: e.target.value });
              }}
            />
          </div>
          <div className="col">
            <label htmlFor="country">Country</label>
            <input
              required
              id="country"
              type="text"
              className="form-control"
              placeholder="country"
              value={employee.country}
              onChange={(e) => {
                setemployee({ ...employee, country: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="col">
            <label htmlFor="salary">Salary</label>
            <input
              required
              id="salary"
              type="number"
              className="form-control"
              placeholder="salary"
              value={employee.salary}
              onChange={(e) => {
                setemployee({ ...employee, salary: e.target.value });
              }}
            />
          </div>
          <div className="col">
            <label htmlFor="dateOfJoining">Date of Joining</label>
            <DatePicker
              placeholder="Date of Joining"
              style={{ width: "100%" }}
              onChange={(e) => {
                setemployee({
                  ...employee,
                  dateOfJoining: new Date(e),
                });
              }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button type="submit" className="btn btn-success">
            Add Employee
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEmployees;
