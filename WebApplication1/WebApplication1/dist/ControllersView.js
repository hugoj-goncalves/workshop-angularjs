(function () {
    "use strict";

    function simpleCtrl($scope) {
        $scope.obj = { text: "Simple Scope Text" };
    }
    simpleCtrl.$inject = ["$scope"];

    function subCtrl($scope) {
        $scope.obj = { text: "Inner Scope Text" };
    }
    subCtrl.$inject = ["$scope"];

    angular.module("myApp")
        .controller("simpleCtrl", simpleCtrl)
        .controller("subCtrl", subCtrl);
})();