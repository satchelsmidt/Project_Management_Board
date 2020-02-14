import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
//to connect to store, import connect, which is a function that wraps our component in a higher order function
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        const { projects } = this.props;
        console.log(this.props)
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

//to map our state (from the store) to our props, we use this function
const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

//connect must take in this function, so that it knows which state to map to props
//after this, we have state data in our dashboard, which we want to pass to child components (project list, etc.)
export default connect(mapStateToProps)(Dashboard)

//dashboard is where all the info is displayed, so we grab all our data from it. 
//Then we pass the data as props to projlist, projsummary