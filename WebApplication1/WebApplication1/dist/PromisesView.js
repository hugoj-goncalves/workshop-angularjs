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
            $q.when(dadosDoServidor()).then(function(data) { // promise 1
                alert("success " + data);
                return $q.reject();
            }).then(function (param) { // promise 2 success
                alert("success2 " + param);
                return "okay";
            }).then(function (param) {  // promise 3
                alert("success3 " + param);
            }, function (param) { // promise3 error callback
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
                var dados = dadosDoServidor2().then(function (data) {
                    data.dados = "outro dado";
                    return data;
                });
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