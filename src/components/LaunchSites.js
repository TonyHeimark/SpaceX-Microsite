import React from "react";
import { CircleSpinner } from "react-spinners-kit";
import "../styles/LaunchSites.css";

export default class App extends React.Component{

    constructor(props){
        super(props)

        this.state={
            site: [],
            loading: true
        }
    }

    componentWillMount(){
        fetch('https://api.spacexdata.com/v3/launchpads')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const site = data

            this.setState(()=>({
                site: site,
                loading: false,
            }));

            console.log(site);
        });

    }

    render(){
        
        const jsx = this.state.site.map((site) => {

            return (
                <div key={site.id} className="launch_site_container">

                    <div className="launch_site_box">
                        <h3 className="launch_site_box__title">{site.location.name}</h3>
                        <span>Location:</span>
                        <p>{site.location.region}</p>
                        <span>Status:</span>
                        <p>{site.status}</p>
                        <span>Launches:</span>
                        <p>{site.attempted_launches}</p>
                        <span>Details:</span>
                        <p>{site.details}</p>
                        <a target="_blank" rel="noopener noreferrer" href={site.wikipedia}><button className="button">Read more on Wikipedia</button></a>
                    </div>
                    
                    <iframe className="launch_site__map"
                        title={site.location.name}
                        src={`https://maps.google.com/maps?q=${site.location.latitude}%2C%20${site.location.longitude}&t=k&z=9&ie=UTF8&iwloc=&output=embed`}
                        frameBorder="0"
                        scrolling="no"
                    >
                    </iframe>
                       
                </div>
            )
        })

        return(
            <div>
                {this.state.loading 
                ?
                    <CircleSpinner
                    size={30}
                    color="#ffffff"
                    loading={this.state.loading}
                /> 
                :
                    jsx
                }
            </div>
        )}
}
