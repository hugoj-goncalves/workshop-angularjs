///<reference path="~/Jasmine/lib/jasmine-2.3.4/jasmine.js"/>
///<reference path="~/Scripts/angular.js"/> 
///<reference path="~/Scripts/angular-mocks.js"/> 

///<reference path="~/dist/ControllersView.js"/> 

describe("controller: sub", function () {
    beforeEach(function() {
        module("myApp"); // angular.mock.module("app");
    });

    beforeEach(inject(function ($controller, $rootScope) {
        this.scope = $rootScope.$new();
        $controller("subCtrl", {
            $scope: this.scope
        });
    }));

    describe("check controller text", function() {
        it("should contain text", function() {
            expect(this.scope.obj.text).toBe("Inner Scope Text Wrong");
        });
    });
});