(function () {
    "use strict";

    angular.module("myApp.player", [])
        .directive("playerDirective", playerDirective)
        .directive("playerDirectiveWithTemplate", playerDirectiveWithTemplate);

    function playerDirective() {
        function linkFn(scope, element, attrs, ctrls, transclude) {
            transclude(scope, function (clone) {
                element.append(clone);
            });
        }

        controllerFn.$inject = ["$scope"];
        function controllerFn($scope) {
            $scope.defaultAttribute = $scope.defaultAttribute || "defaultAttributeValue";
        }

        return {
            restrict: "ECA",
            scope: {
                player: "=",
                defaultAttribute: "=",
                undefinedAttribute: "@",
                hit: "&"
            },
            transclude: true,
            link: linkFn,
            controller: controllerFn
        };
    }

    function playerDirectiveWithTemplate() {
        function linkFn(scope, element, attrs, ctrls, transclude) {
        }

        controllerFn.$inject = ["$scope"];
        function controllerFn($scope) {
            $scope.defaultAttribute = $scope.defaultAttribute || "defaultAttributeValue";
        }

        return {
            restrict: "C",
            scope: {
                player: "=",
                defaultAttribute: "=",
                undefinedAttribute: "=",
                hit: "&"
            },
            link: linkFn,
            controller: controllerFn,
            transclude: true,
            template: "<ng-transclude></ng-transclude><h4>Player Info</h4>" +
                "<p>Name: {{player.Name}}</p>" +
                "<p>Age: {{player.Age}}</p>" +
                "<p>Hits: {{player.Hits}}</p>" +

                "<button ng-click=\"hit({player: player})\">Hit {{player.Name}}</button>"
        };
    }
})();