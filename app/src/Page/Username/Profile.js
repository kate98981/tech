import React, {Component} from 'react';
import Contact from "../../Componets/Contact";
import "./log.css";

class Profile extends Component {
    render() {
        return (
            <div className={"center center1"}>
                <h1>Username\Profile</h1>
                <table>
                    <tr>
                        <td>
                            <Contact/>
                        </td>
                        <td>
                            <tr>
                                <td>First Name</td>
                                <td><input type={"text"}/></td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td><input type={"text"}/></td>
                            </tr>
                            <tr>
                                <td>Country</td>
                                <td><input type={"text"}/></td>
                            </tr>
                            <tr>
                                <td>About</td>
                                <td><textarea></textarea></td>
                            </tr>
                            <a href={"/Username"}>
                                <div className={"but"}>Cancel</div>
                            </a>
                            <a href={"/Username"}>
                                <div className={"but but-r"}>Ok</div>
                            </a>
                        </td>
                    </tr>

                </table>

            </div>
        );
    }
}

export default Profile;