import React, {Component} from 'react';
import Pencil from "../Username/pencil.png";

class Home extends Component {
    render() {
        return (
            <div className={"center center1"}>
                <h1>Home</h1>
                <div className={"div-glav"}>
                    <div className={"block1 block-home"}>
                        <div className={"min-block min-block-home"}>
                            Users
                        </div>
                        <p><a href={"/Users"}>Browse</a></p>
                        <p><a href={"/UserCreate"}>Create</a></p>
                        <p><a href={"#"}>Assign</a></p>
                    </div>
                    <div className={"block1 block-home"}>
                        <div className={"min-block min-block-home"}>
                            Events
                        </div>
                        <p><a href={"/Events"}>Browse</a></p>
                        <p><a href={"/Events/Add"}>Create</a></p>
                        <p><a href={"#"}>Assign</a></p>
                    </div>
                    <div className={"block1 block-home"}>
                        <div className={"min-block min-block-home"}>
                            Documents
                        </div>
                        <p><a href={"/Documents"}>Browse</a></p>
                        <p><a href={"/Documents/NewDocument"}>Create</a></p>
                        <p><a href={"#"}>Download</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;