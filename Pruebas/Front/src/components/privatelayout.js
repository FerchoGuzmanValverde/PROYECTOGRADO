/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState,  } from 'react'
import { Outlet, Navigate, useLocation } from "react-router-dom";
import autenticarUser from '../Assets/autenticarUser';


const privatelayout = () => {
    //const [user,setUser] = useState();
    let user=autenticarUser()
    const location = useLocation();

  /*   useEffect(()=>{
       //setUser(autenticarUser())
       const user=autenticarUser()
       console.log('user private',user)
    },[]) */
    
    return (
        user ? <Outlet />
        : <Navigate to="/" state={{ from: location }} replace />
    );
}



export default privatelayout