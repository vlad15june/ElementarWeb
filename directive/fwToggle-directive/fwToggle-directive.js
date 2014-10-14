//angular.module('app').directive('appDirective', function() {
//	return {
//		restrict: 'E',
//		replace: true,
//		scope: {
//
//		},
//		templateUrl: 'directive/app-directive/app-directive.html',
//		link: function(scope, element, attrs, fn) {
//
//
//		}
//	};
//});

 /* mobile style toggle */
 /* Super Simple Fancy Checkbox Plugin @Dave Macaulay, 2013 
http://davemacaulay.com/jquery-simple-checkbox-replacement-jquery-simplecheckbox-js/ */
angular.module('app')
.directive('fwToggle', function() {
    var checkedClass = 'on';
    return{
        restrict: 'EA',
        replace: true,
        require: '^ngModel',
        scope:{
            isChecked: '=ngModel'
            
        },
        template:'<div class="tog" style="display:block;"></div>',
        compile: function(tElement, tAttrs) {
            
            return{
                 pre: function(scope, element, attributes, controller, transcludeFn){
                    if(scope.isChecked){
                        element.addClass(checkedClass);
                     }
                    
                 },
                 post: function(scope, element, attributes, controller, transcludeFn){
                    element.bind('click', function(){
                        
                        if(element.hasClass(checkedClass)){
                            element.removeClass(checkedClass);
                            scope.isChecked = false;
                        }else{
                            element.addClass(checkedClass);
                            scope.isChecked = true;
                        }
                        
                        // apply changes
                        scope.$apply();
                        
                        //Kill the click function
                        return false; 
                    });
                 }           
            };
        },
        controller: function($scope){

        }
    };
});