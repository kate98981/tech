import React, {Component} from 'react';
import Contact from "../../Componets/Contact";
import Pencil from "../Username/pencil.png";

class Ev1 extends Component {
    render() {
        return (
            <div className={"center center1"}>
                <h1>Events\Example Event #1</h1>
                <table>
                    <tr className={"tr-username"}>
                        <td><Contact/></td>
                        <td>
                            <div className={"block1"}>
                                <div className={"min-block"}>
                                    Event information
                                    <a href={"/Events/1/Information"}><img src={Pencil} id={"pen"}/></a>
                                </div>
                                Event Title: Example Event #1
                            </div>
                            <div className={"block1"}>
                                <div className={"min-block"}>
                                    Dates information
                                    <a href={"/Events/1/Dates"}><img src={Pencil} id={"pen"}/></a>
                                </div>
                                Start Date: 01/12/2020<br/>
                                C1 Date: 03/12/2020<br/>
                                C+1 Date: 05/12/2020<br/>
                                Finish Date: 06/12/2020<br/>
                                About: <br/>
                            </div>
                            <div className={"block1"}>
                                <div className={"min-block"}>
                                    Participants
                                    <a href={"/Events/1/#"}><img src={Pencil} id={"pen"}/></a>
                                </div>
                                Participants: 12
                                <a id={"pin"}>
                                    <div id={"div-pin"}>Assign</div>
                                </a>
                            </div>
                            <div className={"block1 block0"}>
                                <a href={"/Events"}>
                                    <div className={"but"}>Cancel</div>
                                </a>
                                <a href={"/Events"}>
                                    <div className={"but but-r"}>Ok</div>
                                </a>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Ev1;