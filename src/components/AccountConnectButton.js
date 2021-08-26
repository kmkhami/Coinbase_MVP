import '../stylesheets/account_connect_button.css';
import { FaArrowCircleRight } from 'react-icons/fa'

function AccountConnect() {
  const coinbaseRedirect = () => {
    window.location.href = "https://www.coinbase.com/oauth/authorize?response_type=code&client_id=" + 
                            process.env.REACT_APP_CLIENT_ID + "&redirect_uri=" + process.env.REACT_APP_REDIRECT_URI + 
                            "&scope=wallet:user:read,wallet:accounts:read&layout=signup"
  }

  return (
    <div className="AccountConnect">
      <button className="connect_button" onClick={coinbaseRedirect}> Sign in with coinbase <FaArrowCircleRight className="right_arrow"/> </button>
    </div>
  );
}

export default AccountConnect;
