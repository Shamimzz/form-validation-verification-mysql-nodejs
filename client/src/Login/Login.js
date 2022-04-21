import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import './Login.css';

const Login = () => {
     const navigate = useNavigate();
    const [message, setMessage] = useState('');

    const formSchema = Yup.object().shape({
        email: Yup.string()
          .required('email is mendatory')
          .min(3, 'email must be at @ char long'),
          password: Yup.string()
          .required('Password is mendatory')
          .oneOf([Yup.ref('password')], 'Passwords does not match'),
      })
      const formOptions = { resolver: yupResolver(formSchema) }
      const { register, handleSubmit, formState } = useForm(formOptions);
      const { errors } = formState



      
      const onSubmit = data =>{
        // axios.post('http://localhost:5001/login', data)
        // alert('Succesfully Registered!');
        // .then((res) => console.log(res.data))
        // .catch((err) => console.log(err));
        // console.log(data);
        // console.log(JSON.stringify(data, null, 4));
        // console.log("getting password from database", data);


        const post = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };
        
        fetch("http://localhost:5001/login", post)
          .then((data) => {
            if (!data.ok) {
              throw Error(data.status);
            }
            return data.json();
          })
          .then((data) => {
            console.log(data);
            if(data.message){
              setMessage(data.message);
            }else{
              navigate('/success')
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }


      
    return (
        <div class='login-Main pt-5'>
        <div class="container login loginContain pt-5 mt-5">
           
    <div className="margin">
    <h1 class='text-center p-6'>Login Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Email</label>
          <input
            placeholder="email"
            name="email"
            type="email"
            {...register('email')}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            placeholder= "Password"
            name="password"
            type="password"
            {...register('password')}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
          
        <p class="p-3 text-danger">{message}</p>

        <div className="mt-3">
          {/* <button type="submit" className="btn btn-primary">Log In</button> */}
          <button type="submit" class="px-12 m-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Log In</button>
          <Link to="/" type="submit" class="px-12 m-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white no-underline hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Register</Link>
        </div>
      </form>
    </div>
    </div>
        </div>
    );
};

export default Login;