(function () {
    'use strict';

    // JAVASCRIPT

    
    /* @ngInject */
    function DataService($http, $q) {

        
     // Private Members/Methods
     var baseUrl = 'http://127.0.0.1:18080/carRest-0.0.1/rest/';
        
    
    function doGet(resourceName, paramsArr){
        
        var params = '';
        paramsArr.forEach(function (item) {
            params += ('/' + item);
        }); 
        if(params === null) {
            params = '';
        }
        var promise = $http({
            method : 'GET',
            url : baseUrl + resourceName + params,
        });
        return promise;
    }
        
    function doPost(resourceName, paramObj){
        
        var promise = $http({
                method: 'POST',
                url  : baseUrl + resourceName,
                data : paramObj
        });
        return promise;
    }

        // Public API

        var service = {
            doGet: doGet,
            doPost : doPost
        };

        return service;

    }

    // ANGULAR
    angular
        .module('app.core')
        .factory('dataService', DataService);

    DataService.$inject = ['$http', '$q'];

})();
