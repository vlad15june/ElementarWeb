(function() {
    'use strict';

    // JAVASCRIPT
    function carConfigurator ($stateProvider) {

        $stateProvider

            .state('root.home.car', {

                //   url:'/car',
                views:{
                    'content@root':{
                        templateUrl: 'car-module/car.layout.html',
                        controller: 'CarController',
                        controllerAs: 'vmCar'
                    }
                }
            })

            .state('root.home.car.comprehensive',{

                //    url:'/comprehensive',
                views:{

                    'carContent@root.home.car':{
                        templateUrl: 'car-module/partial/car-partial/comprehensive-partial.html',
                        controller: 'ComprehensiveController',
                        controllerAs: 'vmCar'
                    },
                    'carSideBar@root.home.car':{
                        templateUrl: 'car-module/partial/sidebarContent/sidebar.html',
                        controller: 'SidebarController',
                        controllerAs: 'vmCar'
                    },
                   'carDetailsPanel@root.home.car.comprehensive':{
                        templateUrl: 'car-module/partial/car-partial/carDetails.html'
                    },
                   'carAdditionsPanel@root.home.car.comprehensive':{
                        templateUrl: 'car-module/partial/car-partial/carAdditions.html'
                    },
                   'carDiscountsPanel@root.home.car.comprehensive':{
                        templateUrl: 'car-module/partial/car-partial/carDiscounts.html'
                    }
                }
            }).state('root.home.car.compulsory', {

                //   url:'/compulsory',
                views: {
                    'carContent@root.home.car':{

                        templateUrl: 'car-module/partial/car-partial/compulsory-partial.html',
                        controller: 'CompulsoryController',
                        controllerAs: 'vmCar'
                    },
                    'carSideBar@root.home.car':{
                        templateUrl: 'car-module/partial/sidebarContent/sidebar.html',
                        controller: 'SidebarController',
                        controllerAs: 'vmCar'
                    },
                   'carDetailsPanel@root.home.car.compulsory':{
                        templateUrl: 'car-module/partial/car-partial/carDetails.html'
                    },
                   'carAdditionsPanel@root.home.car.compulsory':{
                        templateUrl: 'car-module/partial/car-partial/carAdditions.html'
                    },
                   'carDiscountsPanel@root.home.car.compulsory':{
                        templateUrl: 'car-module/partial/car-partial/carDiscounts.html'
                    }
                }
            }).state('root.home.car.thirdside', {

                //   url: '/thirdside',
                views: {

                    'content@root': {
                        templateUrl: 'car-module/partial/car-partial/thirdside-partial.html',
                        controller: 'ThirdsideController'
                    }
                }
            });
    }

    // ANGULAR
    // Note: Dependency on app.core where root state is defined, so we can extend it with additional child states
    angular
        .module('carModule')
        .config(carConfigurator);

    // Angular to Javascript
    carConfigurator.$inject = ['$stateProvider'];

    console.log('carConfigurator');

})();
