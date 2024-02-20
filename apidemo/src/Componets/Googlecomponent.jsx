import { GoogleLogin } from '@react-oauth/google';
import React from 'react'

function Googlecomponent() {
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
  return (
    <div>
          <h3>Google authentication</h3>
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  )
}

export default Googlecomponent
