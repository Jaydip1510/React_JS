import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Googlecomponent() {
    // const responseMessage = (response) => {
    //     console.log(response);
    // };
    // const errorMessage = (error) => {
    //     console.log(error);
    // };
    const [user,setUserData] = useState({});
    const [profile,setProfile] = useState([]);

    const checkLogin = useGoogleLogin({
      onSuccess:(codeResponse) => {
        console.log(codeResponse.scope);
        setUserData(codeResponse)},
        onError:(error) => console.log('Login Failed:',error)
    });

    useEffect(
      () => {
          if (user) {
              axios
                  .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                      headers: {
                          Authorization: `Bearer ${user.access_token}`,
                          Accept: 'application/json'
                      }
                  })
                  .then((res) => {
                      setProfile(res.data);
                  })
                  .catch((err) => console.log(err));
          }
      },
      [ user ]
  );
  const logOut = () => {
    googleLogout();
    setUserData(null);
    setProfile(null);
};


  return (
    <div>
         {profile ? (
          <div>
              <h4>Profile Details</h4>
              Name : {profile.name}<br/>
              Email : {profile.email}<br/>
              Profile Image : <img src={profile.picture} />
              <button onClick={logOut}>Log out</button>
          </div>
         )
         :
         (
           <button onClick={() =>checkLogin()}>Signin with Google</button>
         )

         }
    </div>
  )
}

export default Googlecomponent
