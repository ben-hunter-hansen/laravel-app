function View() {
	this.CSRF = $("meta[name='csrf_token']").attr("content");
	this.USER_ID = $("meta[name='user_id']").attr("content");
}