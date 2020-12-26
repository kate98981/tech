import React, {Component} from 'react';

class Information extends Component {
    render() {
        return (
            <div className={"center center1 info"}>
                <h1>Example Event #1\Event Information</h1>
                <div className={"p1 "}>
                    <p id={"p1"}>Event Title:<input type={"text"} value={"Example Event #1"}/></p>
                </div><br/><br/>
                <a href={"/Events/1"}>
                    <div className={"but but-r"}>Cancel</div>
                </a>
                <a href={"/Events/1"}>
                    <div className={"but "}>Ok</div>
                </a>
            </div>
        );
    }
}

export default Information;