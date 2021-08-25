import '../stylesheets/user.css';
import QueryString from "query-string";
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function User(props) {
    const params = QueryString.parse(props.location.search);
    const [isLoading, setLoading] = useState(true); 
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        const requestParams = {
            code: params.code,
            grant_type: 'authorization_code',
            client_id: process.env.REACT_APP_CLIENT_ID, 
            client_secret: process.env.REACT_APP_CLIENT_SECRET, 
            redirect_uri: process.env.REACT_APP_REDIRECT_URI
        }

        axios.post('https://api.coinbase.com/oauth/token',
            requestParams
        )
        .then(response => {
            setAccessToken(response.data);
            setLoading(false);
        })
        .catch(function (error) {
            setAccessToken("");
            setLoading(false);
        }); 
    }, [isLoading, params.code]);

    if(isLoading) {
        return <div className='App'>
          <p> Loading </p>
        </div>
    }

    return (
        <div className="User">
            {accessToken.access_token}
        </div>
    );
}

export default User;
