/// <reference path="_tests_references.js"/>

describe("controller: componentExampleController", function () {
    var model = {
        players: [
            { Name: "Player1", Age: 20, Hits: 0 },
            { Name: "Player2", Age: 30, Hits: 0 }
        ]
    };

    beforeEach(function() {
        module("myApp");

        module(function ($provide) {
            $provide.factory("dataService", function () {
                var data = model;
                return data;
            });
        });
    });

    beforeEach(inject(function ($controller, $rootScope) {
        this.scope = $rootScope.$new();
        $controller("componentExampleController", {
            $scope: this.scope
        });
    }));

    describe("check componentExampleController", function () {
        it("should contain players", function () {
            expect(this.scope.model).toEqual(model);
        });

        it("should hit player", function () {
            var player = { Name: "PlayerX", Age: 1, Hits: 0 };

            this.scope.hitFn(player);
            expect(player.Hits).toBe(1);

            this.scope.hitFn(player);
            expect(player.Hits).toBe(2);
        });
    });
});
