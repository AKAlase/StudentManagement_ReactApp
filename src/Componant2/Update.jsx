import React, { useEffect, useState } from "react";
import Style from "./Student.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const Update = () => {
  let id = localStorage.getItem("id");
  let [inputs, setInputs] = useState({
    email: "",
    name: "",
    phoneno: "",
  });
  let [fees, setFees] = useState("Yes");
  let [department, setDepartment] = useState("BCA");
  let [gender, setGender] = useState();

  let fetchData = async () => {
    let data = await axios.get(`http://localhost:5000/student/${id}`);
    setInputs(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  let handleinput = e => {
    let { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  };

  let { email, name, phoneno } = inputs;

  let handlefees = e => {
    console.log(e.target.value);
    setFees(e.target.value);
    console.log(fees);
  };

  let handleDepartment = e => {
    console.log(e.target.value);
    setDepartment(e.target.value);
    console.log(fees);
  };

  let handleGender = e => {
    console.log(e.target.value);
    setGender(e.target.value);
  };

  let Update = async e => {
    e.preventDefault();
    let payLoad = {
      email,
      name,
      phoneno,
      fees: fees,
      gender: gender,
      department: department,
    };
    await axios.put(`http://localhost:5000/student/${id}`, payLoad);
    window.location.assign("/student");
  };

  return (
    <article>
      <div>
        <form className={Style.formControl}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={email}
              onChange={handleinput}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="name"
              value={name}
              onChange={handleinput}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Phone No.
            </label>
            <input
              type="tel"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="phoneno"
              value={phoneno}
              onChange={handleinput}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Fees Paid
            </label>
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={handlefees}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Gender
            </label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value="Male"
                onChange={handleGender}
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Male
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                value="Female"
                onChange={handleGender}
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Female
              </label>
            </div>
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Department
            </label>
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={handleDepartment}
            >
              <option value="BCA">BCA</option>
              <option value="BBA">BBA</option>
              <option value="BCOM">B.COM</option>
            </select>
          </div>

          <button type="submit" class="btn btn-primary" onClick={Update}>
            Update
          </button>
        </form>
      </div>
    </article>
  );
};

export default Update;
