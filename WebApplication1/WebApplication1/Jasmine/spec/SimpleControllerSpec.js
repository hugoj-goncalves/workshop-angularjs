/// <reference path="_tests_references.js"/>

describe("controller: simple", function () {
    beforeEach(function () {
        module("myApp"); // angular.mock.module("app");
    });

    beforeEach(inject(function ($controller, $rootScope) {
        this.scope = $rootScope.$new();
        $controller("simpleCtrl", {
            $scope: this.scope
        });
    }));

    describe("check controller text", function() {
        it("should contain text", function() {
            expect(this.scope.obj.text).toBe("Simple Scope Text");
        });
    });
});