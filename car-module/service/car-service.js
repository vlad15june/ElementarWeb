(function() {
    'use strict';

    // JAVASCRIPT
	function carServices($http, dataService){

        // Private
        
        var branch = null;
        var branchType = null;
        
        var startDate = new Date();
        var finishDate = startDate.clone().addYears(1);
        
        var calcOut = [];
            
        var carTypes = [];
        var selectedCarType = null;
        
        var carManufacturers = [];
        var selectedCarManufacturer = null;
        
        var carManufacturingYears = [];
        var selectedCarManufacturingYear = null;
        
        var modelsLs = [];
        var selectedModel = null;
        var selectedModelCode = null;
        
        var carOwnership = null;
        
        var experience = null;
        var age = null;
        var drivesNum = null;
        
        var gir = null;
        
        var allData = [];
        
        var booleanCovergesLs = [];
        var selectableCovergesLs = [];
        var noClaimsBonus = null;
        
        var engineVolumeFlag = null;
        
        var weigthFlag = null;
        
        var viewState = {
            modelCodeIsDisabled : false,
            carTypeIsDisabled : false,
            carManufacturerIsDisabled : true,
            carManufacturingYearsIsDisable : true,
            modelsLsIsDisabled : true,
            engineVolumeIsEnabled : false,
            weigthFlagIsEnabled : false,
            
            carDetailsPanelIsOpen : true,
            carAdditionsPanelIsOpen : false,
            carDiscountsPanelIsOpen : false
        };
        
        var calcOutErr = null;
        
        function reset(){
            
            viewState.modelCodeIsDisabled = false;
            viewState.carTypeIsDisabled = false;
            viewState.carManufacturerIsDisabled = true;
            viewState.carManufacturingYearsIsDisable = true;
            viewState.modelsLsIsDisabled = true;
            viewState.engineVolumeIsEnabled = false;
            viewState.weigthFlagIsEnabled = false;
            
            calcOut = [];
            carTypes = [];
            selectedCarType = null;
            carManufacturers = [];
            selectedCarManufacturer = null;
            carManufacturingYears = [];
            selectedCarManufacturingYear = null;
            modelsLs = [];
            selectedModel = null;
            selectedModelCode = null;
            carOwnership = null;
            gir = null;
            allData = [];
            booleanCovergesLs = [];
            engineVolumeFlag = null;
            weigthFlag = null;
            
            calcOutErr = null;
            
            getCarTypes();
            getCoveragesData (branch, branchType);
            
        }
        
        function getViewState(){
            return viewState;
        }
        
        /**
        *    car type service, no parameters
        */
        function getCarTypes() {
            
            dataService.doGet('carType', [])
            .then(function (data){
                  carTypes = data.data;
            });   
        }

       function getCarManufacturers(value) {
           var promise = dataService.doGet('manufacture', value);          
           promise.then(function (data){
                carManufacturers = data.data;
           });
        }
        
        
        function getCarManufacturingYears(startDate, manufacturerId){
            var promise = dataService.doGet('CarManufacturingYears',[startDate.toYMD(), manufacturerId]);
            promise.then(function(data) {
                carManufacturingYears = data.data;
            });
        }
        
        function getModelsLs(startDate, manufacturerId, manufacturingYear) {
            
           var promise = dataService.doGet('CarModels', [startDate.toYMD(), manufacturerId, manufacturingYear]);                           
            promise.then(function(data) {
                modelsLs = data.data;
            });
        }
        
        function getManufacturingYearsByModel(startDate, modelId) {
            
           var promise = dataService.doGet('YearsByModel',[startDate.toYMD(), modelId]);
                           
            promise.then(function(data) {
                carManufacturingYears = data.data;
            });  
        }
        
        // all car data by startDate, selected manufacturing year and modelId
        function getAllModelDataByYear(startDate, modelId, year) {
            
            var promise = dataService.doGet('CarModelAllDataByYear', [startDate.toYMD(),year,modelId]);
            promise.then(function(data) {
                allData = data.data;
                selectedModelCode = allData[0].carTypeId;
                
                if(allData[0].weigthFlag === '00000'){
                    viewState.weigthFlagIsEnabled = false;
                    viewState.engineVolumeIsEnabled = true;
                }else if(allData[0].engineVolumeFlag === '00000'){
                    viewState.weigthFlagIsEnabled = true;
                    viewState.engineVolumeIsEnabled = false;            
                }
            }); 
           
        }
        
        function getCoveragesData (branch, branchType) {
            var promise = dataService.doGet('CoveragesData',[branch, branchType]);
                                            
            promise.then(function(data) {
                booleanCovergesLs = data.data;
            });                  
        }
 
        function premiumCalc (){   
            
            calcInput.pi3.es_KOD_DEGEM = selectedModelCode;
            calcInput.pi3.es_SHNAT_YZUR = selectedCarManufacturingYear;
            calcInput.pi3.es_AUTO = gir;
            calcInput.pi3.es_BAALUT = carOwnership;
            calcInput.pi3.es_STD8 = startDate.as400format();
            
            if(noClaimsBonus === '3'){
                 calcInput.pi3.es_TVY1 =
                 calcInput.pi3.es_TVY2 = 
                 calcInput.pi3.es_TVY3 = 0;
            }else if(noClaimsBonus === '2'){
                 calcInput.pi3.es_TVY1 = 
                 calcInput.pi3.es_TVY2 = 0;
                 calcInput.pi3.es_TVY3 = 1;                 
            }else if(noClaimsBonus === '1'){
                 calcInput.pi3.es_TVY1 = 0;
                 calcInput.pi3.es_TVY2 = 
                 calcInput.pi3.es_TVY3 = 1;               
            }else{
                 calcInput.pi3.es_TVY1 =
                 calcInput.pi3.es_TVY2 = 
                 calcInput.pi3.es_TVY3 = 1;           
            }
            
            calcInput.pi3.es_VETEK_ZAIR = experience;
            calcInput.pi3.es_GIL_ZAIR = age;
            calcInput.pi3.es_NEHAGIM = drivesNum;
            
            dataService.doPost('esrmhllb', calcInput)
            .success(function (data) {
                console.log(data);
                calcOut = data;
                calcOutErr = null;
            })
            .error(function (errMsg) {
            
                console.log(errMsg);
                calcOutErr = errMsg;
            });
        } 
        
        // Public API
        var service = {
          
            getCarTypes: getCarTypes,
            
            getCoveragesData : getCoveragesData,
            
            premiumCalc : premiumCalc,
            
            reset : reset,
            
            getViewState : getViewState,
            
            set drivesNum(num){
                drivesNum = num;
            },
            get drivesNum(){
                return drivesNum;
            },
            set age(ageValue){
                age = ageValue;
            },
            get age(){
                return age;
            },
            set experience(experienceValue){
                experience = experienceValue;
            },
            get experience(){
                return experience;
            },
            set branch (branchNum) {
                branch = branchNum;
            },
            get branch(){
                return branch;
            },
            set branchType (branchTypeNum) {
                branchType = branchTypeNum;
            },
            get branchType(){
                return branchType;
            },
            
            get finishDate(){
                return finishDate;
            },
            
            get startDate(){
                return startDate;
            },
            
            set startDate(date){
                if( !date.equalsDay(startDate) ){
                    reset();
                    startDate = date;
                    finishDate = date.clone().addYears(1);
                }
  
            },
            
            get calcOut() {
                return calcOut;
            },
            
            get carTypes(){
                return carTypes;
            },
            
            set carTypes(typeArr){
                carTypes = typeArr; 
            },
            
            set selectedCarType(carType){
                selectedCarType = carType;
                viewState.carManufacturerIsDisabled = false;
                getCarManufacturers([carType]);
            },
            get selectedCarType(){
                return selectedCarType;
            },
            
            // car manufacturers
            get carManufacturers(){
                return carManufacturers;
            },
            set carManufacturers(manufacturersArr){
                carManufacturers = manufacturersArr;
            },
            set selectedCarManufacturer(manufacturer){
                selectedCarManufacturer = manufacturer;
                getCarManufacturingYears(startDate, manufacturer);
                viewState.carManufacturingYearsIsDisable = false;
                
            },
            get selectedCarManufacturer(){
                return selectedCarManufacturer;
            },
            
            // selected car manufacturing year
            set selectedCarManufacturingYear(year) {
                
                selectedCarManufacturingYear = year;
                getModelsLs(startDate, selectedCarManufacturer, year);
                viewState.modelsLsIsDisabled = false;
                
            },
            
            get selectedCarManufacturingYear() {
                return selectedCarManufacturingYear;
            },
            
            // car manufacturing year's list
            get carManufacturingYears() {
                return carManufacturingYears;
            },
            
            // car model's list
            get modelsLs() {
                return modelsLs;
            },
            
            // selected car model
            set selectedModel(model) {
                
                selectedModel = model;
                getManufacturingYearsByModel(startDate, model);
                getAllModelDataByYear(startDate, model, selectedCarManufacturingYear);
                
                viewState.carManufacturerIsDisabled = 
                viewState.carTypeIsDisabled =
                viewState.modelsLsIsDisabled =                 
                viewState.modelCodeIsDisabled = true;
                
            },
            get selectedModel() {
                return selectedModel;
            },
            
            // all car data
            get allData() {
                return allData;
            },
            set allData(data) {
                allData = data;
            },
            
            // selected model code
            
            set selectedModelCode(modelCode) {
                selectedModelCode = modelCode;
            },
            get selectedModelCode() {
                return selectedModelCode;
            },
            
            // coverages
            get booleanCovergesLs() {
                return booleanCovergesLs;
            },
            get selectableCovergesLs() {
                return selectableCovergesLs;
            },
            set noClaimsBonus(noClaimsValue){
                noClaimsBonus = noClaimsValue;

            },
            get noClaimsBonus(){
                return noClaimsBonus;
            },
            
            set carOwnership(owner) {
                carOwnership = owner;
            },
            get carOwnership() {
                return carOwnership;
            },
            
            get gir() {
                return gir;
            },
            set gir( selectedGir) {
                gir = selectedGir;
            },
            
            get viewState(){
                return viewState;
            },
            
            set viewState(state){
                viewState = state; 
            },
            
            get calcOutErr(){
                return calcOutErr;
            }
            
        };

var calcInput =         
{	"pi1":{
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
	},
	"pi3":{
		"es_KIUM_ANAF_NOSAF":1,
		"es_SUG_BTUACH":1,
	//	"es_GIL_ZAIR":30,
	//	"es_VETEK_ZAIR":2,
		"es_ESP":0,
		"es_ANAF":25,
		"es_KOLKTIV":0,
	//	"es_NEHAGIM":9,
		"es_NO_KISUIM":3,
		"es_TV_KISUIM":{
			"es_TV_KISUIM_O":[
				{"es_SADOT_HALON":
					{
						"es_SADOT_HALON_O":
						[
							{"es_ERECH_HALON":""},
							{"es_ERECH_HALON":""},
							{"es_ERECH_HALON":""}
						]
					},
					"es_MIUN_K":0,
					"es_MSPR_KISUY_K":6600,
					"es_RAZ_KISUY_K":0,
					"es_SUM_BTUACH_K":0,
					"es_PREMIA_K":0,
					"es_PRITIM_ERECH_K":0,
					"es_MAKIF_ZADG_K":1,
					"es_HALON_SADOT_NO":0,
					"es_ERECH_TEXT":""
				},
				{
					"es_SADOT_HALON":
						{"es_SADOT_HALON_O":
							[
								{"es_ERECH_HALON":""},
								{"es_ERECH_HALON":""},
								{"es_ERECH_HALON":""}
							]
						},
					"es_MIUN_K":0,
					"es_MSPR_KISUY_K":6740,
					"es_RAZ_KISUY_K":0,
					"es_SUM_BTUACH_K":0,
					"es_PREMIA_K":0,
					"es_PRITIM_ERECH_K":0,
					"es_MAKIF_ZADG_K":1,
					"es_HALON_SADOT_NO":0,
					"es_ERECH_TEXT":""
				},
				{
					"es_SADOT_HALON":
						{"es_SADOT_HALON_O":
							[
								{"es_ERECH_HALON":""},
								{"es_ERECH_HALON":""},
								{"es_ERECH_HALON":""}
							]
						},
					"es_MIUN_K":0,
					"es_MSPR_KISUY_K":6750,
					"es_RAZ_KISUY_K":0,
					"es_SUM_BTUACH_K":0,
					"es_PREMIA_K":0,
					"es_PRITIM_ERECH_K":0,
					"es_MAKIF_ZADG_K":1,
					"es_HALON_SADOT_NO":0,
					"es_ERECH_TEXT":""
				},
			]}}
};    
        
        
        
        
        return service;

    }

    // ANGULAR
    angular.module('carModule')
        .factory('carServices', carServices);

    // Angular to Javascript
    carServices.$inject = ['$http', 'dataService'];

    console.log('carServices');

})();


