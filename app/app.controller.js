(function() {
    'use strict';

    // JAVASCRIPT

    // APP MAIN CONTROLLER
    function AppController($scope, $rootScope) {

        /*jshint validthis: true */
        var vmApp = this;

        console.log('AppController');
        
        /* Catch stateProvider events for tracing/debugging */
        $rootScope.$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams){
                console.log('event: ' + event + ' Change Start from: ' + fromState + ' to: ' + toState);
            });

        $rootScope.$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams){
                console.log('event: ' + event + ' State Changed Successfully from: ' + fromState + ' to: ' + toState);
            });

        $scope.$on('$viewContentLoading',
            function(event, viewConfig){
                console.log('$viewContentLoading event: ' + event + ' viewConfig: ' + viewConfig);
            });

        $scope.$on('$viewContentLoaded',
            function(event, viewConfig){
                console.log('$viewContentLoaded event: ' + event + ' viewConfig: ' + viewConfig);
            });

    }
    
    // MESSAGE CONTROLLER
    function MessageController($scope, carServices){
        
        /*jshint validthis: true */
        var vmMsg = this;
        
        console.log('MessageController');
        
        // To allow binding to service
        vmMsg.carServices = carServices;
        
        
    }

    // ANGULAR
    angular
        .module('app')
        .controller('AppController', AppController)
        .controller('MessageController', MessageController);

    // Angular to Javascript
    AppController.$inject = ['$scope', '$rootScope'];
    MessageController.$inject = ['$scope', 'carServices'];
    
})();