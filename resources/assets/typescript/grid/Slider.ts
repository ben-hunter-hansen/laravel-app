/**
 * Created by ben on 5/22/15.
 */
interface Slider {
    element: JQuery;
    config: {
        value: number;
        min: number;
        max: number;
        step: number;
        slide: (event: JQueryUI.SliderEvent, ui: JQueryUI.SliderUIParams) => void;
    }
}

export = Slider;