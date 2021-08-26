import '../stylesheets/user.css';
import QueryString from "query-string";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';

function User(props) {
    const params = QueryString.parse(props.location.search);
    const [isLoading, setLoading] = useState(true);
    const [cookie, setCookie] = useCookies([]);

    useEffect(() => {

        const updateUserCookie = (data) => {
            console.log('setting cookie');
            if(data.access_token != null) {
                setCookie('acccess_token', data.access_token, { path: '/' });
                setCookie('token_type', data.token_type, { path: '/' });
                setCookie('expires_in', data.expires_in, { path: '/' });
                setCookie('refresh_token', data.refresh_token, { path: '/' });
                setCookie('scope', data.scope, { path: '/' });
            }
            else {
                setCookie('acccess_token', 'logged out', { path: '/' });
            }
        }

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
            updateUserCookie(response.data);
            setLoading(false);
        })
        .catch(function (error) {
            setLoading(false);
        });
    }, [params.code, setCookie]);

    if(isLoading) {
        return (
            <div className='App'>
            <p> Loading </p>
            </div>
        )
    }

    return (
        <div className="User">
            <Redirect to="/pledge" />
        </div>
    );
}

export default User;
