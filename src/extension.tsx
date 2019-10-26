import { st } from "springtype/core/st";
import { customElement } from "springtype/web/customelement";
import { ILifecycle } from "springtype/web/customelement/interface";
import { tsx } from "springtype/web/vdom";
import { getQueryParameter } from "./function/getQueryParameter";
import { OptionPage } from "./page/option-page/option-page";
import { PopupPage } from "./page/popup-page/popup-page";

@customElement()
export class extension extends st.element implements ILifecycle {

  constructor() {
    super();

    console.log('extension ctor');
  }

  render() {
    console.log('extension render');

    const value = getQueryParameter("page");
    switch (value) {
      case "option":
        return <OptionPage />;
      case "popup":
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
