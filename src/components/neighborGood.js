import React from 'react'
import axios from 'axios'
import { Link, Route, Switch } from 'react-router-dom'
import Map from './map'
import Home from './Home/Home'
import ComplaintInfo from './complaintInfo'
import Feed from './Feed'
import './complaintMarker.css'
import Key from './key'



class NeighborGood extends React.Component {
    constructor() {
        super();
        this.state = {
            userSelects: '',
            SelectedComplaint: null
        }
    }


    handleComplaint = (complaint) => {
        this.setState({
            SelectedComplaint: complaint
        })
    }

    handleMap = () => {
        const { SelectedComplaint } = this.state
        return (
            <div id="mapPage">
                <div id='map-title'><h1>NeighborGood's Complaint Map</h1></div>
                <div id='map-container'><Map onComplaintClick={this.handleComplaint} /></div>
                <div id='complaint'>{SelectedComplaint ? <strong>{ComplaintInfo(SelectedComplaint)}</strong> : <strong id='complaintinfo'> Choose a complaint </strong>}</div>
            </div>
        )
    }

    handleHome = () => {
        return (
            <Home />
        )
    }

    handleFeed = () => {
        return (

            <Feed />
        )
    }



    render() {
        const { SelectedComplaint } = this.state
        return (
            <div >
                <Switch>
                    <Route exact path='/NeighborGood' render={this.handleHome} />
                    <Route path='/NeighborGood/map' render={this.handleMap} />
                    <Route path='/NeighborGood/feed' render={this.handleFeed} />
                </Switch>
            </div>
        )
    }
}


export default NeighborGood