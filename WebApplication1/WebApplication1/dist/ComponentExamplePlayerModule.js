(function () {
    "use strict";

    function playerDirective() {
        function linkFn(scope, element, attrs, ctrls, transclude) {
            transclude(scope, function (clone) {
                element.append(clone);
            });
        }

        function controllerFn($scope) {
            $scope.defaultAttribute = $scope.defaultAttribute || "defaultAttributeValue";
        }
        controllerFn.$inject = ["$scope"];

        return {
            restrict: "C",
            scope: {
                player: "=",
                defaultAttribute: "=",
                undefinedAttribute: "=",
                hit: "&"
            },
            transclude: true,
            link: linkFn,
            controller: controllerFn
        };
    }

    angular.module("myApp.player", [])
        .directive("playerDirective", playerDirective);
})();