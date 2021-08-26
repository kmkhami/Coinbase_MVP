import '../stylesheets/donate.css';
import {useEffect, useState } from 'react';
import axios from 'axios';

function Donate(props) {
  const [email, setEmail] = useState('');
  const [id, setID] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    const token = document.cookie
    .split('; ')
    .find(row => row.startsWith('access_token='))
    .split('=')[1];

    setAccessToken(token);
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }

    axios.get(`https://api.coinbase.com/v2/accounts/${props.crypto}`,
    headers
    )
    .then(res => {
      setID(res.data.data.id);
      axios.post(`https://api.coinbase.com/v2/accounts/${id}/addresses`, headers)
      .then( res => {
        setAddress(res.data.data.address);
      })
  }, [])

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
      'Authorization': `Bearer ${accessToken}`
    }
    axios.post(`https://api.coinbase.com/v2/accounts/${id}/transactions`,
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
      <img src={'https://www.bitcoinqrcodemaker.com/api/?style=bitcoin&address=' + address} alt='QR Code'/>
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
