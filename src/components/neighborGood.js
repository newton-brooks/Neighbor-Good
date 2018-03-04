import React from 'react'
import axios from 'axios'
import { Link, Route, Switch } from 'react-router-dom'
import Map from './map'
import Home from './Home/Home'
import ComplaintInfo from './complaintInfo'



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
            <div id='titleCon'>
                <h1 id="title">311's Reported Complaints</h1>
                {SelectedComplaint ? ComplaintInfo(SelectedComplaint) : <strong id='compDes'> Choose a complaint </strong>}
                <Map onComplaintClick={this.handleComplaint} />
                <br />
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
            <div>
                </div>
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