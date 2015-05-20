import $ = require('jquery');
import ViewBase = require('ViewBase');
import EventRegister = require('interfaces/EventRegister');

class CreateView extends ViewBase implements EventRegister {

	constructor() {
		super();
	}
	
	public registerEvents() {
		$(document).ready((e) => { this.setup() });
	}
	
	private setup() {
		$(".grid-col").resizable({
            grid:50,
            containment: "parent"
        });
        $("#column-size-slider").slider({
            value: 1,
            min: 1,
            max: 6,
            step: 1,
            slide: (event,ui) => {
                $("#nColumns").val(ui.value);
            }
        });
        $("#nColumns").val(""+$("#column-size-slider").slider("value"));
	}
}

export = CreateView;