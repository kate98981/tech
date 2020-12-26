import React, {Component} from 'react';

class Dates extends Component {
    render() {
        return (
            <div className={"center center1"}>
                <h1>Example Event #1\Dates</h1>
                <table className="table table-sm table-bordered">
                    <tbody>
                    <tr>
                        <td className={"bg-warning"}>C-2</td>
                        <td className={"bg-warning"}>C-1</td>
                        <td className={"bg-success"}>C1</td>
                        <td className={"bg-success"}>C2</td>
                        <td className={"bg-primary"}>C+1</td>
                        <td className={"bg-primary"}>C+2</td>
                    </tr>
                    <tr>
                        <td className={"bg-warning"}>01/12/2020</td>
                        <td className={"bg-warning"}>02/12/2020</td>
                        <td className={"bg-success"}>03/12/2020</td>
                        <td className={"bg-success"}>04/12/2020</td>
                        <td className={"bg-primary"}>05/12/2020</td>
                        <td className={"bg-primary"}>06/12/2020</td>
                    </tr>
                    </tbody>
                </table>
                <div className={"form1"}>
                    <p>Start Date <input type={"text"}/></p>
                    <p>C1 Date <input type={"text"}/></p>
                    <p>C+1 Date <input type={"text"}/></p>
                    <p>Finish Date <input type={"text"}/></p>
                    <p>
                        <a href={"/Events/1"}>
                            <div className={"but"}>Cancel</div>
                        </a>
                        <a href={"/Events/1"}>
                            <div className={"but but-r"}>Ok</div>
                        </a>
                    </p>
                </div>

            </div>
        );
    }
}

export default Dates;