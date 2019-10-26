import { tsx } from "springtype/web/vdom";
import { PopupPage } from "./popup-page";

export default (component: PopupPage) => (
  <div>
    <p>Component: PopupPage</p>
    <button onClick={component.onButtonClick} />
  </div>
);
