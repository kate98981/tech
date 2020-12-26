import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
class Admin extends Component {
    render() {
        return (
            <div className={"center center1"}>
                <h1>Admin</h1>
                <table className="table table-sm table-primary table-bordered">
                    <thead className="th1">
                    <tr>
                        <th>User</th>
                        <th>Event</th>
                        <th>Role</th>
                        <th>Asign</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>John Smith (RU)</td>
                        <td>Example Event</td>
                        <td>Expert</td>
                        <td><a href={"/"}><div className={"pin assig"}>Assign</div></a></td>
                    </tr>
                    <tr>
                        <td>Jack Johnson</td>
                        <td>Example Event</td>
                        <td>Competitor</td>
                        <td><a href={"/"}><div className={"pin remove"}>Remove</div></a></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Admin;