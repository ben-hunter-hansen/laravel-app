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
		$(".grid-col").resizable({grid:50});
	}
}

export = CreateView;