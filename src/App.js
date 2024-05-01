import logo from './logo.svg';
import './App.css';
// import React from 'react';
// import Home from './components/Home'
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import { StripeProvider } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import PaypalPasareladepago from './components/passareladepago/PaypalPasareladepago';
// import Visa from './components/passareladepago/Visa';
// import Mastercard from './components/passareladepago/Mastercard';
// import { useState } from 'react';
// import InicioUserTrue from './components/sesionInitiated/InicioUserTrue';
// import LoginDeUsuario from './components/Inicio/LoginDeUsuario';
// import { Elements } from '@stripe/react-stripe-js';


// function App() {
//  const [userTrue, setUserTrue] = useState(false)
//   const [newUser, setNewUser] = useState({gender: "", name: "", date: "", password: null, disponibility: true})
 
//   const stripePromise = loadStripe('pk_live_51OuldNRpZUGsGSRXG1WYiUch3DFMCLENXXWdL9eIM8Myle6IY7Zlhf7FRjPmv0TrXFt7wuESXM09CsxZUyBkVLFj00K3foNV1M');


//   return (
//     <StripeProvider stripe={stripePromise}>
//     <Router>
//     <React.Fragment> 
//       <div  className="App">
// <Home  newUser={newUser} setNewUser={setNewUser}/>
//       </div>
      
// <Routes>

//   <Route path="/paypalurl" element={<PaypalPasareladepago />} />
 
//   <Route path="/visaurl"  element={<Visa />}/>
//   {/* <Route path="/home" element={<Home />} newUser={newUser} setNewUser={setNewUser}  /> */}
//   <Route path="/masterdcard"  element={<Mastercard />} />

// <Route  path='/sesionInitiated' element={<InicioUserTrue />} />

// <Route path='/logIn' element={<LoginDeUsuario />} />

// </Routes>

//     </React.Fragment>
//     </Router>
//     </StripeProvider>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StripeProvider } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Home from './components/Home';
import PaypalPasareladepago from './components/passareladepago/PaypalPasareladepago';
import Visa from './components/passareladepago/Visa';
import Mastercard from './components/passareladepago/Mastercard';
import InicioUserTrue from './components/sesionInitiated/InicioUserTrue';
import LoginDeUsuario from './components/Inicio/LoginDeUsuario';
import { useState, useEffect } from 'react';



function App() {
  const [userTrue, setUserTrue] = useState(false);
  const [newUser, setNewUser] = useState({ gender: "", name: "", date: "", password: null, disponibility: true });
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    const fetchStripe = async () => {
      const stripeInstance = await loadStripe('pk_live_51OuldNRpZUGsGSRXG1WYiUch3DFMCLENXXWdL9eIM8Myle6IY7Zlhf7FRjPmv0TrXFt7wuESXM09CsxZUyBkVLFj00K3foNV1M');
      setStripe(stripeInstance);
    };

    fetchStripe();
  }, []);

  return (
    <StripeProvider stripe={stripe}>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paypalurl" element={<PaypalPasareladepago />} />
          <Route path="/visaurl" element={<Visa />} />
          <Route path="/masterdcard" element={<Mastercard />} />
          <Route path="/sesionInitiated" element={<InicioUserTrue />} />
          <Route path="/logIn" element={<LoginDeUsuario />} />
        </Routes>
      </div>
    </Router>
  </StripeProvider>
    );
}

export default App;
