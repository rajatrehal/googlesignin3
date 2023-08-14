import React from 'react';
import {GoogleLogout} from 'react-google-login';
const clientId ='357575757552-ml0i27jpb2u7db6pfacd3751v3dn9o6l.apps.googleusercontent.com';
function Logout() {
   const onSuccess =() =>{
    alert('log out Successfully');
   } ;
  return (
    <div>
      <GoogleLogout
    clientId={clientId}
    buttonText='logout'
    onLogoutSuccess={onSuccess}
    ></GoogleLogout>
    </div>
  );
}

export default Logout;
