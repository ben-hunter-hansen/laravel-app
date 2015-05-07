define(["require", "exports", "jquery"], function (require, exports, $) {
    var ViewBase = (function () {
        function ViewBase() {
            this.csrfToken = $("meta[name='csrf_token']").attr("content");
            this.userId = $("meta[name='user_id']").attr("content");
        }
        return ViewBase;
    })();
    return ViewBase;
});
//# sourceMappingURL=ViewBase.js.map