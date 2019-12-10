import {tsx} from "springtype/web/vdom";
import {PopupPage} from "./popup-page";
import {getBrowser} from "../../function/getbrowser";

export default (component: PopupPage) => (
    <div>
        <p>{getBrowser()}</p>
        <button onClick={component.onButtonClick}/>
    </div>
)



