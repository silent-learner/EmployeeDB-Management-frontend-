import React, { useState } from "react";
import "../../node_modules/rsuite/dist/rsuite.min.css";
import { DatePicker } from "rsuite";

const Employee = ({
  name,
  email,
  aadharNumber,
  phone,
  company_name,
  department,
  address,
  city,
  country,
  salary,
  dateOfJoining,
  render,
  setrender,
  setmessage
}) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const URL = "https://backend-production-0322.up.railway.app"
  // const URL = "http://localhost:8080";
  const [isEditing, setisEditing] = useState(false);
  const [employee, setemployee] = useState({});
  const updatehandler = async (aadharNumber) => {
    const data = await fetch(`${URL}/employee/${aadharNumber}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });
    setisEditing(false);
    let json = await data.json();
    console.log(json);
    setmessage(json.message);
    setTimeout(() => {
      setmessage("");
    }, 2000);
    // console.log(render);
    setrender(!render);
  };
  const handledelete = async (aadharNumber) => {
    let confirm = window.confirm("Are you sure to delete this employee ? ");
    if (confirm === true) {
      let data = await fetch(`${URL}/employee/${aadharNumber}`, {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let json = await data.json();
      setmessage(json.message);
      setTimeout(() => {
        setmessage("");
      }, 2000);
      //   console.log(json);
      //   console.log(render);
      setrender(!render);
    }
  };
  return (
    <>
      {!isEditing ? (
        <div className="my-2 shadow mb-2 bg-white rounded">
          <div className="card">
            <div className="card-body d-flex justify-content-between">
              <div className="d-flex w-50 mx-3 flex-column">
                <p className="card-title" style={{ fontSize: "1.5rem" }}>
                  <strong>{capitalizeFirstLetter(name)}</strong>
                </p>
                <h6 className="card-subtitle mb-2 text-muted">
                  Email : {email}
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  Phone : {phone}
                </h6>
                <p className="card-text">
                  <strong>Address : </strong>
                  {capitalizeFirstLetter(address)},{capitalizeFirstLetter(city)}
                  ,{country.toUpperCase()}
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Date of Joining : {new Date(dateOfJoining).toDateString()}
                  </small>
                </p>
              </div>
              <div className="d-flex w-50 mx-3 flex-column">
                <h5 className="card-title">Aadhar Number : {aadharNumber}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Company : {capitalizeFirstLetter(company_name)}
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  Department No. : {department}
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  Salary :{" "}
                  <em>
                    <strong>$</strong>
                  </em>
                  {salary}
                </h6>
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-sm btn-outline-success mx-2"
                    onClick={() => {
                      setisEditing(true);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handledelete(aadharNumber)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="my-2 shadow mb-2 bg-white rounded">
          <div className="card">
            <div className="card-body d-flex justify-content-between">
              <div className="d-flex w-50 mx-3 flex-column">
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    autoComplete="off"
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder={name}
                    value={employee.name}
                    onChange={(e) => {
                      setemployee({ ...employee, name: e.target.value });
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    autoComplete="off"
                    id="email"
                    type="email"
                    className="form-control"
                    value={employee.email}
                    placeholder={email}
                    onChange={(e) => {
                      setemployee({ ...employee, email: e.target.value });
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input
                    autoComplete="off"
                    id="phone"
                    type="number"
                    className="form-control"
                    value={employee.phone}
                    placeholder={phone}
                    onChange={(e) => {
                      setemployee({ ...employee, phone: e.target.value });
                    }}
                  />
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="address">Address</label>
                    <input
                      autoComplete="off"
                      id="address"
                      type="text"
                      className="form-control"
                      value={employee.address}
                      placeholder={address}
                      onChange={(e) => {
                        setemployee({ ...employee, address: e.target.value });
                      }}
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="city">City</label>
                    <input
                      autoComplete="off"
                      id="city"
                      type="text"
                      className="form-control"
                      value={employee.city}
                      placeholder={city}
                      onChange={(e) => {
                        setemployee({ ...employee, city: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="country">Country</label>
                    <input
                      autoComplete="off"
                      id="country"
                      type="text"
                      className="form-control"
                      value={employee.country}
                      placeholder={country}
                      onChange={(e) => {
                        setemployee({ ...employee, country: e.target.value });
                      }}
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="dateOfJoining">Date of Joining</label>
                    <DatePicker
                      placeholder={new Date(dateOfJoining).toLocaleDateString()}
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
              </div>
              <div className="d-flex w-50 mx-3 flex-column">
                <label htmlFor="aadharNumber">Aadhar Number</label>
                <input
                  autoComplete="off"
                  id="aadharNumber"
                  type="text"
                  className="form-control"
                  value={employee.aadharNumber}
                  placeholder={aadharNumber}
                  onChange={(e) => {
                    setemployee({
                      ...employee,
                      aadharNumber: e.target.value,
                    });
                  }}
                  disabled
                />
                <label htmlFor="company">Company</label>
                <input
                  autoComplete="off"
                  id="company"
                  type="text"
                  className="form-control"
                  value={employee.company_name}
                  placeholder={company_name}
                  onChange={(e) => {
                    setemployee({
                      ...employee,
                      company_name: e.target.value,
                    });
                  }}
                />
                <label htmlFor="department">Department</label>
                <input
                  autoComplete="off"
                  id="department"
                  type="number"
                  className="form-control"
                  value={employee.department}
                  placeholder={department}
                  onChange={(e) => {
                    setemployee({
                      ...employee,
                      department: e.target.value,
                    });
                  }}
                />
                <label htmlFor="salary">Salary</label>
                <input
                  autoComplete="off"
                  id="salary"
                  type="number"
                  className="form-control"
                  value={employee.salary}
                  placeholder={salary}
                  onChange={(e) => {
                    setemployee({
                      ...employee,
                      salary: e.target.value,
                    });
                  }}
                />
                <div className="mt-3 d-flex justify-content-end">
                  <button
                    className="btn btn-sm btn-outline-success"
                    onClick={() => {
                      //   console.log(aadharNumber);
                      updatehandler(aadharNumber);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger mx-2"
                    onClick={() => {
                      setisEditing(false);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Employee;
