//Why we are using useMemo

// import React, { useState } from "react";

// const App = () => {
//   let [state, setState] = useState(0);
//   let [task, setTask] = useState(false);

//   let Increment = () => {
//     setState(state + 1);
//   };

//   let Value = state => {
//     for (let i = 0; i < 1000000000; i++) {}
//     return state;
//   };
//   console.log(Value);

// let let mainCount = useMemo(() => {   Value(state);
//     return state;},[]);

// let mainCount = () => {

// };

//   let btn = () => {
//     setTask(!task);
//   };

//   return (
//     <>
//       <h1>{mainCount()}</h1>
//       <button
//         onClick={() => {
//           Increment();
//         }}
//       >
//         Increment
//       </button>
//       <button onClick={btn}>{task ? "Click" : "No Click"}</button>
//     </>
//   );
// };

// export default App;

//For ToDo-------------------------------------------------------------------

// import React from "react";
// import { useRef } from "react";
// import { useState } from "react";

// const App = () => {
//   let inpref = useRef();
//   let [state, setState] = useState([]);
//   var Some = "";

//   let { name } = state;

//   let handleChange = e => {
//     let { value } = e.target;
//     Some = e.target.value;
//   };

//   let post = e => {
//     e.preventDefault();
//     setState([...state, Some]);
//     inpref.current.value = "";
//   };

//   return (
//     <div>
//       <form action="">
//         <input
//           type="text"
//           name="name"
//           value={name}
//           onChange={handleChange}
//           ref={inpref}
//         />
//         <button onClick={post}>Submit</button>
//         {state.map(m => {
//           return <h1>{m}</h1>;
//         })}
//       </form>
//     </div>
//   );
// };

// export default App;

//For Color Change---------------------------------------------------------------------

// import React from "react";

// const app = () => {
//   let Change = e => {
//     let btn = e.target;
//     console.log(btn.innerText);
//     let body = document.getElementsByTagName("body");
//     body[0].style.background = `${btn.innerText}`;
//   };

//   return (
//     <div>
//       <button onClick={Change}>red</button>
//       <button onClick={Change}>blue</button>
//       <button onClick={Change}>green</button>
//       <button onClick={Change}>yellow</button>
//       <button onClick={Change}>orange</button>
//       <button onClick={Change}>black</button>
//       <button onClick={Change}>gray</button>
//       <button onClick={Change}>pink</button>
//       <button onClick={Change}>brown</button>
//       <button onClick={Change}>crimson</button>
//     </div>
//   );
// };
// export default app;

import React from "react";
import DashBoaard from "./Componant2/DashBoaard";
import Department from "./Componant2/Department";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Students from "./Componant2/Students";
import MainBar from "./Componant2/MainBar";
import Update from "./Componant2/Update";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Router>
        <MainBar />
        <ToastContainer theme="dark" />
        <Routes>
          <Route path="/" element={<DashBoaard />} />
          <Route path="/department" element={<Department />} />
          <Route path="/student" element={<Students />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
