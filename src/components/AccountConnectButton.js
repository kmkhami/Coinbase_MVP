import '../stylesheets/account_connect_button.css';

function AccountConnect() {
  const coinbaseRedirect = () => {
    window.location.href = "https://www.coinbase.com/oauth/authorize?response_type=code&client_id=" + 
                            process.env.REACT_APP_CLIENT_ID + "&redirect_uri=" + process.env.REACT_APP_REDIRECT_URI + 
                            "&scope=wallet:user:read,wallet:accounts:read"
  }

  return (
    <div className="AccountConnect">
      <button className="accountConnect" onClick={coinbaseRedirect}> Connect </button>
    </div>
  );
}

export default AccountConnect;
