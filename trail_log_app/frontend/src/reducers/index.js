import { combineReducers } from 'redux';
import trails from './trails';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
    trailsReducer: trails,
    errorsReducer: errors,
    messagesReducer: messages,
    authReducer: auth
});

