import React from 'react';
import "../styles/NextMission.css";
import { CircleSpinner } from "react-spinners-kit";
import Zoom from "react-reveal/Zoom";
import Countdown from 'react-countdown-now';


export default class App extends React.Component{

    constructor(props){
        super(props)

        this.state={
            nextLaunch: [],
            missionName: "Unknown",
            description: "",
            link: undefined,
            buttonClicked: false,
            loading: true
        }

        this.handleDescription = this.handleDescription.bind(this)
    }

    componentWillMount(){
        fetch('https://api.spacexdata.com/v3/launches/next')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            let badge = data.links.mission_patch;
            let streamLink = data.links.video_link;
            let missionName = data.mission_name;
            let launch = data.launch_date_unix;
            let description = data.details;
            this.setState(()=>({
                nextLaunch: [launch],
                badge: badge,
                missionName: missionName,
                description: description,
                link: streamLink,
                loading: false,

            }))
        });
    }

    handleDescription() {
        if(this.state.buttonClicked === false){
            this.setState(() =>({
                buttonClicked: true,
            }));
        } else this.setState(() =>({
                buttonClicked: false,
        }));
    }


    render(){
        let nextLaunch = this.state.nextLaunch*1000;
        let launch = new Date(nextLaunch);
        if (Date.now() > nextLaunch){
            launch = undefined
        }

        const jsx = (
            <div className={this.state.badge ? "next_mission next_mission--grid" : "next_mission" }>
                <div className={this.state.badge ? "next_mission_container" : "next_mission_container next_mission_container--spaceTop"}>
                    <h1 className="next_mission__title">{this.state.missionName}</h1>
                    {launch ? <span className="next_mission__launch">Launch:</span> : undefined}
                    <span className="next_mission__countdown">{launch ? <Countdown date={launch} /> : "Recently Launched"}</span>
                    {this.state.link ? <a href={this.state.link} target="_blank" rel="noopener noreferrer"><button className="next_mission__button button">Watch Stream</button></a> : undefined}
                    <button className="next_mission__button button" onClick={this.handleDescription}>{!this.state.buttonClicked ? "Learn more about this mission" : "Close details"}</button>
                    <div className="next_mission__description">
                        <Zoom when={this.state.buttonClicked}>
                            {
                                this.state.buttonClicked
                            ?
                                <p className="next_mission__p">{this.state.description}</p>
                            :
                                <p className="next_mission__p--hidden">{this.state.description}</p>
                            }
                        </Zoom>
                    </div>
                </div>
                {
                this.state.badge
                ?
                    <div className="badge_container">
                        <img src={this.state.badge} alt="Mission patch badge" className="next_mission_badge" />
                    </div>
                :
                    undefined
                }
            </div>
        )

        return (
            <div className="next_mission_div">
                {this.state.loading 
                ?
                    <div className="loading_spinner loading_spinner--noMargin">
                        <CircleSpinner
                            size={40}
                            color="#ffffff"
                            loading={this.state.loading}
                        /> 
                    </div>
                :
                    <Zoom>
                        {jsx}
                    </Zoom>
                }
            </div>
        )
    }
}
