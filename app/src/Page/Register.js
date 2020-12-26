import React, {Component} from 'react';
import Contact from "../Componets/Contact";

class Register extends Component {
    render() {
        return (
            <div className={"center cen1"}>
                <h1>Registration</h1>
                <table className={"text"}>
                    <tr>
                        <Contact/>
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
                                <td>Email</td>
                                <td><input type={"text"}/></td>
                            </tr>
                            <tr>
                                <td>Password</td>
                                <td><input type={"text"}/></td>
                            </tr>
                            <tr>
                                <td>Repeat password</td>
                                <td><input type={"text"}/></td>
                            </tr>
                            <tr className={"b1"}>
                                <td></td>
                                <td>
                                    <a href={"/"}>
                                        <div className={"but but-r"}>Cancel</div>
                                    </a>
                                    <a href={"/"}>
                                        <div className={"but "}>Ok</div>
                                    </a>
                                </td>
                            </tr>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Register;