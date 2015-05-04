define(["require", "exports", 'utils/printer'], function (require, exports, P) {
    var Main = (function () {
        function Main() {
        }
        Main.prototype.run = function () {
            P.Printer.printLn("niggaaa");
        };
        return Main;
    })();
    exports.Main = Main;
});
//# sourceMappingURL=main.js.map