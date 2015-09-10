(function () {
    "use strict";

    angular.module("myApp")
        .factory("asyncDataService", asyncDataService)
        .controller("asyncViewController", asyncViewController);

    asyncDataService.$inject = ["$http"];
    function asyncDataService($http) {
        var svc = {};
        svc.url = "AsyncServicesData";
        svc.getData = getData;

        function getData() {
            return $http.get(svc.url);
        }

        return svc;
    }

    asyncViewController.$inject = ["$timeout", "asyncDataService"];
    function asyncViewController($timeout, asyncDataService) {
        var vm = this;

        vm.obterDados = obterDados;

        function obterDados() {
            vm.loading = true;

            $timeout(function() {
                asyncDataService.getData().success(function (data) {
                    vm.data = data;
                }).finally(function () {
                    vm.loading = false;
                });
            }, 600);
        }
    }
})();