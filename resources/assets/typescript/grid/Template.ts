/**
 * Created by ben on 5/22/15.
 */

import Column = require('grid/Column');
import Slider = require('grid/Slider');
module Template {
    export interface GridRow {
        element: JQuery;
        children: {
            userContent: Column;
            utils: {
                columnSlider: Slider;
            }
        }
    }
}

export = Template;