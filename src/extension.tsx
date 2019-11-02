import { st } from "springtype/core/st";
import { tsx } from "springtype/web/vdom";
import {getQueryParameter} from "./function/getqueryparameter";
import { OptionPage } from "./page/option-page/option-page";
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
      case "option":
        return <OptionPage />;
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
