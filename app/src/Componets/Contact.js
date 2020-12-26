import React, {Component} from 'react';
import Img1 from "./contact.png"
class Contact extends Component {
    render() {
        return (
            <td className={"td1"}>
                <img className={"inp"} src={Img1}/><br/>
                <a href={"/"}>
                    <div className={"but inp but1"}>Upload</div>
                </a>
                <br/>
                <a href={"/"}>
                    <div className={"but inp but1"}>Delete</div>
                </a>
            </td>
        );
    }
}

export default Contact;