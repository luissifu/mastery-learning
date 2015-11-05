var ML;
(function (ML) {
    var Directives;
    (function (Directives) {
        var NavBar = (function () {
            function NavBar() {
                return this.createDirective();
            }
            NavBar.prototype.createDirective = function () {
                return {
                    controller: ML.Controllers.NavBarController,
                    restrict: 'E',
                    templateUrl: 'views/navBar.html',
                    replace: true,
                    scope: {}
                };
            };
            return NavBar;
        })();
        Directives.NavBar = NavBar;
    })(Directives = ML.Directives || (ML.Directives = {}));
})(ML || (ML = {}));
//# sourceMappingURL=navBar.js.map