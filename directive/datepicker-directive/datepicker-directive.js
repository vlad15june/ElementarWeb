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

angular.module('app').directive('fwDatepicker', function() {
    
    function datepickerClearButton (input) {
        setTimeout(function () {
            var buttonPane = $(input)
            .datepicker("widget")
            .find(".ui-datepicker-buttonpane");

            $("<button>", {
                text: "ללא תאריך",
                click: function () { jQuery.datepicker._clearDate(input); }
            }).appendTo(buttonPane).addClass("ui-datepicker-clear ui-state-default ui-priority-primary ui-corner-all ");
           
            $('<style type="text/css"> .ui-datepicker-close { display: none; } </style>').appendTo("head");
        }, 1);
    }
    
    //override the existing _goToToday functionality
    $.datepicker._gotoTodayOriginal = $.datepicker._gotoToday;
    $.datepicker._gotoToday = function(id) {
            // now, optionally, call the original handler, making sure
            //  you use .apply() so the context reference will be correct
            $.datepicker._gotoTodayOriginal.apply(this, [id]);
            $.datepicker._selectDate.apply(this, [id]);
    };
    return{
    
        require: '?ngModel',
        restrict: 'EA',
        replace: true,
        scope: {
            dateInput: '=ngModel'
        },
        link: function(scope, element, attrs, ngModel){
            
           
            if(!ngModel) { return; }
            
            $( function () {
                
                element.datepicker({
                    inline: true,
                    dateFormat: 'dd/mm/yy',
                    isRTL: true,
                    changeMonth: true,
                    changeYear: true,
                    yearRange: "1900:2090",
                    showOn: "both",
                    buttonImage: "images/heb/fw/I_Date.jpg",
                    buttonImageOnly: false,
                    showButtonPanel: true,
                    showAnim: "slideDown",
                    beforeShowDay: function(date) {
                        var day = date.getDay();
                        return [(day !== 6), ''];
                    },
                    showOtherMonths: true,
                    onSelect: function(date){
                        
                        var d = $.datepicker.parseDate('dd/mm/yy', date);
                        
                        scope.$apply(function(){
                        
                            ngModel.$setViewValue(d);
                        });
                    },
                    beforeShow: function (input) { 
                        datepickerClearButton(input);    

                    },
                    onChangeMonthYear: function (yy, mm, inst) { 
                        datepickerClearButton(inst.input); 

                    }
                    
                });
                //.datepicker("setDate", new Date());
            });
            
        } 
    };

});