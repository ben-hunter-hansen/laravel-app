import $ = require("jquery");

class ViewBase {
	protected csrfToken: any;
	protected userId: any;
	constructor() {
		this.csrfToken = $("meta[name='csrf_token']").attr("content");
		this.userId = $("meta[name='user_id']").attr("content");
	}
}

export = ViewBase;