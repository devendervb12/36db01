sap.ui.controller("zdb01.CompanyData", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zdb01.CompanyData
*/
	onInit: function() {
	//instantiating json model	
      var oModel = new sap.ui.model.json.JSONModel();
    //loading json data into model
      oModel.loadData("model/companyData.json");
      
    // set the visibility of the model 
      this.getView().setModel(oModel);
     
    // refering to Text control  
     var otxt =  this.getView().byId("idCity");
  
    // property binding 
     otxt.bindProperty("text", "/city");
   //  otxt.setText("/city");
      
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zdb01.CompanyData
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zdb01.CompanyData
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zdb01.CompanyData
*/
//	onExit: function() {
//
//	}

});