import React, {Component} from 'react';
import Pencil from "../Username/pencil.png";

class DocUpdate extends Component {
    render() {
        return (
            <div className={"center center1"}>
                <h1>Documents\Document #1 Update</h1>
                <div className={"form1 newdoc"}>
                    <p>Document Title <input type={"text"} value={"Example Event #1"}/></p>
                    <p>Day <input type={"text"} value={"C-1"}/></p>
                    <p>Document Content <textarea id={"textarea1"}>Bla Bla Bla</textarea></p>
                    <p>For: <input type={"radio"} checked={"on"}/> Experts
                        <input type={"radio"}/> Competitors</p>
                    <p>
                        <a href={"/Documents/1"}>
                            <div className={"but"}>Cancel</div>
                        </a>
                        <a href={"/Documents/1"}>
                            <div className={"but but-r"}>Ok</div>
                        </a>
                    </p>
                </div>
            </div>
        );
    }
}

export default DocUpdate;