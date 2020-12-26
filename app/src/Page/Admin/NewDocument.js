import React, {Component} from 'react';
import FotoNo from "./image_file_application_2895.png";
import Contact from "../../Componets/Contact";

class NewDocument extends Component {
    render() {
        return (
            <div className={"center center1"}>
                <h1>Documents\New Document</h1>
                <div className={"form1 newdoc"}>
                    <p>Document Title <input type={"text"}/></p>
                    <p>Day <input type={"text"}/></p>
                    <p>Document Content <textarea id={"textarea1"}></textarea></p>
                    <p>For: <input type={"radio"}/> Experts
                        <input type={"radio"}/> Competitors</p>
                    <p>
                        <a href={"/Documents"}>
                            <div className={"but"}>Cancel</div>
                        </a>
                        <a href={"/Documents"}>
                            <div className={"but but-r"}>Ok</div>
                        </a>
                    </p>
                </div>
            </div>
        );
    }
}

export default NewDocument;