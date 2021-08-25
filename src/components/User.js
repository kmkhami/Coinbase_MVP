import '../stylesheets/user.css';
import QueryString from "query-string";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store/index';

function User(props) {
    const params = QueryString.parse(props.location.search);
    const [isLoading, setLoading] = useState(true);
    const [isDispatchLoading, setDispatchLoading] = useState(true);
    const [accessToken, setAccessToken] = useState(null);

    const json = useSelector((state) => state.coinbase);
    const dispatch = useDispatch();

    useEffect(() => {
        const updateJSON = async () => {
            await bindActionCreators(actionCreators, dispatch);
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
                setAccessToken(response.data);
                updateJSON(response.data);
                setLoading(false);
            })
            .catch(function (error) {
                setAccessToken("");
                setLoading(false);
            });
        }
    }, [isDispatchLoading, params.code, dispatch]);

    if(isLoading) {
        return <div className='App'>
          <p> Loading </p>
        </div>
    }

    return (
        <div className="User">
            {accessToken.access_token}
            {console.log(json)}
        </div>
    );
}

export default User;
