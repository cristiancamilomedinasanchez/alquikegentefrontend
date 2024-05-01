import React from 'react'
import logo from '../../asses/logo.png'
import { useState } from 'react'
import paypalImg from '../../asses/sinfondo/paypallogo-removebg-preview.png'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import cardImg from '../../asses/sinfondo/tarjetadecredito-removebg-preview.png'
import apiKeyPayPal from './keys';

import { loadStripe } from '@stripe/stripe-js'

import { useNavigate } from 'react-router-dom'; // Importa useNavigat

function LoginDeUsuario({setNewUser, newUser}) {
  const [initialVisibility, setInitialVisibility] = useState(true)
const [visibilityOne, setVisibilityOne] = useState(false)
const [visibilityTwo, setVisibilityTwo] = useState(false)
const [visibilityThree, setVisibilityThree] = useState(false)

const [gender, setGender] = useState("")
const [name, setName] = useState("")
const [date, setDate] = useState("")
const [interes, setInteres] = useState("")
const [password, setPassword] = useState()
const [challangeInputName, setChallangeInputName] = useState("")
const [challangeInputNumber, setChallangeInputNumber] = useState("")
const [challangePassword, setChallangePassword] = useState("")

const navigate = useNavigate()

// funciones captura de datos

// formulario 1 genero


const captureGender = (option) => {

  setGender(option)
  setNewUser({gender: gender})
}


// formulario 2 nombres

const onChangeName = (e) => {
setChallangeInputName(e.target.value)
}

const onChangeNumber = (e) => {
  setChallangeInputNumber(e.target.value)
  }

  const onChangePassword = (e) => {
    setChallangePassword(e.target.value)
  }

  // actualizando el nuevo usuario

  const submitNameAndNumber = () => {
    setName(challangeInputName);
    setDate(challangeInputNumber);
    setPassword(challangePassword);
  
    setNewUser(prevUser => ({
      ...prevUser,
      name: challangeInputName,
      date: challangeInputNumber,
      password: challangePassword
    }));
  };



// funciones cambio visiblidad

const functionChangeVisibilityOne = (e) => {
  e.preventDefault()
 setInitialVisibility(false)
  setVisibilityOne(true)
  setVisibilityTwo(false)
  setVisibilityThree(false)
}


const functionChangeVisibilityTwo = (e) => {
  e.preventDefault()
  setVisibilityOne(false)
  setVisibilityTwo(true)
  setVisibilityThree(false)
}

const functionChangeVisibilityThree= (e) => {
  e.preventDefault()
  setVisibilityOne(false)
  setVisibilityTwo(false)
  setVisibilityThree(true)
}

// navegacion

const navigateToPaypalPage = () => {
  navigate("/paypalurl")
}



// diferentes formularios

// FOMRULARIO DE GENERO
const formularyOneFunction = () => {
  
  return(
    <div>
      <div>
        <h1>Gender: </h1>
      </div>
      <div  className='container-btn-incription'>
      <button className='btn-incription1' onClick={(e) => {
  captureGender("Men");
  functionChangeVisibilityTwo(e);
}}>
  Men
</button>
<button className='btn-incription2' onClick={(e) => {
  captureGender("Woman");
  functionChangeVisibilityTwo(e);
}}>
  Woman
</button>
</div>
<div>
 
</div>
    </div>
  )
}

// FORMULARIO DE DATOS PERSONALES NOMBRE Y EDAD

const formularyTwoFunction = () => {
  return(
    <div>
      <div className='container-title-information'>
        
      <h1>Speaking Most Of Your</h1>
      </div>
<div className='conainer-inputs-information'>
  <input className='input1' placeholder='Escribe tu nombre' onChange={onChangeName}/>
  <input className='input2' placeholder='Escribe tu edad' onChange={onChangeNumber} type='number' />
  <input className='input2' placeholder='password' onChange={onChangePassword} type='number' />
</div>
<div  className='container-btn-incription'>
<button className='btn-incription1' onClick={(e) => {
  submitNameAndNumber();
   functionChangeVisibilityThree(e);
}}>Send</button>
</div>
    </div>
  )
}
const formularyThreeFunction = () => {
  return(
    <div>
    

<div className='container-pay-methods'>
<div className='title-pay-method'>
  <h1>Select Pay Method</h1>
</div>

<div className='container-pay-methood'>
  <img src={paypalImg} />
  <button onClick={navigateToPaypalPage}>Select</button>
</div>

<div className='container-pay-methood'>
  <img src={cardImg} />
  <button>Select</button>
</div>




</div>
    </div>
  )
}


// logica de pago frontend




// coneccion con el backend 






  return (
    <form className='inscription-form'>

      
 <div className='logo-container'>
        <img src={logo} className='logo' />
      </div>
      
{initialVisibility && <div>
  <h1>Welcome</h1>

      <div className='container-btn-incription'>
        <button className='btn-incription1' onClick={(e) =>functionChangeVisibilityOne(e)}>Sign Up</button>
        <button className='btn-incription2'>Log In</button>
      </div>
      </div>
      }
      {
        visibilityOne && formularyOneFunction()
      }
       {
        visibilityTwo && formularyTwoFunction()
      }
       {
        visibilityThree && formularyThreeFunction()
      }
    </form>
  )
}

export default LoginDeUsuario