import '../stylesheets/donate.css';
import { useState } from 'react';
import axios from 'axios';

function Donate(props) {
  const [email, setEmail] = useState('');

  const sendRequest = (event) => {
    event.preventDefault();
    const requestParams = {
      type: 'request',
      to: email,
      amount: props.amount,
      currency: props.currency
    }
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${props.token}`
    }
    axios.post(`https://api.coinbase.com/v2/accounts/${props.account}/transactions`,
    requestParams,
    headers
    )
      .then(res => {
        console.log(res);
        alert('Successful request');
      })
      .catch( e => {
        console.log(e);
      });
  }

  return (
    <div className='Donate'>
      <p className='text-select'>Use the address below to donate <b>{props.amount} BTC</b> from your wallet</p>
      <img src='https://www.bitcoinqrcodemaker.com/api/?style=bitcoin&address=1M5m1DuGw4Wyq1Nf8sfoKRM6uA4oREzpCX' alt='QR Code'/>
      <p>Enter your email address below if you would like to make a coinbase request</p>
      <form onSubmit={sendRequest}>
        <label>Email Address: </label><br></br>
        <input type='text' id='email' onChange={(e) => setEmail(e.target.value)}></input>
        <br></br>
        <button type='submit'>Send Request</button>
      </form>
    </div>
  );
}

export default Donate;
