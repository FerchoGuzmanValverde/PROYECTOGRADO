/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'

const login = () => {
    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify({"user": "fernando"}));
    },[])
    return (
      <div>login</div>
    )
}

export default login
