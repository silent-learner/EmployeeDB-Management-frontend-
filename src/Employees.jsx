import React, { useEffect, useState } from "react";
import "../node_modules/rsuite/dist/rsuite.min.css";
import { DateRangePicker } from "rsuite";
import Employee from "./components/Employee";

const Employees = (props) => {
  const { setProgress } = props;
  // const URL = "http://localhost:8080";
  const URL = "https://backend-production-0322.up.railway.app";
  const [message, setmessage] = useState("");
  const [render, setrender] = useState(false);
  const [name, setname] = useState("");
  const [city, setcity] = useState("");
  const [country, setcountry] = useState("");
  const [aadharNumber, setaadharNumber] = useState("");
  const [dateOfJoining, setdateOfJoining] = useState(false);
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const [company, setcompany] = useState("");
  const query = `name=${name}&city=${city}&country=${country}&dateOfJoining=${dateOfJoining}&company_name=${company}&aadharNumber=${aadharNumber}`;
  const [employees, setemployees] = useState([]);
  const fetchemployee = async () => {
    // console.log(props);
    setProgress(10);
    // console.log(`https://backend-production-0322.up.railway.app/employee?${query}`);
    let data = await fetch(`${URL}/employee/?${query}`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startingDate: startDate,
        endingDate: endDate,
      }),
    });
    setProgress(30);
    let json = await data.json();
    setProgress(75);
    console.log(json.items);
    if (json.success === true) {
      setProgress(100);
      return json.items;
    } else {
      return [];
    }
  };
  const onRangechange = (date) => {
    if (date) {
      let [start, end] = date;
      setdateOfJoining(true);
      setstartDate(new Date(start).toISOString());
      setendDate(new Date(end).toISOString());
      // console.log(new Date(start).toISOString());
      // console.log(new Date(end).toISOString());
    } else {
      setdateOfJoining(false);
      setstartDate("");
      setendDate("");
    }
  };
  useEffect(() => {
    fetchemployee().then((arr) => {
      // console.log(arr);
      setemployees(arr);
    });
    //   console.log(employees);
    // eslint-disable-next-line
  }, [name, city, country, aadharNumber, startDate, endDate, company, render]);
  return (
    <div className="container">
      <p
        className="mt-3 d-flex justify-content-center"
        style={{ fontSize: "1.7rem" }}
      >
        Filter the Employee's list
      </p>
      <form autoComplete="off">
        <div className="row m-2">
          <div className="col">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <label htmlFor="aadhar">Aadhar Number</label>
            <input
              id="aadhar"
              type="number"
              className="form-control"
              placeholder="Aadhar Number"
              value={aadharNumber}
              onChange={(e) => {
                setaadharNumber(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              type="text"
              className="form-control"
              placeholder="Company"
              value={company}
              onChange={(e) => {
                setcompany(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row m-2">
          <div className="col">
            <p>Date of Joining</p>
            <DateRangePicker
              appearance="default"
              placeholder="Select range of dates"
              style={{ width: "100%" }}
              onChange={onRangechange}
            />
          </div>
          <div className="col">
            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              className="form-control"
              placeholder="City"
              value={city}
              onChange={(e) => {
                setcity(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <label htmlFor="country">Country</label>
            <input
              id="country"
              type="text"
              className="form-control"
              placeholder="Country"
              value={country}
              onChange={(e) => {
                setcountry(e.target.value);
              }}
            />
          </div>
        </div>
      </form>
      <div className="row">
        <p
          className="text-center text-primary"
          style={{ fontSize: "1.5rem" }}
        >
          {message}
        </p>
        {employees.length !== 0 ? (
          employees.map((emp) => {
            return (
              <div key={emp.aadharNumber} className="col col-sm-12">
                <Employee
                  name={emp.name}
                  email={emp.email}
                  aadharNumber={emp.aadharNumber}
                  phone={emp.phone}
                  company_name={emp.company_name}
                  department={emp.department}
                  address={emp.address}
                  city={emp.city}
                  country={emp.country}
                  salary={emp.salary}
                  dateOfJoining={emp.dateOfJoining}
                  render={render}
                  setrender={setrender}
                  setmessage={setmessage}
                />
              </div>
            );
          })
        ) : (
          <p className="text-center mt-3" style={{ fontSize: "1.5rem" }}>
            No employees
          </p>
        )}
      </div>
    </div>
  );
};

export default Employees;
