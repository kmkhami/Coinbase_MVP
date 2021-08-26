import '../stylesheets/pledge.css';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
// import { FcCurrencyExchange } from "react-icons/fc";
import { FaArrowCircleRight } from 'react-icons/fa'
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
    <div clasName="pledge_box">
      <div className='Pledge'>
        <p className='text-select'>Select Your Crypto</p>
        <Select className='dropdown' options={crypto_coins} onChange={updateCrypto}></Select>
        <p className='text-donate'>Enter Donation Amount</p>
        <div className='exchange'>
          <input className='input' type='text' step='0.001' value={amount} onChange={(e) => setAmount(e.target.value)}></input>
          <span className="currency">{crypto}</span>
          {/* <FcCurrencyExchange className="exchange-icon"></FcCurrencyExchange> */}
          <br></br>
          <span className="converted_amount">{convertedCrypto + " USD"}</span> 
        </div>
        <div className="nav_box"> 
          <Link to="/request"> 
            <button className="nav_button">Next <FaArrowCircleRight className="right_arrow"/></button>
          </Link> 
        </div> 
      </div>
    </div>
  );
}

export default Pledge;
