import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTrails, deleteTrail } from '../../actions/trails';

export class Trails extends Component {
    static propTypes = {
        trails: PropTypes.array.isRequired,
        getTrails: PropTypes.func.isRequired,
        deleteTrail: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getTrails();
    }

    render() {
        return (
            <Fragment>
                <h2>Trails</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Difficulty</th>
                            <th>Length (mi)</th>
                            <th>Elevation Gain (ft)</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.trails.map(trail => (
                            <tr key={trail.id}>
                               <td>{trail.id}</td> 
                               <td><a href={trail.oregon_hikers_link}>{trail.name}</a></td> 
                               <td>{trail.difficulty}</td> 
                               <td>{trail.length}</td> 
                               <td>{trail.elevation_change}</td> 
                               <td>
                                   <button onClick={this.props.deleteTrail.bind(this, trail.id)}
                                    className="btn btn-danger btn-sm">{" "}Delete</button>
                               </td> 

                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    trails: state.trailsReducer.trails
});

export default connect(mapStateToProps, { getTrails, deleteTrail })(Trails);
