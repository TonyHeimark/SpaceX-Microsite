import React from 'react';
import "../styles/Home.css";
import moment from 'moment'
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
        const endDate = moment(launch);
        return(
            <div>
                <h1>Mission Name: {this.state.missionName}</h1>
                <p>Launches in: {<Countdown date={endDate} />}</p>
                <button onClick={this.handleDescription}>{!this.state.buttonClicked ? "Learn more about this mission" : "Close details"}</button>
                <div>
                    {this.state.buttonClicked ? <p>{this.state.description}</p> : undefined}
                </div>
            </div>
        )}
}
