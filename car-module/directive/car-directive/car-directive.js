angular.module('carModule').directive('carDirective', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {

		},
		templateUrl: 'car-module/directive/car-directive/car-directive.html',
		link: function(scope, element, attrs, fn) {


		}
	};
});
