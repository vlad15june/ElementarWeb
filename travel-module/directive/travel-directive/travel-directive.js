angular.module('travelModule').directive('travelDirective', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {

		},
		templateUrl: 'travel-module/directive/travel-directive/travel-directive.html',
		link: function(scope, element, attrs, fn) {


		}
	};
});
