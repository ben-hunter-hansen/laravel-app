require.config({
	baseUrl: 'js/dev'
});

require(['main'], (main) => {
	var appMain = new main.Main();
	appMain.run();
})