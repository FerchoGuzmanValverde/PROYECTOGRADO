/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'

const logout = () => {
    useEffect(()=>{
        localStorage.removeItem("user");
    },[])
    return (
      <div>login</div>
    )
}

export default logout
