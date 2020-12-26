import React, {Component} from 'react';
import FotoNo from "./image_file_application_2895.png";

class EvAdd extends Component {
    render() {
        return (
            <div className={"center center1"}>
                <h1>Events\New Event</h1>
                <table>
                    <tr>
                        <td>
                            <img className={"inp"} src={FotoNo}/><br/><br/>
                            <a href={"/"}>
                                <div className={"but inp but1"}>Upload</div>
                            </a>
                            <br/>
                            <a href={"/"}>
                                <div className={"but inp but1"}>Delete</div>
                            </a>
                        </td>
                        <td>
                            Example Event #1
                        </td>
                        <td>
                            <tr>
                                <td>Event Title
                                </td>
                                <td><input type={"text"}/></td>
                            </tr>
                            <tr>
                                <td>Start Date
                                </td>
                                <td><input type={"text"}/></td>
                            </tr>
                            <tr>
                                <td>C1 Date
                                </td>
                                <td><input type={"text"}/></td>
                            </tr>
                            <tr>
                                <td>C+1 Date
                                </td>
                                <td><input type={"text"}/></td>
                            </tr>
                            <tr>
                                <td>Finish Date
                                </td>
                                <td><input type={"text"}/></td>
                            </tr>
                            <a href={"/Events"}>
                                <div className={"but"}>Cancel</div>
                            </a>
                            <a href={"/Events"}>
                                <div className={"but but-r"}>Ok</div>
                            </a>
                        </td>
                    </tr>

                </table>
            </div>
        );
    }
}

export default EvAdd;