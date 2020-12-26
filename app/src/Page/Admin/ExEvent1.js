import React, {Component} from 'react';

class ExEvent1 extends Component {
    render() {
        return (
            <div>
                <div className={"center center1"}>
                    <h1>Example Event #1</h1>
                    <table className="table table-sm table-striped table-bordered">
                        <thead className="th1">
                        <tr className={"bg-primary"}>
                            <th>Day</th>
                            <th>Document</th>
                            <th>State</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr scope="row">
                            <td>C-1</td>
                            <td><a href={"/Documents/1"}>Document #1</a></td>
                            <td>Signed</td>
                        </tr>
                        <tr scope="row">
                            <td>C1</td>
                            <td>Document #2</td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ExEvent1;