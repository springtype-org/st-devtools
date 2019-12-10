import {tsx} from "springtype/web/vdom";
import {PanelPage} from "./panel-page";

export default (component: PanelPage) => {
    let table = undefined;
    if (component.performanceData.length > 0) {
        table = <table>
            <thead>
            <tr>
                <td>Name</td>
                <td>Avg. execution time (ms)</td>
                <td>Calls #</td>
            </tr>
            </thead>
            <tbody>
            {component.performanceData.map(performance => <tr>
                <td><code>${performance.name}</code></td>
                <td><code>${performance.data}</code></td>
                <td><code>${performance.callAmount}</code></td>
            </tr>)}
            </tbody>
        </table>
    }
    return <div>
        <h2>Runtime Performance</h2>

        <p>Function call performance measurements using <code>@MeasureSpeed</code> and <code>measureSpeed()</code>:</p>

        {table}

        <h2>Interactive Debugging</h2>

        <p>You can debug the SpringType ecosystem using the developer <code>console</code>:</p>

        <ul>
            <li><code>window.$st</code> for application context</li>
        </ul>
    </div>
};
