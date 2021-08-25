import '../stylesheets/pledge.css';
import Select from 'react-select';
import { useState } from 'react';

function Pledge() {
  const [crypto, setCrypto] = useState('');
  const [amount, setAmount] = useState(0.00);
  const [convertedCrypto, setConvertedCrypto] = useState('');

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

  const handleSelection = selectedOption => {
    setCrypto(selectedOption.value);
  }

  const updateAmount = (amount) => {
    setAmount(amount);
    setConvertedCrypto(`~ $${amount * 48923}`);
  }

  return (
    <div className='Pledge'>
      <p className='text-select'>Select Your Crypto</p>
      <Select className='dropdown' options={crypto_coins} onChange={handleSelection}></Select>
      <p className='text-donate'>Enter Donation Amount</p>
      <input className='input' type='number' step='0.001' value={amount} onChange={(e) => updateAmount(e.target.value)}></input>
      {crypto}
      <br></br>
      {convertedCrypto}
    </div>
  );
}

export default Pledge;
