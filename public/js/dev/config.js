require.config({
    baseUrl: 'js/dev'
});
require(['main'], function (main) {
    var appMain = new main.Main();
    appMain.run();
});
//# sourceMappingURL=config.js.map