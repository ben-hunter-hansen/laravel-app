define(["require", "exports"], function (require, exports) {
    var Printer = (function () {
        function Printer() {
        }
        Printer.printLn = function (msg) {
            console.log(msg);
        };
        return Printer;
    })();
    exports.Printer = Printer;
});
//# sourceMappingURL=printer.js.map