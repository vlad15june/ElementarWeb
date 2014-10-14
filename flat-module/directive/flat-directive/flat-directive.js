angular.module('faltModule').directive('flatDirective', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {

		},
		templateUrl: 'flat-module/directive/flat-directive/flat-directive.html',
		link: function(scope, element, attrs, fn) {


		}
	};
});
