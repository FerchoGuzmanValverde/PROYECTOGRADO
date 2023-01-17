import React from 'react'

function autenticarUser() {
    //PARA SIMULAR USERS
    //Para almacenar en local Storage/
    //localStorage.setItem(key, JSON.stringify(value));
    //Para eliminar de local storage
    //localStorage.removeItem(key);
    //Para leer de local strage
    const user = localStorage.getItem('user')
    return user
}

export default autenticarUser