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
		$("#createToolbar").find("button").draggable({
			cancel: "false",
			helper: "clone"
		});
	}
}

export = CreateView;