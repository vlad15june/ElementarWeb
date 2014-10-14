(function() {
    'use strict';

// JAVASCRIPT

    function FlatController($scope, flatService) {
      console.log('===========================FlatController==================================');
      var vmFlat = this;
      // $scope.modelFlat = {};
   
      // To allow binding to service
      vmFlat.flatService = flatService;
     
    }
    
// ANGULAR
angular
    .module('flatModule')
        .controller('FlatController', FlatController);

// Angular to Javascript
FlatController.$inject = ['$scope', 'flatService'];


})();