import React from "react";
import { CircleSpinner } from "react-spinners-kit";
import "../styles/News.css";

export default class App extends React.Component{

    constructor(props){
        super(props)

        this.state={
            news: undefined,
            news2: undefined,
            loading: true
        }
    }

    componentWillMount(){
        fetch('https://api.spacexdata.com/v3/history/1,2')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const news = data

            this.setState(()=>({
                news: news
            }));

            console.log(news);

            fetch('https://api.spacexdata.com/v3/history/2')
                .then((response) => {
                    return response.json();
                })
                .then((data2) => {
                    const news2 = data2

                    this.setState(()=>({
                        news2: news2,
                        loading: false,
                    }));

                    console.log(news2);
            });
        });

    }

    render(){
        
        const jsx = <div>

                    </div>
        

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