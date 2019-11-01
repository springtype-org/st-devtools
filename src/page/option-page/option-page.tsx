import {st} from "springtype/core";
import tss from "./option-page.style";
import tpl from "./option-page.tpl";
import {ILifecycle} from "springtype/web/component/interface";
import {component} from "springtype/web/component";

@component({
    tpl,
    tss
})
export class OptionPage extends st.component implements ILifecycle {
}


declare global {
    namespace JSX {
        interface IntrinsicElements {
            'OptionPage': Partial<OptionPage>;
        }
    }
}

