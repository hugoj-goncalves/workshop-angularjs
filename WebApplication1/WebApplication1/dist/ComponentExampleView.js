(function () {
    "use strict";

    function dataService() {
        var data = {
            players: [
                {
                    Name: "Player1",
                    Age: 20,
                    Hits: 0
                },
                {
                    Name: "Player2",
                    Age: 30,
                    Hits: 0
                }
            ]
        };
        return data;
    }

    function componentExampleController($scope, dataService) {
        $scope.model = dataService;

        $scope.hitFn = function (player) {
            player.Hits++;
        };
    }
    componentExampleController.$inject = ["$scope", "dataService"];

    angular.module("myApp")
        .controller("componentExampleController", componentExampleController)
        .factory("dataService", dataService);
})();