import React from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PaypalPasareladepago() {
    const [stateUser, setStateUser] = useState(false)

    const navigate = useNavigate()


    const functionSendUserToDataBase = () => {
        // post
    }

    
    // inicio de sesion

useEffect(() => {
functionSendUserToDataBase()
}, [stateUser])
    
    const stripe = useStripe();

    const handlePayWithPayPal = async () => {
      // Convertir el monto en dólares a centavos
      const amountInCents = 1000; // $10.00 USD en centavos
    
      // Procesa el pago con PayPal utilizando Stripe
      const { error } = await stripe.redirectToCheckout({
        mode: 'payment',
        lineItems: [{ price: 'price_1PBgkqRpZUGsGSRXKHFE8esQ', quantity: 1 }],
        successUrl: 'https://localhost:3000/sesionInitiated',
        cancelUrl: 'https://localhost:3000/cancel',
        payment_method_types: ['paypal'],
        lineItems: [{ price: amountInCents, quantity: 1, currency: 'usd' }], // Especifica el monto en centavos y la moneda
      });
    
      if (error) {
        console.error('Error al procesar el pago con PayPal:', error);
      }
    };
    


  return (
    <div className="payment-form">
      <h2>Pasarela de Pago PayPal</h2>
      <form action="/paypalurl" method="post" onSubmit={handlePayWithPayPal}>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="monto">Monto:</label>
        <input type="number" id="monto" name="monto" required />
        <button type="submit">Pagar con PayPal</button>
      </form>
    </div>
  );
}

export default PaypalPasareladepago