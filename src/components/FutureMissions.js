import React from 'react';
import "../styles/FutureMissions.css";

export default class App extends React.Component{

    constructor(props){
        super(props)

        this.state={
            upcoming: [],
            details: ""
        }

        this.handleViewDetails = this.handleViewDetails.bind(this) 
    }

    componentWillMount(){
        fetch('https://api.spacexdata.com/v3/launches/upcoming')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const upcoming = data;

            this.setState(()=>({
                upcoming: upcoming,
            }));
        });
    }

    handleViewDetails(e) {
        let element = e.target.parentElement.children[0].innerHTML
        if (this.state.details !== element){
            this.setState(() => ({
                details: element
            }))
        } else {
            this.setState(() => ({
                details: ""
            }))
        }
    } 

    render(props){

        console.log(this.state.upcoming)
        
        const jsx = this.state.upcoming.map((launch) => {
            return (
                <div key={launch.mission_name}>
                    <div>
                        <h3>{launch.mission_name}</h3>
                        <p>{launch.launch_date_utc}</p>
                        <button onClick={this.handleViewDetails}>{this.state.details === launch.mission_name ? "Hide Details" : "View Details"}</button>
                        {launch.links.youtube_id ? <button href={launch.links.youtube_id}>View Stream</button> : undefined}
                    </div>
                    <div className={this.state.details === launch.mission_name ? "visible" : "hidden"}>
                        <span>Details:</span>
                        <p>{launch.details ? launch.details : "No details to show at this time."}</p>
                        <span>Rocket:</span>
                        <p>{launch.rocket.rocket_name ? launch.rocket.rocket_name : "No machine to show at this time."}</p>
                        <span>Launch site:</span>
                        <p>{launch.launch_site.site_name_long ? launch.launch_site.site_name_long : "No launch site to show at this time."}</p>
                        <span>Payload:</span>
                        {
                            launch.rocket.rocket_name
                            ?
                            <div>
                                {launch.rocket.second_stage.payloads.map((payload) => {
                                    return (
                                        <ul key={payload.payload_id}>
                                            <li>Customer: {payload.customers ? payload.customers : "No info at this time"}</li>
                                            <li>Type: {payload.payload_type ? payload.payload_type : "No info at this time"}</li>
                                            <li>Manufacturer: {payload.manufacturer ? payload.manufacturer : "No info at this time"}</li>
                                            <li>Nationality: {payload.nationality ? payload.nationality : "No info at this time"}</li>
                                            <li>Orbit: {payload.orbit ? payload.orbit : "No info at this time"}</li>
                                        </ul>
                                    )
                                })}
                            </div>
                            :
                            <p>No payloads to show at this time.</p>
                        }
                    </div>
                </div>
            )
        })

        return(
            <div>
                {jsx}
            </div>
        )}
}