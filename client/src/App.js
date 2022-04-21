import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from './Login/Login';
import StudentRegister from './StudentRegister/StudentRegister';
import Success from './Success/Success';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
          <Route path="/" element={<StudentRegister />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/success" element={<Success />}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;