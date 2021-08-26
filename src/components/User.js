import '../stylesheets/user.css';
import QueryString from "query-string";
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { set } from '../store/slices/userSlice'; 

function User(props) {
    const params = QueryString.parse(props.location.search);
    const [isLoading, setLoading] = useState(true);
    const [isDispatchLoading, setDispatchLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        const updateUser = async (payload) => {
            dispatch(set(payload));
            setDispatchLoading(false); 
        }

        if(isDispatchLoading) {
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
                updateUser(response.data);
                setLoading(false);
            })
            .catch(function (error) {
                setLoading(false);
            });
        }
    }, [isDispatchLoading, params.code, dispatch]);

    if(isLoading) {
        return (
            <div className='App'>
            <p> Loading </p>
            </div>
        )
    }

    return (
        <div className="User">
            <Redirect to="/next" />
        </div>
    );
}

export default User;
