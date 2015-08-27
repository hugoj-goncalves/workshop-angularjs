/// <reference path="_tests_references.js"/>

describe("module: componentExamplePlayer", function () {
    beforeEach(function() {
        module("myApp");
    });

    beforeEach(inject(function ($controller, $rootScope) {
        this.scope = $rootScope.$new();
        $controller("componentExampleController", {
            $scope: this.scope
        });
        spyOn(this.scope, "hitFn");
    }));

    beforeEach(inject(function ($compile) {
        this.scope.myPlayer = { Name: "Player1", Age: 20, Hits: 0 };

        this.element =
            "<div class=\"playerDirective\" player=\"myPlayer\" hit=\"hitFn(player)\">" +
                "<h4>Player Info</h4>" + 
                "<p>Name: {{player.Name}}</p>" +
                "<p>Age: {{player.Age}}</p>" +
                "<p>Hits: {{player.Hits}}</p>" +
                "<button ng-click=\"hit({player: player})\">Hit {{player.Name}}</button>" +
            "</div>";
        this.element = $compile(this.element)(this.scope);
        this.scope.$digest();
    }));

    describe("check componentExampleController", function () {
        it("should contain myPlayer", function () {
            var isolated = this.element.isolateScope();
            expect(isolated.player).toEqual(this.scope.myPlayer);
        });

        it("should hit myPlayer", function () {
            var isolated = this.element.isolateScope();
            isolated.hit({player: isolated.player});
            expect(this.scope.hitFn).toHaveBeenCalledWith(isolated.player);
        });
    });
});
