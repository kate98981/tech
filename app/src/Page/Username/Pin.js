import React, {Component} from 'react';
import "./log.css";
class Pin extends Component {
    render() {
        return (
            <div className={"center center1 pin"}>
                <h1>Username\PIN</h1>
                <p>Enter PIN <input type={"text"}/></p>
                <a href={"/Username"}>
                    <div className={"but but-r"}>Cancel</div>
                </a>
                <a href={"/Username"}>
                    <div className={"but "}>Ok</div>
                </a>
            </div>
        );
    }
}

export default Pin;