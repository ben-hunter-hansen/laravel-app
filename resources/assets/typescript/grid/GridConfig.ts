/**
 * Created by ben on 5/21/15.
 */
import Template = require('grid/Template')
/**
 * Describes a grid configuration object
 */
interface GridConfig {
    element: JQuery; // parent grid element
    model: Template.GridModel;
    events: {
        onClick: (e: JQueryEventObject) => void;
        onDelete: (e: JQueryEventObject) => void;
    }
    components: {
        slider: Template.SlideConfig;
    }
}

export = GridConfig;