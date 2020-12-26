import React, {Component} from 'react';
import "./log.css";

class Login extends Component {
    render() {
        return (
            <div className={"center center1"}>
                <h1>Username\Login</h1>
                E-mail example@email.com
                <table>
                    <tr>
                        <td className={"text"}>Current<br/>Password</td>
                        <td><input type={"text"}/></td>
                    </tr>
                    <tr>
                        <td className={"text"}>New Password</td>
                        <td><input type={"text"}/></td>
                    </tr>
                    <tr>
                        <td className={"text"}>Repeat Password</td>
                        <td><input type={"text"}/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
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

export default Login;