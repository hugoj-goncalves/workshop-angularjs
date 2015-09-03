(function () {
    "use strict";

    angular.module("myApp")
        .controller("simpleCtrl", simpleCtrl)
        .controller("subCtrl", subCtrl);

    simpleCtrl.$inject = ["$scope"];
    function simpleCtrl($scope) {
        $scope.obj = { text: "Simple Scope Text" };
        $scope.obj2 = { text: "Object2 Text" };
    }

    subCtrl.$inject = ["$scope"];
    function subCtrl($scope) {
        $scope.obj = { text: "Inner Scope Text" };
    }
})();