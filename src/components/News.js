import React from "react";
import { CircleSpinner } from "react-spinners-kit";
import Fade from "react-reveal/Fade";
import "../styles/News.css";

export default class App extends React.Component{

    constructor(props){
        super(props)

        this.state={
            news: {},
            news2: {},
            article1: "",
            article2: "",
            details1: "",
            details2: "",
            loading: true
        }
    }

    componentWillMount(){
        fetch('https://api.spacexdata.com/v3/history/16')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const news = data

            this.setState(()=>({
                news: news,
                details1: news.details.substring(0, 200) + "...",
                article1: news.links.article
            }));

            fetch('https://api.spacexdata.com/v3/history/18')
                .then((response) => {
                    return response.json();
                })
                .then((data2) => {
                    const news2 = data2

                    this.setState(()=>({
                        news2: news2,
                        details2: news2.details.substring(0, 200) + "...",
                        article2: news2.links.article,
                        loading: false,
                    }));
            });
        });

    }

    render(){
        const newsOne = <Fade left>
                            <article className="news_box">
                                <a className="news_box_link_image" target="_blank" rel="noopener noreferrer" href={this.state.article1}><img className="news_image" src="https://mk0spaceflightnoa02a.kinstacdn.com/wp-content/uploads/2017/03/WVWS_SES-10-9474.jpg" alt="falcon9 rocket launch" /></a>
                                <h3 className="news_box_title">{this.state.news.title}</h3>
                                <p className="news_box_details">{this.state.details1}</p>
                                <a target="_blank" rel="noopener noreferrer" href={this.state.article1}><button type="button" className="button news_box_button">Go to article</button></a>
                            </article>
                        </Fade>

        const newsTwo = <Fade right>
                            <article className="news_box">
                                <a className="news_box_link_image" target="_blank" rel="noopener noreferrer" href={this.state.article2}><img className="news_image" src="https://mk0spaceflightnoa02a.kinstacdn.com/wp-content/uploads/2018/02/40126461411_a6e49a61f2_k.jpg" alt="falcon heavy rocket launch" /></a>
                                <h3 className="news_box_title">{this.state.news2.title}</h3>
                                <p className="news_box_details">{this.state.details2}</p>
                                <a target="_blank" rel="noopener noreferrer" href={this.state.article2}><button type="button" className="button news_box_button">Go to article</button></a>
                            </article>
                        </Fade>
        

        return(
            <div className="news_section">
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
                    <div className="news">
                        {newsOne}
                        {newsTwo}
                    </div>
                }
            </div>
        )}
}