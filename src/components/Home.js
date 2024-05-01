import React from 'react'
import Barnav from './barnavs/Barnav'
import LoginDeUsuario from './Inicio/LoginDeUsuario'
import { useState } from 'react'

function Home({setNewUser, newUser}) {
  return (
    <div className='home-container'>
        <React.Fragment>
            {/* <Barnav /> */}
            
            <LoginDeUsuario newUser={newUser} setNewUser={setNewUser} />
        </React.Fragment>
    </div>
  )
}

export default Home