import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./StudentRegister/Login/Login";
import StudentRegister from "./StudentRegister/StudentRegister";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
          <Route path="/" element={<StudentRegister />} />
          {/* <Route path="/reg" element={<Reg />} /> */}
          <Route path="/login" element={<Login />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;