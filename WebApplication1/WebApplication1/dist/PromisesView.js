(function () {
    "use strict";

    angular.module("myApp")
        .controller("promiseController", promiseController);

    promiseController.$inject = ["$timeout", "$q"];
    function promiseController($timeout, $q) {
        var vm = this;

        vm.obterDados = obterDados;
        vm.chain = chain;

        function chain() {
            $q.when().then(function() { // promise 1
                alert("success");
                return $q.reject();
            }).then(function (param) { // promise 2
                alert("success2 " + param);
                return "okay";
            }, function (param) {
                alert("error2 " + param);
            }).then(function (param) {  // promise 3
                alert("success3 " + param);
            }, function (param) {
                alert("error3 " + param);
            });
        }

        function obterDados() {
            vm.loading = true;

            dadosPromise().then(function(data) {
                vm.data = data;

                vm.loading = false;
            });
        }

        function dadosPromise() {
            var timeout = $timeout(function () {
                var dados = dadosDoServidor();
                debugger;
                return dados;
            }, 600);

            return timeout;
        }

        function dadosDoServidor() {
            return { dados: "dados" };
        }

        function dadosDoServidor2() {
            var deferred = $q.defer();

            deferred.resolve(dadosDoServidor());

            return deferred.promise;

            //return $q.when(dadosDoServidor());
        }
    }
})();