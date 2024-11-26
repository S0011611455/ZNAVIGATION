sap.ui.define([
   //In order to reuse the base controller implementation, we have to change the dependency 
   //from sap/ui/core/mvc/Controller to sap/ui/demo/nav/controller/BaseController and directly extend the base controller.
   //At this point you can open index.html#/thisIsInvalid in your browser and press the Back button to see what happens.
   // You will be redirected to the app’s home page that is matched by the route appHome as you opened the Not Found page with an invalid hash. 
   //If you change the hash to something invalid when you are on the home page of the app, you will also go to the Not Found page but with a history entry. 
   //When you press back, you will get to the home page again, but this time with a native history navigation.
   // "sap/ui/core/mvc/Controller"
    "com/wakefern/znavigation/controller/BaseController"
 ], function (BaseController) {
    "use strict";
    return BaseController.extend("com.wakefern.znavigation.controller.NotFound", {
       onInit: function () {
         var oRouter, oTarget;
		    console.log("notFound")
			oRouter = this.getRouter();
			oTarget = oRouter.getTarget("notFound");
			oTarget.attachDisplay(function (oEvent) {
				this._oData = oEvent.getParameter("data");	// store the data
			}, this);
		},

		// override the parent's onNavBack (inherited from BaseController)
		onNavBack : function () {
			// in some cases we could display a certain target when the back button is pressed
			if (this._oData && this._oData.fromTarget) {
				this.getRouter().getTargets().display(this._oData.fromTarget);
				delete this._oData.fromTarget;
				return;
			}

			// call the parent's onNavBack
			BaseController.prototype.onNavBack.apply(this, arguments);
		 
       }
    });
 });