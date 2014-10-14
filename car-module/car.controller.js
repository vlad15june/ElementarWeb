(function() {
    'use strict';

    // JAVASCRIPT
    
    // CAR CONTROLLER
    function CarController(carServices) {

        /*jshint validthis: true */
        var vmCar = this;
        
        console.log('CarController');
        
        // To allow binding to service
        vmCar.carServices = carServices;

        vmCar.viewState = carServices.getViewState();

    }

    
     // CAR COMPREHENSEVE CONTROLLER
    function ComprehensiveController(carServices) {

        /*jshint validthis: true */
        var vmCar = this;
        
        console.log('ComprehensiveController');
        
        // To allow binding to service
        vmCar.carServices = carServices;

        vmCar.carServices.reset();
        
        vmCar.carServices.branch = 25;
        vmCar.carServices.branchType = 1;
        
        vmCar.carServices.getCarTypes();
        vmCar.carServices.getCoveragesData (vmCar.carServices.branch, 
                                            vmCar.carServices.branchType);

        vmCar.viewState = carServices.getViewState();

    }
    
    
    // CAR COMPULSORY CONTROLLER
    function CompulsoryController(carServices) {
        
        /*jshint validthis: true */
        var vmCar = this;
  
        console.log('CompulsoryController');
        
        // To allow binding to service
        vmCar.carServices = carServices;
 
        vmCar.carServices.reset();
        
        vmCar.carServices.branch = 25;    // must be 20
        vmCar.carServices.branchType = 1; // must be 0
        
        vmCar.carServices.getCarTypes();
        vmCar.carServices.getCoveragesData (vmCar.carServices.branch, 
                                            vmCar.carServices.branchType);

        vmCar.viewState = carServices.getViewState();
    }
    
    
    // CAR SIDEBAR CONTORLLER
    function SidebarController(carServices) {
        
        /*jshint validthis: true */
        var vmCar = this;
  
        console.log('SidebarController');
        
        // To allow binding to service
        vmCar.carServices = carServices;
        
    }
    
    
    // ANGULAR
    angular
        .module('carModule')
        .controller('CarController', CarController)
        .controller('CompulsoryController', CompulsoryController)
        .controller('ComprehensiveController', ComprehensiveController)
        .controller('SidebarController', SidebarController);
        

    // Angular to Javascript
    CarController.$inject = ['carServices'];
    CompulsoryController.$inject = ['carServices'];
    ComprehensiveController.$inject = ['carServices'];
    SidebarController.$inject = ['carServices'];
})();