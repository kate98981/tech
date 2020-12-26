import React, {Component} from 'react';
import Contact from "../../Componets/Contact";
import Pencil from "../Username/pencil.png";

class Doc1 extends Component {
    render() {
        return (
            <div className={"center center1"}>
                <h1>Documents\Document #1</h1>
                <div className={"block1 block11"}>
                    <div className={"min-block"}>
                        Document information
                        <a href={"/Documents/1/Update"}><img src={Pencil} id={"pen"}/></a>
                    </div>
                    <p>Document Title: Example Event #1</p>
                    <p>Day: C-1</p>
                    <p>Document Content: Bla Bla Bla</p>
                    <p>For: Experts</p>
                </div>
                <div className={"block2"}>
                    <p>
                        <a href={"/Documents"}>
                            <div className={"but but-r but-del"}>Delete</div>
                        </a>
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

export default Doc1;