import React, {Component} from 'react';
import "./style.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Register from "./Register";

class Authorization extends Component {
    render() {
        return (
            <div className={"center"}>
                <table className={"text"}>
                    <tr>
                        <td>E-mail</td>
                        <td><input type={"text"}/></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type={"text"}/></td>
                    </tr>
                    <tr className={"b1"}>
                        <td/>
                        <td>
                            <a href={"/Username"}>
                                <div className={"but"}>Sign In</div>
                            </a>
                        </td>
                    </tr>
                    <tr className={"b1"}>
                        <td/>
                        <td>
                            <a href={"/Register"}>
                                <div className={"but"}>Sign Up</div>
                            </a>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Authorization;