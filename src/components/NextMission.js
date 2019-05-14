import React from 'react';
import "../styles/NextMission.css";
import Countdown from 'react-countdown-now';


export default class App extends React.Component{

    constructor(props){
        super(props)

        this.state={
            nextLaunch: [],
            missionName: "Unknown",
            description: "",
            buttonClicked: false,
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
            let missionName = data.mission_name;
            let launch = data.launch_date_unix;
            let description = data.details;
            this.setState(()=>({
                nextLaunch: [launch],
                missionName: missionName,
                description: description,

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
        return(
            <div className="next_mission">
                <h1 className="next_mission__title">{this.state.missionName}</h1>
                <span className="next_mission__launch">Launch:</span>
                <span className="next_mission__countdown">{<Countdown date={launch} />}</span>
                <button className="next_mission__button button" onClick={this.handleDescription}>{!this.state.buttonClicked ? "Learn more about this mission" : "Close details"}</button>
                <div className="next_mission__description">
                    {this.state.buttonClicked ? <p className="next_mission__p">{this.state.description}</p> : <p className="next_mission__p--hidden">{this.state.description}</p>}
                </div>
            </div>
        )}
}
