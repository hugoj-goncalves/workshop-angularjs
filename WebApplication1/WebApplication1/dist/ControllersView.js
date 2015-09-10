(function () {
    "use strict";

    angular.module("myApp")
        .controller("simpleCtrl", simpleCtrl)
        .controller("subCtrl", subCtrl);

    simpleCtrl.$inject = ["$scope"];
    function simpleCtrl($scope) {
        var vm = this;
        vm.obj = { text: "Simple Scope Text" };
        vm.obj2 = { text: "Object2 Text" };
    }

    subCtrl.$inject = ["$scope"];
    function subCtrl($scope) {
        $scope.obj = { text: "Inner Scope Text" };
    }
})();