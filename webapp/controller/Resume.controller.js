sap.ui.define([
	"com/wakefern/znavigation/controller/BaseController",
	"sap/ui/model/json/JSONModel"
	// Allow Bookmarkable Tabs with Optional Query Parameters
	//A dependency to sap/ui/model/json/JSONModel is added to the controller.
	// Now, we modify the onInit function to instantiate a JSONModel and use it as the view model.

], function (BaseController, JSONModel) {
	"use strict";
	var _aValidTabKeys = ["Info", "Projects", "Hobbies", "Notes"]
	return BaseController.extend("com.wakefern.znavigation.controller.Resume", {
		onInit: function () {
			var oRouter = this.getRouter();
			this.getView().setModel(new JSONModel(), "view");
			oRouter.getRoute("employeeResume").attachPatternMatched(this._onRouteMatched, this);
		},
		_onRouteMatched: function (oEvent) {
			var oArgs, oView, oQuery;
			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();
			oView.bindElement({
				path: "/Employees(" + oArgs.employeeId + ")",
				model: "employeesModel",
				events: {
					change: this._onBindingChange.bind(this),
					dataRequested: function (oEvent) {
						oView.setBusy(true);
					},
					dataReceived: function (oEvent) {
						oView.setBusy(false);
					}
				}
			});
			oQuery = oArgs["?query"];
			if (oQuery && _aValidTabKeys.indexOf(oQuery.tab) > -1) {
				oView.getModel("view").setProperty("/selectedTabKey", oQuery.tab);
				// support lazy loading for the hobbies and notes tab
				if (oQuery.tab === "Hobbies" || oQuery.tab === "Notes") {
					// the target is either "resumeTabHobbies" or "resumeTabNotes"
					this.getRouter().getTargets().display("resumeTab" + oQuery.tab);
				}
			} else {
				// the default query param should be visible at all time
				this.getRouter().navTo("employeeResume", {
					employeeId: oArgs.employeeId,
					"?query": {
						tab: _aValidTabKeys[0]
					}
				}, true /*without history*/ );
			}

			//determine image url
			setTimeout(function () {
				var oAvatar = this.getView().byId("idAvatar");
				var productEntityPath = "/Products(" + oArgs.employeeId + ")";
				var jsonproductEntityPath =  "/ProductCollection/" + oArgs.employeeId;
				var oDataNorthWindModel = this.getView().getModel("employeesModel");
				var oJSonModel = this.getView().getModel("products");
				/*  oDataNorthWindModel.read(productEntityPath, {
					success: function (oData) {
						console.log(oData);
						if (oData && oData.ProductPicUrl) {
							// set the avatar source property ProductPicUrl not available in Northwind
							oAvatar.setSrc(oData.ProductPicUrl);
						}
						else {
							 oAvatar.setSrc("https://ui5.sap.com/test-resources/sap/ui/documentation/sdk/images/HT-1118.jpg");
						}

					},
					error: function (oError) {
						console.log(oError);
						// remove or reset the avator source
						oAvatar.setSrc();
					}
				}); */
				var oJsonproperty = oJSonModel.getProperty(jsonproductEntityPath);
				//  oAvatar.setSrc("https://ui5.sap.com/" + oJsonproperty.ProductPicUrl);
				// array read
				var allResults = oJSonModel.getProperty("/ProductCollection");
				allResults.forEach(function (result, index) {
					if (Number(result.EmployeeId) > 0 && Number(result.EmployeeId) === Number(oArgs.employeeId	) ) {
					 	oAvatar.setSrc("https://ui5.sap.com/" + result.ProductPicUrl);
					}
				}); 
			}.bind(this), 200);

		},

		_onBindingChange: function (oEvent) {
			// No data for the binding
			if (!this.getView().getBindingContext("employeesModel")) {
				this.getRouter().getTargets().display("notFound");
			}
		},
		onTabSelect: function (oEvent) {
			var oCtx = this.getView().getBindingContext("employeesModel");
			this.getRouter().navTo("employeeResume", {
				employeeId: oCtx.getProperty("EmployeeID"),
				"?query": {
					tab: oEvent.getParameter("selectedKey")
				}
			}, true /*without history*/);
		}
	});
});