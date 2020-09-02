import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
    static propTypes = {
        errors: PropTypes.object,
        message: PropTypes.object
    };

    componentDidUpdate(prevProps) {
        const { errors, alert, message } = this.props;
        
        if(errors !== prevProps.errors) {
            if(errors.msg.name) {
                alert.error(`Name: ${errors.msg.name.join()}`);
            }
            if(errors.msg.difficulty) {
                alert.error(`Difficulty: ${errors.msg.difficulty.join()}`);
            }
            if(errors.msg.length) {
                alert.error(`Length: ${errors.msg.length.join()}`);
            }
            if(errors.msg.elevation_change) {
                alert.error(`Elevation Gain: ${errors.msg.elevation_change.join()}`);
            }
            if(errors.msg.non_field_errors) {
                alert.error(errors.msg.non_field_errors.join());
            }
            if(errors.msg.username) {
                alert.info(errors.msg.username.join());
            }
        }

        if(message !== prevProps.message) {
            if(message.trailAdded) alert.success(message.trailAdded);
            if(message.trailDeleted) alert.success(message.trailDeleted);
            if(message.passwordNotMatch) alert.error(message.passwordNotMatch);
            if(message.emptyFieldError) alert.error(message.emptyFieldError);
        }

    }

    render() {
        return (
            <Fragment />
        )
    }
}

const mapStateToProps = state => ({
    errors: state.errorsReducer,
    message: state.messagesReducer
});



export default connect(mapStateToProps)(withAlert()(Alerts));
