import { st } from "springtype/core/st";
import { customElement } from "springtype/web/customelement";
import { ILifecycle } from "springtype/web/customelement/interface";
import tss from "./popup-page.style";
import tpl from "./popup-page.tpl";

@customElement({ tpl, tss })
export class PopupPage extends st.element implements ILifecycle {
  onButtonClick(evt: any) {
    evt.preventDefault();
    if (evt.target) {
      let color = "green";
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        // @ts-ignore
        chrome.tabs.executeScript(tabs[0].id, { code: 'document.body.style.backgroundColor = "' + color + '";' });
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
