import axios from 'axios';
import { GET_TRAILS, ADD_TRAIL, DELETE_TRAIL, GET_ERRORS } from './types';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

// GET TRAILS
export const getTrails = () => (dispatch, getState) => {
    axios.get('/api/trails/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_TRAILS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};

// ADD TRAIL
export const addTrail = (trail) => (dispatch, getState) => {
    axios
        .post('/api/trails/', trail, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ trailAdded: "Trail Added"}));
            dispatch({
                type: ADD_TRAIL,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors
            (err.response.data, err.response.status)));
};

// DELETE TRAIL
export const deleteTrail = (id) => (dispatch, getState) => {
    axios.delete(`/api/trails/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ trailDeleted: "Trail Deleted"}));
            dispatch({
                type: DELETE_TRAIL,
                payload: id
            });
        })
        .catch(err => console.log(err));
};


