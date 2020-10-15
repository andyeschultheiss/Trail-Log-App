import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTrail } from '../../actions/trails';

export class Form extends Component {
    state = {
        name: "",
        difficulty: "",
        length: "",
        elevation_change: ""
    }

    static propTypes = {
        addTrail: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { name, difficulty, length, elevation_change } = this.state;
        const trail = { name, difficulty, length, elevation_change };
        this.props.addTrail(trail);
    };

    render() {
        const { name, difficulty, length, elevation_change } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Trail</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                         className="form-control"
                         type="text"
                         name="name"
                         onChange={this.onChange}
                         value={name}/>
                    </div>
                    <div className="form-group">
                        <label>Difficulty</label>
                        <br></br>
                        <input type="radio" value="E" id="easy"
                        onChange={this.onChange} name="difficulty" /> <label for="easy">&nbsp;Easy</label>
                        <br></br>
                        <input type="radio" value="M" id="moderate"
                        onChange={this.onChange} name="difficulty" /> <label for="moderate">&nbsp;Moderate</label>
                        <br></br>
                        <input type="radio" value="D" id="difficult"
                        onChange={this.onChange} name="difficulty" /> <label for="difficult">&nbsp;Difficult</label>
                    </div>
                    <div className="form-group">
                        <label>Length (miles)</label>
                        <input
                         className="form-control"
                         type="text"
                         name="length"
                         onChange={this.onChange}
                         value={length}/>
                    </div>
                    <div className="form-group">
                        <label>Elevation Gain (feet)</label>
                        <input
                         className="form-control"
                         type="text"
                         name="elevation_change"
                         onChange={this.onChange}
                         value={elevation_change}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addTrail })(Form);
