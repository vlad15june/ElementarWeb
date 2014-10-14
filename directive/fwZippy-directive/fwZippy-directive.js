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

angular.module('app')
 .directive('fwZippy', function(){
    return {
      restrict: 'EA',
      replace: true,
      transclude: true,
      scope: {
          isOpen:'@ngModel',
          title:'@fwZippy'
          
      },
      templateUrl: 'directive/fwZippy-directive/fwZippy-directive.html',
        
      link: function(scope, element, attrs) {
                         
        // Header element
        var zippyHeader = angular.element(element.children()[0]),
            // Opened / closed state
            opened = !scope.isOpen;
          
        if(scope.isOpen === undefined) {
            opened = true;
        }
          
          
        // Toggle the closed/opened state with slide effect.
        function toggle() {
            
            toggleHeader();
            toggleBody();
            
            return false;
        } // end toggle function 
          
         // Clicking on header should open/close the zippy
        zippyHeader.bind('click', toggle);
          
        var slideDuration = parseInt(attrs.duration, 10) || 300;
   
        function toggleHeader(){
            
          opened = !opened;
            
          zippyHeader.removeClass(opened ? 'fw-zippy-header closed' : 'fw-zippy-header opened');
          zippyHeader.addClass(opened ? 'fw-zippy-header opened' :  'fw-zippy-header closed' );
         
        }  
        
        function toggleBody() {
           
            var zippyBody = angular.element(element.children()[1]);
                       
            zippyBody.stop().slideToggle(slideDuration);
        }
          
         
      
        function init() {
           
            toggleHeader();
            
            var zippyBody = angular.element(element.children()[1]);
            if(!opened){
                zippyBody.toggle();
            }
            return false;
          
        } // end init function

        // initialize the zippy
        init();
        
      } // end Link function
    };
  });