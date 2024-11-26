sap.ui.define([
	"com/wakefern/znavigation/controller/BaseController",
	"com/wakefern/znavigation/utils/formatter"
], function (BaseController,formatter) {
	"use strict";

	return BaseController.extend("com.wakefern.znavigation.controller.ProductList", {
       formatter: formatter,
	   onInit: function () {
 


	 
	},
	onRoutMatch: function (oEvent) {
		//this.loadJsonModel();
		 
	},
	onGoPressed: function () {
		
		//this.loadJsonModel();  
	},
		onAfterRendering : function (){
	//		console.log("Employee List View rendered");
			
		},
		
	});
	
});