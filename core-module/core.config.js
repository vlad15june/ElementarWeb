(function () {
    'use strict';

    // JAVASCRIPT

    /* @ngInject */
    function coreConfigurator($stateProvider, $urlRouterProvider) {

        /* root state */
        $stateProvider

            .state('root', {
                abstract: true,
                templateUrl: 'app/app.layout.html',
                controller: 'AppController',
                controllerAs: 'vmApp'
            })

            .state('root.home', {
                url: '',
                views: {
                    'navbar': {
                        templateUrl: 'nav-module/nav.html',
                        controller: 'NavController',
                        controllerAs: 'vmNav'
                    },
                    'msgbar': {
                        templateUrl: 'app/msgbar.html',
                        controller: 'MessageController',
                        controllerAs: 'vmMsg'
                    }
         
                }
            });
           
           

        // IMPORTANT:
        // Module states should be added in EACH module's config NOT HERE

        /* Add New States Above */
        $urlRouterProvider.otherwise('/');
    }

    // ANGULAR

    angular
        .module('app.core')
        .config(coreConfigurator);

    console.log('coreConfigurator');

})();
