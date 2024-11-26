//sap.ui.define([
//    "sap/ui/core/mvc/Controller",
//	"sap/ui/core/routing/History",
//	"sap/ui/core/UIComponent"
// ], function (Controller, History, UIComponent) {
//    "use strict";



// });
sap.ui.define([

	"com/wakefern/znavigation/controller/BaseController"
], function (BaseController) {
	"use strict";
	return BaseController.extend("com.wakefern.znavigation.controller.Home", {
		
		onDisplayNotFound: function () {
			console.log("NotFound");
			//display the "notFound" target without changing the hash
			this.getRouter().getTargets().display("notFound", {
				fromTarget: "home"
			});

		},
		onNavToEmployees: function () {

			 this.getRouter().navTo("employeeList");
			 
		},
		onNavToEmployeeOverview : function ()  {
			this.getRouter().navTo("employeeOverview");
		},
		onNavToProducts: function () {

			this.getRouter().navTo("productList");
			
	   }
	});
});