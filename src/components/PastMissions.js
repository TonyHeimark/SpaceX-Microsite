import React from 'react';
import "../styles/Missions.css";
import "../styles/PreviousMissions.css";
import Fade from "react-reveal/Fade";
import { CircleSpinner } from "react-spinners-kit";

export default class App extends React.Component{

    constructor(props){
        super(props)

        this.state={
            past: [],
            details: "",
            loading: true,
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
                past: past.reverse(),
                loading: false,
            }));
        });

    }

    handleViewDetails(e) {
        let element = e.target.parentElement.children[0].innerHTML
        if (this.state.details !== element){
            this.setState(() => ({
                details: element,
            }));
        } else {
            this.setState(() => ({
                details: "",
            }));
        }
    }

    render(props){
        
        const jsx = this.state.past.map((launch) => {

            const launchBadge = launch.links.mission_patch_small;
            const launchName = launch.mission_name;
            const launchTime = new Date(launch.launch_date_unix*1000);
            const launchDate = launchTime.toString().substring(0,16);
            const launchVideo = launch.links.video_link;
            const launchRocket = launch.rocket.rocket_name;
            const launchSite = launch.launch_site.site_name_long;

            const missionDetails = 
                            <div className="launch_details_box">
                                <div>
                                    <span className="launch_details_box__subtitle" >Details:</span>
                                    <p className="launch_details_box__content" >{launch.details ? launch.details : "No details to show at this time."}</p>
                                    <span className="launch_details_box__subtitle" >Rocket:</span>
                                    <p className="launch_details_box__content" >{launchRocket ? launchRocket : "No machine to show at this time."}</p>
                                    <span className="launch_details_box__subtitle" >Launch site:</span>
                                    <p className="launch_details_box__content" >{launchSite ? launchSite : "No launch site to show at this time."}</p>
                                </div>
                                <div>
                                    <span className="launch_details_box__subtitle" >Payload:</span>
                                    {
                                        launchRocket
                                    ?
                                        <div>
                                            {launch.rocket.second_stage.payloads.map((payload) => {
                                                return (
                                                    <ul key={payload.payload_id}>
                                                        <li className="launch_details_box__payload_item">Customer: {payload.customers ? payload.customers : "No info at this time"}</li>
                                                        <li className="launch_details_box__payload_item">Type: {payload.payload_type ? payload.payload_type : "No info at this time"}</li>
                                                        <li className="launch_details_box__payload_item">Manufacturer: {payload.manufacturer ? payload.manufacturer : "No info at this time"}</li>
                                                        <li className="launch_details_box__payload_item">Nationality: {payload.nationality ? payload.nationality : "No info at this time"}</li>
                                                        <li className="launch_details_box__payload_item">Orbit: {payload.orbit ? payload.orbit : "No info at this time"}</li>
                                                    </ul>
                                                )
                                            })}
                                        </div>
                                    :
                                        <p>No payloads to show at this time.</p>
                                    }
                                </div>
                                <div>
                                    {
                                        launch.ships.length >= 1
                                    ?
                                        <div>
                                        <span className="launch_details_box__subtitle" >Ships:</span>
                                        <ul>
                                            {launch.ships.map((ship) => {
                                                return (
                                                        <li key={ship} className="launch_details_box__payload_item">{ship ? ship : "No info at this time"}</li>
                                                )
                                            })}
                                            </ul>
                                        </div>
                                    :
                                        undefined
                                    }
                                </div>
                            </div>

            return (
                <Fade bottom key={launchName}>
                    <div key={launchName} className="launch_box_container">
                        <div className={launchBadge ? "launch_box launch_box--3column" : "launch_box"}>
                            <h3 className="launch_title">{launchName}</h3>
                            <p className="launch_date">{launchDate}</p>
                            <button type="button" className="button launch_button" onClick={this.handleViewDetails}>{this.state.details === launchName ? "Hide Details" : "View Details"}</button>
                            {launchVideo ? <a target="_blank" rel="noopener noreferrer" href={launchVideo}><button type="button" className="button launch_button">Watch Stream</button></a> : undefined}
                            {launchBadge ? <img src={launchBadge} alt="Mission patch babge unique to this mission" className="launch_badge" /> : undefined}

                            <Fade when={this.state.details === launchName}>
                            {
                                this.state.details === launchName
                            ?
                                missionDetails
                            :
                                undefined
                            }
                            </Fade>

                        </div>
                    </div>
                </Fade>
            )
        })

        return(
            <section role="main">
                {this.state.loading 
                ?
                    <div className="loading_spinner">
                        <CircleSpinner
                            size={40}
                            color="#ffffff"
                            loading={this.state.loading}
                        /> 
                    </div>
                :
                    jsx
                }
            </section>
        )}
}