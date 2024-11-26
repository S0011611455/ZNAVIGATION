sap.ui.define([
	"com/wakefern/znavigation/controller/BaseController",
	"com/wakefern/znavigation/utils/formatter"
], function (BaseController,formatter) {
	"use strict";

	return BaseController.extend("com.wakefern.znavigation.controller.EmployeeList", {
       formatter: formatter,
		onAfterRendering : function (){
	//		console.log("Employee List View rendered");
			
		},
		onItemPressed : function(oEvent){
			var oItem, oCtx;
			oItem = oEvent.getSource();
			oCtx = oItem.getBindingContext("employeesModel");
			this.getRouter().navTo("employee",{
				employeeId : oCtx.getProperty("EmployeeID")
			});
		}
	});
	
});