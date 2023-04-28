import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Studentlist = () => {
  let [state, setState] = useState(0);
  let [data, setData] = useState([]);
  let fetchData = async () => {
    let data = await axios.get("http://localhost:5000/student");
    setData(data.data);
  };
  useEffect(() => {
    fetchData();
  }, [state]);

  let deleteData = d => {
    axios.delete(`http://localhost:5000/student/${d}`);
    setState(state + 1);
    console.log(state);
    // window.location.assign("/student");
  };

  let update = id => {
    localStorage.setItem("id", id);
  };

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Phone No</th>
            <th scope="col">Fees Paid</th>
            <th scope="col">Gender</th>
            <th scope="col">Department</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        {data.map(m => {
          console.log(m);
          return (
            <tbody>
              <tr>
                <th scope="row">{m.id}</th>
                <td>{m.email}</td>
                <td>{m.name}</td>
                <td>{m.phoneno}</td>
                <td>{m.fees}</td>
                <td>{m.gender}</td>
                <td>{m.department}</td>
                <td>
                  <Link to="/update">
                    <button
                      class="btn btn-success"
                      onClick={() => {
                        update(m.id);
                      }}
                    >
                      Update
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    class="btn btn-danger"
                    onClick={() => {
                      deleteData(m.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Studentlist;
