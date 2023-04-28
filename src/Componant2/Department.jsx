import React, { useEffect, useState } from "react";
import axios from "axios";

const Department = () => {
  let [data, setData] = useState([]);
  let fetchData = async () => {
    let data = await axios.get("http://localhost:5000/student");
    setData(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Department</th>
          </tr>
        </thead>
        <tbody>
          {data.map(m => {
            return (
              <tr>
                <th scope="row">{m.id}</th>
                <td>{m.name}</td>
                <td>{m.department}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Department;
