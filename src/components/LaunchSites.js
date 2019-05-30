import React from "react";
import { CircleSpinner } from "react-spinners-kit";
import Fade from "react-reveal/Fade";
import "../styles/LaunchSites.css";

export default class App extends React.Component{

    constructor(props){
        super(props)

        this.state={
            site: [],
            loading: true,
            iframeLoading: true,
        }

        this.handleIframeSpinner = this.handleIframeSpinner.bind(this);
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
        });

    }

    handleIframeSpinner() {
        this.setState(() =>({
            iframeLoading: false
        }));
    }

    render(){
        
        const jsx = this.state.site.map((site) => {

            return (
                <Fade bottom key={site.id}>
                    <div className="launch_site_container">

                        <div className="launch_site_box">
                            <h3 className="launch_site_box__title">{site.site_name_long}</h3>
                            <div className="launch_site_box__inner">
                                <p><span>Location:</span>{site.location.region}</p>
                                <p><span>Status:</span>{site.status}</p>
                                <p><span>Launches:</span>{site.attempted_launches}</p>
                            </div>
                            <div className="launch_site_box__details">
                                <span>Details</span>
                                <p>{site.details}</p>
                            </div>
                            <a target="_blank" rel="noopener noreferrer" href={site.wikipedia}><button type="button" className="button launch_site_box__button">Read more on Wikipedia</button></a>
                        </div>
                        
                        {this.state.iframeLoading 
                        ?
                            <div className="loading_subSpinner">
                                <CircleSpinner
                                    size={40}
                                    color="#ffffff"
                                    loading={this.state.iframeLoading}
                                /> 
                            </div>   
                        :   
                            undefined
                    }

                    <iframe className="launch_site__map"
                            title={site.location.name}
                            src={`https://maps.google.com/maps?q=${site.location.latitude}%2C%20${site.location.longitude}&t=k&z=9&ie=UTF8&iwloc=&output=embed`}
                            onLoad={this.handleIframeSpinner}
                            frameBorder="0"
                            scrolling="no"
                            >
                    </iframe>
                        
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
