import React, {Component} from 'react';

class DocPin extends Component {
    render() {
        return (
            <div className={"center center1 info"}>
                <h1>Example Event #1\Document #2</h1>
                <p>Bla Bla Bla</p>
                <p>Enter PIN <input type={"text"}/></p>
                <a href={"/Events/ExEvents"}>
                    <div className={"but but-r"}>Cancel</div>
                </a>
                <a href={"/Events/ExEvents"}>
                    <div className={"but "}>Ok</div>
                </a>
            </div>
        );
    }
}

export default DocPin;