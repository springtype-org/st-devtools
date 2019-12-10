import { st } from "springtype/core/st";
import { tsx } from "springtype/web/vdom";
import {getQueryParameter} from "./function/getqueryparameter";
import { PopupPage } from "./page/popup-page/popup-page";
import { PanelPage } from "./page/panel-page/panel-page";
import {component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface";

@component()
export class PluginPage extends st.component implements ILifecycle {

  constructor() {
    super();
  }

  render() {
    const value = getQueryParameter("page");
    switch (value) {
      case "panel":
        return <PanelPage />;
      case "popup":
      default:
        return <PopupPage />;
    }
  }
}
st.render(<PluginPage />);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      extension: Partial<PluginPage>;
    }
  }
}
