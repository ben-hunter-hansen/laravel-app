require.config({
    baseUrl: 'js/dev',
    paths: {
        "jquery": "lib/jquery.min",
        "jqueryui": "lib/jqueryui/jquery-ui",
        "chart": "lib/chartjs/Chart",
        "bootstrap": "lib/bootstrap.min",
        "EventRegister": "interfaces/EventRegister",
        "Grid": "grid/Grid",
        "Row": "grid/Row",
        "ViewBase": "view/ViewBase",
        "WelcomeView": "view/WelcomeView",
        "CreateView": "view/CreateView"
    },
    shim: {
        jquery: {
            exports: '$'
        },
        jqueryui: {
            deps: ["jquery"]
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