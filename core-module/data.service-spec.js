describe('dataService Tests', function() {
    var $resource;
    var dataService;

    // excuted before each "it()" is run.
    beforeEach(function() {

        // load module (containing service & dependencies)
      //  module('ui.router');
        module('app.core');

        // inject your factory for testing
        inject(function(_$resource_, _dataService_) {
           dataService = _dataService_;
           $resource = _$resource_;
        });

    });

    // check to see if it has the expected function
    it('should have a doGet function', function() {
        expect(angular.isFunction(dataService.doGet)).toBe(true);
    });

    //check to see if it returns three notes initially
    it('should return null if no params provided', function() {
       // debugger
        var res = dataService.doGet()
            .then(function (data) {
                console.log(data);
                expect(data).not.toBe(null);
            })
            .catch(function (error) {
                console.error(error);
                expect(error).toBe(null);
            });
        
//        var result = 
//        console.log(result);
//        expect(result).toBe(null);
    });

});