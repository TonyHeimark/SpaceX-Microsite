import React from 'react';
import "../styles/FutureMissions.css";
import Spinner from "./Spinner.js";

export default class App extends React.Component{

    constructor(props){
        super(props)

        this.state={
            past: [],
            details: "",
            loading: true
        }

        this.handleViewDetails = this.handleViewDetails.bind(this) 
    }

    componentWillMount(){
        fetch('https://api.spacexdata.com/v3/launches/past')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const past = data;

            this.setState(()=>({
                past: past,
                loading: false,
            }));

            console.log(past);
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

    render(){
        
        const jsx = this.state.past.map((launch) => {

            const launchTime = new Date(launch.launch_date_unix*1000);
            const launchDate = launchTime.toString().substring(0,33);

            return (
                <div key={launch.mission_name}>
                    <div>
                        <h3>{launch.mission_name}</h3>
                        <p>{launchDate}</p>
                        <button onClick={this.handleViewDetails}>{this.state.details === launch.mission_name ? "Hide Details" : "View Details"}</button>
                        {launch.links.video_link ? <button><a target="_blank" href={launch.links.video_link}>Watch Video</a></button> : undefined}
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
                {this.state.loading ? <Spinner /> : jsx}
            </div>
        )}
}