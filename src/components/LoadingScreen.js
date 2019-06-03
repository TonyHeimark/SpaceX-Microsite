import React from "react";
import { MorphReplace } from 'react-svg-morph';
import "../styles/LoadingScreen.css";

class X extends React.Component {
    render() {
        return (
            <svg className="loading-svg" width="351" fill="#fff" height="432" viewBox="0 0 251 332" >
                <path d="M18,289.6c29.1-23.5,56.1-50.3,87.7-69.7c72.5-44.3,152.5-69,237.3-78.7c-37.8,12.8-76.8,22.9-113.2,38.9
                c-59.9,26.3-120.2,53.5-160.3,109.5C52.3,289.6,35.2,289.6,18,289.6z"/>
                <polygon points="81.2,226.3 104.9,211.6 72.4,182.2 36.7,182.2 30.4,182.2 "/>
                <polygon points="135.7,240.3 109,257 145.8,289.9 186,289.8 193.1,289.7 "/>
            </svg>
        );
    }
}

class Circle extends React.Component {
    render() {
        return (
            <svg className="loading-svg" width="351" fill="#fff" height="432" viewBox="0 0 251 332" >
                <circle cx="109.5" cy="240.5" r="81.5"/>
            </svg>
        );
    }
}

class LoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            morph: false
        };
    }

    componentDidMount() {
        this.setState({morph: !this.state.morph});
        setInterval(() =>{
            this.setState({morph: !this.state.morph});
        }, 500)
    }

    render() {
        return (
            <div className="loading_container">
                <MorphReplace width={100} height={100}>
                    {this.state.morph ? <X key="x" /> : <Circle key="circle" />}
                </MorphReplace>
            </div>
        );
    }
}

export default LoadingScreen;