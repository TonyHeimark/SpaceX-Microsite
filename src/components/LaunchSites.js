import React from "react";
import { CircleSpinner } from "react-spinners-kit";

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
                <div key={site.id}>

                    <div>
                        <h3>{site.location.name}</h3>
                        <span>Location: {site.location.region}</span>
                        <span>Status: {site.status}</span>
                        <span>Launches: {site.attempted_launches}</span>
                        <span>Details:</span>
                        <p>{site.details}</p>
                        <button><a target="_blank" rel="noopener noreferrer" href={site.wikipedia}>Read more on Wikipedia</a></button>
                    </div>
                    
                    <iframe 
                        title={site.location.name}
                        width="600"
                        height="500"
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
