sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent",
	"com/wakefern/znavigation/utils/formatter"
], function(Controller, History, UIComponent, formatter) {
	"use strict";

	return Controller.extend("com.wakefern.znavigation.controller.BaseController", {
        formatter: formatter,
		getRouter : function () {
		//	console.log("Base controller get router ");
			return UIComponent.getRouterFor(this);
		},

		onNavBack: function () {
			var oHistory, sPreviousHash;
			

			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("appHome", {}, true /*no history*/);
			}
		}

	});

});