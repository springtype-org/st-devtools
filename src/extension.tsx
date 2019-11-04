import { st } from "springtype/core/st";
import { tsx } from "springtype/web/vdom";
import {getQueryParameter} from "./function/getqueryparameter";
import { PopupPage } from "./page/popup-page/popup-page";
import {component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface";

@component()
export class extension extends st.component implements ILifecycle {

  constructor() {
    super();
  }

  render() {
    const value = getQueryParameter("page");
    switch (value) {
      case "popup":
      default:
        return <PopupPage />;
    }
  }
}
st.render(<extension />);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      extension: Partial<extension>;
    }
  }
}
