import React from 'react'
import Login from './Login'
import Logout from './Logout'
import {useEffect} from 'react';
import { gapi } from "gapi-script";
const clientId ='357575757552-ml0i27jpb2u7db6pfacd3751v3dn9o6l.apps.googleusercontent.com';
function App() {
  const initializeGapi = () => {
    gapi.client.init({
      clientId: clientId,
      scope: "email",
    });
  };
  
  useEffect(() =>{
    // load and init google api scripts
    gapi.load("client:auth2", initializeGapi);
  })
  return (
    <div>
      <Login/>
      <Logout/>
    </div>
  )
}

export default App
