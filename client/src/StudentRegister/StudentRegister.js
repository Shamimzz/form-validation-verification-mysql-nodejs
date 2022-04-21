import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import './StudentRegister.css';
const axios = require('axios');

const StudentRegister = () => {
    const navigate = useNavigate();
    
    const { register, handleSubmit } = useForm({ mode: "onBlur" });
    
    const onSubmit = data => {
        axios.post('http://localhost:5001/insertInfo', data)
        
        alert('Succesfully Registered!');
        navigate('/login');
     };


    // const onChange = () => {
    //     const password = document.querySelector("input[name=password]");
    //     const confirmPass = document.querySelector("input[name=confirmPass]");
    //     if (confirmPass.value === password.value) {
    //       if (!password.value.match(/^.\w{5,}$/)) {
    //         alert("Invalid Password");
    //         password.focus();
    //         return false;
    //       } else {
    //         confirmPass.setCustomValidity("");
    //       }
    //     }
    //     if (!confirmPass.value == password.value) {
    //       alert("Password must be the same");
    //       confirmPass.focus();
    //       return false;
    //     }
    //   }

    return (
  <div class='register-Main p-8'>
    <div class="Container">

    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 class='title'>Student Information</h2>
      <label for="lastName">Full Name *</label>
        <input placeholder="Mr Alex" {...register("name", { required: "Name is required" })}/>
        <label for="country" id="department">Gender</label>
        <select {...register("gender")}>
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">other</option>
        </select>
        <label id="date" for="start">Date Of Birth</label>
        <input type="date" {...register("birthday", { required: true })}/>
        <label for="country" id="department">Department & Batch</label>
        <select name="department" {...register("department", { required: true })}>
          <option value="" selected>Department</option>
          <option value="CSE">CSE</option>
          <option value="EEE">EEE</option>
          <option value="BBA">BBA</option>
        </select>
        <select {...register("batch", { required: true })}>
          <option value="" selected>Batch</option>
          <option value="1st">1st</option>
          <option value="2nd">2nd</option>
          <option value="3rd">3rd</option>
          <option value="4rd">4rd</option>
          <option value="5rd">5rd</option>
          <option value="6rd">6rd</option>
          <option value="7rd">7rd</option>
          <option value="8rd">8rd</option>
          <option value="9rd">9rd</option>
          <option value="10rd">10rd</option>
          <option value="11rd">11rd</option>
          <option value="12rd">12rd</option>
          <option value="13rd">13rd</option>
        </select>
        <label for="country" id="university">University Name</label>
        <select
          id="University"
          {...register("university")}
          placeholder="University"
        >
          <option value="" selected>University</option>
          <option value="Pundra University">Pundra University Of Science</option>
          & technology
          <option value="North South University">North South University</option>
          <option value="Independent University">Independent University, Bangladesh</option>
          <option value="East West University">East West University</option>
          <option value="University of Asia">University of Asia Pacific</option>
        </select>
        <label for="email">E-mail address *</label>
        <input
          {...register("email", { required: true })}
          pattern="\w.*+\@+[a-z]+\.[a-z]{2,7}"
          placeholder="alexRoline@net.com"
        //   oninput="this.setCustomValidity('')"
        />
        <label for="phoneNumber">Phone Number</label> 
        <input
          defaultValue="+880"
          id="phoneNumber"
          {...register("phone",{ required: true })}
          title="9 characters length"
        />  

        <label
          >password :
          <input
           {...register("password", {required: "Password is required"})}
            placeholder="Password"
            id="password"
            type="password"
            // onBlur={onChange}
            oninput="this.setCustomValidity('')"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}"
            title="Must have at least 6 characters, including UPPER/lowercase letters and number"   
          />
        </label>
        <br />
        <label
          >confirm password:
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPass")}
            id="confirmPass"
            // onBlur={onChange}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{5,}"
            title="Must be the same password as above"
            required
          />
          <span id="message"></span>
        </label> <br/>
        
       <div class="">
       <button type="submit" class="px-12 m-2 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Register</button>

        <Link to="/login" type="submit" class="px-12 m-2 py-1 text-sm no-underline text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Sign In</Link>
       </div>
      </form>

    </div>
   </div>
    );
};

export default StudentRegister;