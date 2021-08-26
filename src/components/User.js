import '../stylesheets/user.css';
import QueryString from "query-string";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie'

function User(props) {
    const params = QueryString.parse(props.location.search);
    const [isLoading, setLoading] = useState(true);
    const [cookie, setCookie] = useCookies([]); 

    useEffect(() => {

        const updateUserCookie = (authToken) => {
            console.log('setting cookie'); 
            setCookie('AuthToken', 'test', { path: '/' });
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
            updateUserCookie('logged out'); 
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
            {/* <Redirect to="/next" /> */}
        </div>
    );
}

export default User;
