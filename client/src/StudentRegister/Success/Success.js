import axios from 'axios';
import React, { useEffect } from 'react';

const Success = () => {

//    const [session, setSession] = useState('');
   
   useEffect(() =>{
       axios.get('http://localhost:5001/success', )
      //fetch('')
       .then(response => response.json())
	   .then(data => console.log(data))
   	   .catch(err => console.error(err));
   }, [])



    return (
        <div class="w-75 m-auto">
            <h1>Login Succesfully!</h1>
            <img class="w-50 m-auto" src="https://i.ibb.co/4WGyPHP/baby.gif" />
        </div>
    );
};

export default Success;