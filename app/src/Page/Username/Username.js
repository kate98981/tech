import React, {Component} from 'react';
import Contact from "../../Componets/Contact";
import "./log.css";
import Pencil from "./pencil.png";
class Username extends Component {
    render() {
        return (
            <div className={"center center1"}>
                <h1>Username</h1>
                <table>
                    <tr className={"tr-username"}>
                        <td><Contact/></td>
                        <td>
                            <div className={"block1"}>
                                <div className={"min-block"}>
                                    Login information
                                    <a href={"/Username/Login"}><img src={Pencil} id={"pen"}/></a>
                                </div>
                                E-mail: <br/>
                                Password:
                            </div>
                            <div className={"block1"}>
                                <div className={"min-block"}>
                                    Profile information
                                    <a href={"/Username/Profile"}><img src={Pencil} id={"pen"}/></a>
                                </div>
                                First Name: <br/>
                                Last Name: <br/>
                                Country: <br/>
                                About: <br/>
                            </div>
                            <div className={"block1"}>
                                <div className={"min-block"}>
                                    Personal Identification Number
                                    <a href={"/Username/pin"}><img src={Pencil} id={"pen"}/></a>
                                </div>
                                    PIN:
                                    <a id={"pin"}><div id={"div-pin"}>Set PIN</div></a>
                            </div>
                            <div className={"block1 block0"}>
                                <a href={"/"}>
                                    <div className={"but"}>Cancel</div>
                                </a>
                                <a href={"/"}>
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

export default Username;