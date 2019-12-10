import tss from "./popup-page.style";
import tpl from "./popup-page.tpl";
import {component} from "springtype/web/component";
import {st} from "springtype/core";
import {ILifecycle} from "springtype/web/component/interface";

@component({ tpl, tss })
export class PopupPage extends st.component implements ILifecycle {
  onButtonClick(evt: any) {
    evt.preventDefault();
    if (evt.target) {
      let color = "green";
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        // @ts-ignore
        chrome.tabs.executeScript(tabs[0].id, {
          code: 'document.body.style.backgroundColor = "' + color + '";'
        });
      });
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      PopupPage: Partial<PopupPage>;
    }
  }
}
