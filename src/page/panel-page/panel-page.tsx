import tss from "./panel-page.style";
import tpl from "./panel-page.tpl";
import {attr, component} from "springtype/web/component";
import {st} from "springtype/core";
import {ILifecycle} from "springtype/web/component/interface";
import {AttrType} from "springtype/web/component/trait/attr";
import {getPerformance} from "../../function/getperformance";
import {IPerformance} from "../../interface/iperformance";
import {context} from "springtype/core/context";

const triggerPerformance = (component: PanelPage) => {
    getPerformance().then((performanceData) => {
        component.performanceData = performanceData;
    })
};

@component({tpl, tss})
export class PanelPage extends st.component implements ILifecycle {

    @context('performance')
    performanceData: Array<IPerformance> = [];

    constructor() {
        super();
        triggerPerformance(this);
        setInterval(() => triggerPerformance(this), 1000);
    }
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            PanelPage: Partial<PanelPage>;
        }
    }
}
