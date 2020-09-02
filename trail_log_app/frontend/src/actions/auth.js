import axios from 'axios';
import { returnErrors } from './messages';
import { USER_LOADING, USER_LOADED, AUTH_ERROR,
         LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, 
         REGISTER_SUCCESS, REGISTER_FAILURE } 
    from './types';

// LOAD USER -- GET REQUEST
export const loadUser = () => (dispatch, getState) => {
    //User loading
    dispatch({ type: USER_LOADING });

    //use helper function for token config
    const config = tokenConfig(getState);

    axios.get('/api/auth/user', config)
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        }).catch(err => {
            dispatch(returnErrors(err.response.data,
                err.response.status));
            dispatch({
                type: AUTH_ERROR
            });    
        });
}

// LOGIN USER -- POST REQUEST
export const loginUser = (username, password) => dispatch => {
    // Headers 
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Stringify Request Body 
    const request_body = JSON.stringify({ username, password });

    axios.post('/api/auth/login', request_body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
            dispatch(returnErrors(err.response.data,
                err.response.status));
            dispatch({
                type: LOGIN_FAILURE
            });    
        });
}

// REGISTER USER 
export const registerUser = ({username, password, email}) => dispatch => {
    // Headers 
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Stringify Request Body 
    const request_body = JSON.stringify({ username, email, password});

    axios.post('/api/auth/register', request_body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
            dispatch(returnErrors(err.response.data,
                err.response.status));
            dispatch({
                type: REGISTER_FAILURE
            });    
        });
}

// LOGOUT USER -- POST REQUEST
export const logoutUser = () => (dispatch, getState) => {
    //use helper function for token config
    const config = tokenConfig(getState);

    // pass in null as body
    axios.post('/api/auth/logout', null, config)
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS
            });
        }).catch(err => {
            dispatch(returnErrors(err.response.data,
                err.response.status));
        });
}

// Setup config with token - helper function
export const tokenConfig = getState => {
    //get token from state
    const token = getState().authReducer.token;

    // Headers 
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // If token, add to headers config
    if(token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config;
}