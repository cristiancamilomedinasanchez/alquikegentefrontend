import React from 'react';

function CancelPayPal() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Cancelación de PayPal</h2>
      <p style={styles.message}>Tu pago con PayPal ha sido cancelado.</p>
    </div>
  );
}

export default CancelPayPal;

const styles = {
  container: {
    textAlign: 'center',
    margin: '50px auto',
    padding: '20px',
    border: '2px solid #ccc',
    borderRadius: '5px',
    maxWidth: '400px',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  message: {
    fontSize: '16px',
    color: '#666',
  },
};