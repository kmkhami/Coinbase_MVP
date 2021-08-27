import '../stylesheets/donate.css';
import QueryString from "query-string";
import {useEffect, useState } from 'react';
import axios from 'axios';

function Donate(props) {
  const [email, setEmail] = useState('');
  const [id, setID] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(true); 

  const getCookie = (cName) => {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    let res; 
    cArr.forEach(val => {
      if (val.indexOf(name) === 0) {
        console.log(val.substring(name.length)); 
        res = val.substring(name.length);
      }
    })
    return res; 
  }

  useEffect(() => {
    const token = getCookie('access_token'); 
    console.log(token); 
    setAccessToken(token);

    const headersObj = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }

    axios.get(`https://api.coinbase.com/v2/accounts/BTC`, {
      headers: headersObj
    })
    .then(res => {
      setID(res.data.data.id); 
      axios.post(`https://api.coinbase.com/v2/accounts/${res.data.data.id}/addresses`, {}, {
       headers: headersObj
      })
      .then( res => {
        console.log(res.data); 
        setAddress(res.data.data.address);
        setIsLoading(false); 
      })
    }); 
  }, [])

  const sendRequest = (event) => {
    event.preventDefault();
    const params = QueryString.parse(props.location.search);
    const requestParams = {
      to: email,
      amount: params.amount,
      currency: params.currency,
      type: 'request'
    }
    const headersObj = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
      'type': 'request'
    }
    axios.post(`https://api.coinbase.com/v2/accounts/${id}/transactions`,
      requestParams, {
      headers: headersObj
    })
      .then(res => {
        console.log(res);
        alert('Successful request');
      })
      .catch( e => {
        console.log(e);
      });
  }

  if(isLoading) {
    return (
      <div>
        <span>Loading...</span>
      </div>
    )
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
