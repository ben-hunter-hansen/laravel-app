/**
 * Created by ben on 5/21/15.
 */
interface GridConfig {
    element: JQuery;
    rowTemplate: JQuery;
    events: {
        onClick: (e: JQueryEventObject) => void;
        onColumnAdjustment: (ev: JQueryUI.SliderEvent, ui: JQueryUI.SliderUIParams) => void;
    }
}

export = GridConfig;