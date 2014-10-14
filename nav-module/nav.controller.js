(function() {
    'use strict';

    // JAVASCRIPT

    function NavController($scope, $state) {

        /*jshint validthis: true */
        var vmNav = this;

        vmNav.navbarModel = {};

        vmNav.carArr = [
            {"name":"car.comprehensive",
                "desc" : "ביטוח מקיף",
                "show":false},
            {"name":"car.thirdside",
                "desc" : "ביטוח צד ג'",
                "show":false},
            {"name":"car.compulsory",
                "desc" : "ביטוח חובה",
                "show":false}
        ];

        vmNav.menuClick = function(page) {
            $state.go('root.home.' + page.name);
        };

    }

    // ANGULAR
    angular
        .module('navModule')
        .controller('NavController', NavController);

    // Angular to Javascript
    NavController.$inject = ['$scope', '$state'];

    console.log('NavController');

})();