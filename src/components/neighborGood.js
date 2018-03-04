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
            <div id="MapPage">
                <h1 class="title">NeighborGood</h1>
                <Map onComplaintClick={this.handleComplaint} />
                {SelectedComplaint ? ComplaintInfo(SelectedComplaint) : <strong id='complaintinfo'> Choose a complaint </strong>}
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
        return (
            <div>
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