import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
   useEffect(() => {
       axios.get('http://localhost:5001/success', )
        .then(response => response.json())
	    .then(data => console.log(data))
   	    .catch(err => console.error(err));
    }, [])

    return(
        <div class="w-75 m-auto">
            <div class="mt-12">
             <h1>Login Succesfully!</h1>
             <img class="w-50 m-auto mt-6" src="https://i.ibb.co/4WGyPHP/baby.gif" />

             <Link to="/" type="submit" class="px-12 m-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white no-underline hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Back to Home</Link>
            </div>
        </div>
    );
};

export default Success;