import '../stylesheets/pledge.css';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { FcCurrencyExchange } from "react-icons/fc";
import axios from 'axios';

function Pledge() {
  const [crypto, setCrypto] = useState('');
  const [amount, setAmount] = useState(0.00);
  const [convertedCrypto, setConvertedCrypto] = useState('');
  const [currentRate, setCurrentRate] = useState(0);

  const crypto_coins = [
    { value: 'BTC', label: 'Bitcoin (BTC)'},
    { value: 'ETH', label: 'Ethereum (ETH)'},
    { value: 'XLM', label: 'Stellar (XLM)'},
    { value: 'BNB', label: 'Binance Coin (BNB)'},
    { value: 'ADA', label: 'Cardano (ADA)'},
    { value: 'DOGE', label: 'Dogecoin (DOGE)'},
    { value: 'XRP', label: 'XRP (XRP)'},
    { value: 'LTC', label: 'Litecoin (LTC)'},
    { value: 'BCH', label: 'Bitcoin Cash (BCH)'},
    { value: 'LINK', label: 'Chainlink (LINK)'},
  ]
  const updateCrypto = selectedCrypto => {
    setCrypto(selectedCrypto.value);
    axios.get(`https://api.coinbase.com/v2/exchange-rates?currency=${selectedCrypto.value}`)
      .then(res => {
        const body = res.data;
        setCurrentRate(parseFloat(body.data.rates.USD));
      })
      .catch( e => {
        console.log(e);
      });
  }

  useEffect(() => {
    setConvertedCrypto(`~$${amount * currentRate}`)
  }, [currentRate, amount])

  return (
    <div className='Pledge'>
      <p className='text-select'>Select Your Crypto</p>
      <Select className='dropdown' options={crypto_coins} onChange={updateCrypto}></Select>
      <p className='text-donate'>Enter Donation Amount</p>
      <div className='exchange'>
        <input className='input' type='number' step='0.001' value={amount} onChange={(e) => setAmount(e.target.value)}></input>
        {crypto}
        <FcCurrencyExchange className="exchange-icon"></FcCurrencyExchange>
        <br></br>
        {convertedCrypto}
        {'USD'}
      </div>
    </div>
  );
}

export default Pledge;
