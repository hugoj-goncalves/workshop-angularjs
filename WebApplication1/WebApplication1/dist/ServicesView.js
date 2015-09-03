(function () {
    "use strict";

    angular.module("myApp")
        .factory("model", modelFactory)
        .factory("singletonFactory", singletonFactory)
        .controller("firstCtrl", firstCtrl)
        .controller("secondCtrl", secondCtrl);

    function modelFactory() {
        function model(text) {
            this.text = text;
        }

        model.prototype.getText = function () {
            return this.text;
        };

        return model;
    }

    function singletonFactory() {
        var singletonModel = {};
        singletonModel.getText = function () {
            return singletonModel.text || "empty model";
        };
        return singletonModel;
    }

    firstCtrl.$inject = ["singletonFactory", "model"];
    function firstCtrl(singletonFactory, model) {
        var self = this;
        self.name = "FirstCtrl";
        self.model = new model("first");
        self.singletonModel = singletonFactory;
    }

    secondCtrl.$inject = ["singletonFactory", "model"];
    function secondCtrl(singletonFactory, model) {
        var self = this;
        self.name = "SecondCtrl";
        self.model = new model("second");
        self.singletonModel = singletonFactory;
    }
})();