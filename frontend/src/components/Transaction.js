import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { processTransaction } from '../services/api';
import { TRANSACTION_UPDATE } from '../redux/actions';

const Transaction = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const transactionData = {
      amount,
      paymentMethod,
    };
    const response = await processTransaction(transactionData);
    dispatch({ type: TRANSACTION_UPDATE, payload: response });
  };

  return (
    <form id="transactionForm" onSubmit={handleSubmit}>
      <label>
        Amount:
        <input type="number" value={amount} onChange={handleAmountChange} />
      </label>
      <label>
        Payment Method:
        <select value={paymentMethod} onChange={handlePaymentMethodChange}>
          <option value="creditCard">Credit Card</option>
          <option value="crypto">Cryptocurrency</option>
          <option value="eTransfer">Electronic Transfer</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Transaction;