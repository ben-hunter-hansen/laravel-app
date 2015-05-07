require.config({
    baseUrl: 'js/dev',
    paths: {
        "jquery": "lib/jquery.min",
        "chart": "lib/chartjs/Chart",
        "bootstrap": "lib/bootstrap.min",
        "ViewBase": "view/ViewBase",
        "WelcomeView": "view/WelcomeView"
    },
    shim: {
        jquery: {
            exports: '$'
        },
        chart: {
            exports: 'Chart'
        },
        bootstrap: {
            deps: ["jquery"]
        }
    }
});
//# sourceMappingURL=config.js.map