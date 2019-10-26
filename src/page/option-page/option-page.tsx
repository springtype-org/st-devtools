import { customElement } from 'springtype/web/customelement';
import { ILifecycle } from 'springtype/web/customelement/interface';
import { st } from '../../../../../src/core';
import tss from "./option-page.style";
import tpl from "./option-page.tpl";

@customElement({
    tpl,
    tss
})
export class OptionPage extends st.element implements ILifecycle {
}


declare global {
    namespace JSX {
        interface IntrinsicElements {
            'OptionPage': Partial<OptionPage>;
        }
    }
}

