import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const DashBoaard = () => {
  let [display, setDisplay] = useState([]);
  let [fees, setFees] = useState("Yes");
  let [department, setDepartment] = useState();
  let [filter, setFilter] = useState("No");

  let fetchData = async () => {
    let data = await axios.get("http://localhost:5000/student");
    setDisplay(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  let handlefees = e => {
    console.log(e.target.value);
    setFees(e.target.value);
    console.log(fees);
  };

  let handleDepartment = e => {
    console.log(e.target.value);
    setDepartment(e.target.value);
    console.log(fees);
    setFilter("Yes");
  };

  return (
    <>
      <main>
        <center>
          <h5>
            <em>Filter and see candidate</em>
          </h5>
        </center>
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
            Department
          </label>
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={handleDepartment}
          >
            <option value="allDept">All Dept</option>
            <option value="BCA">BCA</option>
            <option value="BBA">BBA</option>
            <option value="BCOM">B.COM</option>
          </select>
        </div>
      </main>

      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {filter === "No"
                  ? display.map(m => {
                      if (m.fees == fees) {
                        return <h5>{m.name}</h5>;
                      }
                    })
                  : display.map(m => {
                      if (m.fees === fees && m.department === department) {
                        return <h5>{m.name}</h5>;
                      }
                    })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashBoaard;
