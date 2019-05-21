import React from 'react';
import "../styles/NextMission.css";
import { CircleSpinner } from "react-spinners-kit";
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
            let streamLink = data.links.video_link;
            let missionName = data.mission_name;
            let launch = data.launch_date_unix;
            let description = data.details;
            this.setState(()=>({
                nextLaunch: [launch],
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
            <div className="next_mission">
                <h1 className="next_mission__title">{this.state.missionName}</h1>
                {launch ? <span className="next_mission__launch">Launch:</span> : undefined}
                <span className="next_mission__countdown">{launch ? <Countdown date={launch} /> : "Recently Launched"}</span>
                {this.state.link ? <a href={this.state.link} target="_blank" rel="noopener noreferrer"><button className="next_mission__button button">Watch Stream</button></a> : undefined}
                <button className="next_mission__button button" onClick={this.handleDescription}>{!this.state.buttonClicked ? "Learn more about this mission" : "Close details"}</button>
                <div className="next_mission__description">
                    {this.state.buttonClicked ? <p className="next_mission__p">{this.state.description}</p> : <p className="next_mission__p--hidden">{this.state.description}</p>}
                </div>
            </div>
        )

        return (
            <div>
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
                    jsx
                }
            </div>
        )
    }
}
