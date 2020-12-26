import React, {Component} from 'react';

class Ev extends Component {
    render() {
        return (
            <div className={"center center1"}>
                <h1>Events</h1>
                <table className="table table-sm table-primary table-bordered">
                    <thead className="th1">
                    <tr>
                        <th>Event</th>
                        <th>Dates</th>
                        <th>Participants</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><a href={"/Events/1"}>Example Event #1</a></td>
                        <td>01/12/2020 – 06/12/2020</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>Example Event #2</td>
                        <td>10/01/2021 – 21/01/2021</td>
                        <td>15</td>
                    </tr>
                    </tbody>
                </table>
                <a href={"/Events/Add"}>
                    <div className={"but"}>Add Event</div>
                </a>
            </div>
        );
    }
}

export default Ev;