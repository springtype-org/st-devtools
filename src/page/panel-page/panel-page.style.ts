import { css } from "springtype/web/tss";
import { PanelPage } from "./panel-page";

export default (component: PanelPage) => css`
    table, table *, code {
        font-size: 12px;
    }
    table {
        width: 100%;
    }
    thead {
        font-weight: bold;
    }
`;
