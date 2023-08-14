import React, { useState } from 'react'
import {GoogleLogin} from 'react-google-login';
import { refreshTokenSetup } from './utils/refreshTokenSetup';
import { GoogleLogout } from 'react-google-login';

const clientId ='357575757552-ml0i27jpb2u7db6pfacd3751v3dn9o6l.apps.googleusercontent.com';
function Login() {
    const [flag , setFlag] = useState(false);
    const onSuccess =(res)=>{
        console.log('loginSuccess',res.profileObj);
        refreshTokenSetup(res);
        alert("successfully Login");
    };
    const Failure =(res)=>{
        console.log('log in failed',res);
        alert('failed to Log in');
    };
    const onSuccesslogout =() =>{
        setFlag(false);
        alert('log out Successfully');
       } ;
       const onSignIn =()=>{
               setFlag(true);
       }
  return (
    <div>{
        flag === true 
        ?
        <div>
            <h1>Welcome to page</h1>
            <GoogleLogout
    clientId={clientId}
    buttonText='logout'
    onLogoutSuccess={onSuccesslogout}
    ></GoogleLogout>
        </div>:
        <GoogleLogin
        clientId={clientId}
        buttonText='Login'
        onSuccess={onSuccess}
        onFailure={Failure}
        cookiePolicy='http://localhost:3000/'
      //   cookiePolicy={'single_host_origin'}
        isSignedIn={onSignIn}
        />
        }
   
    </div>
  )
}

export default Login;
