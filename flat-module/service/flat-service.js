(function() {
    'use strict';

    // JAVASCRIPT
	function flatService($http, dataService){

        // Private
        
        var calcOut = [];
        
 var ESDMHLLBInput =       
{
    "pi3":{
        "es_TV_Y":0,
        "es_ANAF":180,
        "es_STD8":20141001,
        "es_SUG_KOMA":1,
        "es_TV_KISUIM":{
            "es_TV_KISUIM_O":[
                {
					"es_MIUN_K":0,
					 "es_MSPR_KISUY_K":5100,
					 "es_RAZ_KISUY_K":0,
					 "es_SUM_BTUACH_K":100000,
					 "es_PREMIA_K":0,
					 "es_PRITIM_ERECH_K":100000,
					 "es_HALON_SADOT_NO":0,
					 "es_SADOT_HALON":{
						 "es_SADOT_HALON_O":[
							 {"es_ERECH_HALON":""},
							 {"es_ERECH_HALON":""},
							 {"es_ERECH_HALON":""}
						 ]
					 },
					 "es_ERECH_TEXT":""
				 },
				 {
					"es_MIUN_K":0,
					"es_MSPR_KISUY_K":10010,
					"es_RAZ_KISUY_K":0,
					"es_SUM_BTUACH_K":70000,
					"es_PREMIA_K":0,
					"es_PRITIM_ERECH_K":0,
					"es_HALON_SADOT_NO":0,
					"es_SADOT_HALON":{
						"es_SADOT_HALON_O":[
							{"es_ERECH_HALON":""},
							{"es_ERECH_HALON":""},
							{"es_ERECH_HALON":""}
						]
					},
					"es_ERECH_TEXT":""
				},
				{
					"es_MIUN_K":0,
					"es_MSPR_KISUY_K":5120,
					"es_RAZ_KISUY_K":0,
					"es_SUM_BTUACH_K":0,
					"es_PREMIA_K":0,
					"es_PRITIM_ERECH_K":0,
					"es_HALON_SADOT_NO":0,
					"es_SADOT_HALON":{
						"es_SADOT_HALON_O":[
							{"es_ERECH_HALON":""},
							{"es_ERECH_HALON":""},
							{"es_ERECH_HALON":""}
						]
					},
					"es_ERECH_TEXT":""
				}
			]
		},
		"es_NO_KISUIM":3
	},
	
	"pi1":{
		"pi1_ESACC1":470441,
		"pi1_ESACC2":0,
		"pi1_ESBOXN":1,
		"pi1_ESKDMK":0,
		"pi1_ESKODB":2,
		"pi1_ESMHOZ":4,
		"pi1_ESPEUL":1,
		"pi1_ESSVIV":1,
		"pi1_ESTASK":3005,
		"pi1_ESUSER":"TSTHATAM",
		"pi1_ESUSRK":1,
		"pi1_ESCOMP":1,
		"pi1_ESFILR":"MIGTST"
	}
};
        
        
      function premiumCalc (){        
            dataService.doPost('esdmhllb', ESDMHLLBInput)
            .success(function (data) {
                console.log(data);
                calcOut = data; 
            }).error(function (err) {
                console.log(err);
            });
        }       
        
        
        // Public API
        var service = {
            premiumCalc : premiumCalc,
            get calcOut() {
             
                return calcOut;
            }
        };
        
        return service;
        
}
    
    // ANGULAR
    angular.module('flatModule')
        .factory('flatService', flatService);

    // Angular to Javascript
    flatService.$inject = ['$http', 'dataService'];

    console.log('flatService');
    
    
})();

