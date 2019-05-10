import React from 'react';
import "../styles/Missions.css";
import { CircleSpinner } from "react-spinners-kit";

export default class App extends React.Component{

    constructor(props){
        super(props)

        this.state={
            upcoming: [],
            details: "",
            loading: true
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
                loading: false
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

    render(){
        
        const jsx = this.state.upcoming.map((launch) => {

            const launchName = launch.mission_name;
            const launchTime = new Date(launch.launch_date_unix*1000);
            const launchDate = launchTime.toString().substring(0,33);
            const launchVideo = launch.links.video_link;
            const launchRocket = launch.rocket.rocket_name;
            const launchSite = launch.launch_site.site_name_long;

            return (
                <div key={launchName}>
                    <div>
                        <h3>{launchName}</h3>
                        <p>{launchDate}</p>
                        <button onClick={this.handleViewDetails}>{this.state.details === launchName ? "Hide Details" : "View Details"}</button>
                        {launchVideo ? <button><a target="_blank" rel="noopener noreferrer" href={launchVideo}>Watch Stream</a></button> : undefined}
                    </div>
                    <div className={this.state.details === launchName ? "visible" : "hidden"}>
                        <span>Details:</span>
                        <p>{launch.details ? launch.details : "No details to show at this time."}</p>
                        <span>Rocket:</span>
                        <p>{launchRocket ? launchRocket : "No machine to show at this time."}</p>
                        <span>Launch site:</span>
                        <p>{launchSite ? launchSite : "No launch site to show at this time."}</p>
                        <span>Payload:</span>
                        {
                            launchRocket
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
                {this.state.loading 
                ?
                    <CircleSpinner
                    size={30}
                    color="#0a0a0a"
                    loading={this.state.loading}
                /> 
                :
                    jsx
                }
            </div>
        )}
}