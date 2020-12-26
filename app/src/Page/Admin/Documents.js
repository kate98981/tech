import React, {Component} from 'react';

class Documents extends Component {
    render() {
        return (
            <div className={"center center1"}>
                <h1>Documents</h1>
                <table className="table table-sm table-striped table-bordered">
                    <thead className="th1">
                    <tr className={"bg-primary"}>
                        <th>Document</th>
                        <th>Day</th>
                        <th>For</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr scope="row">
                        <td><a href={"/Documents/1"}>Document #1</a></td>
                        <td>C-1</td>
                        <td>Experts</td>
                    </tr>
                    <tr scope="row">
                        <td>Document #2</td>
                        <td>C1</td>
                        <td>Competitors</td>
                    </tr>
                    </tbody>
                </table>
                <a href={"/Documents/NewDocument"}>
                    <div className={"but but-doc"}>Add Document</div>
                </a>
            </div>
        );
    }
}

export default Documents;