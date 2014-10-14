(function() {
    'use strict';

    // JAVASCRIPT

    function flatConfigurator ($stateProvider, $urlRouterProvider) {

        $stateProvider
        
        .state('root.home.flat', {

                //   url:'/flat',
                views:{
                    'content@root': {
                        templateUrl: 'flat-module/flat.layout.html',
                        controller: 'FlatController',
                        controllerAs: 'vmFlat'
                    }
                }
            })

            .state('root.home.flat.comprehensive',{

                //    url:'/comprehensive',
                views:{
                    'flatContent@root.home.flat':{
                        templateUrl: 'flat-module/partial/flat-partial/flat-comprehensive-partial.html'
                    },
                    'flatSideBar@root.home.flat':{
                        templateUrl: 'flat-module/partial/sidebarContent/flat-sidebar.html'
                    },
                    'flatDetailsPanel@root.home.flat':{
                        templateUrl: 'flat-module/partial/flat-partial/flatDetails.html'
                    },
                    'flatAdditionsPanel@root.home.flat':{
                        templateUrl: 'flat-module/partial/flat-partial/flatAdditions.html'
                    },
                    'flatDiscountsPanel@root.home.flat':{
                        templateUrl: 'flat-module/partial/flat-partial/flatDiscounts.html'
                    }
                }
            });
    }

    // ANGULAR

    // Dependency on app.core where root state is defined, so we can extend it with additional child states
    angular
        .module('flatModule')
        .config(flatConfigurator);

    // Angular to Javascript
    flatConfigurator.$inject = ['$stateProvider', '$urlRouterProvider'];

    console.log('flatConfigurator');

})();
