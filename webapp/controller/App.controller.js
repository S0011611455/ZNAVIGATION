sap.ui.define([
     "com/wakefern/znavigation/controller/BaseController",
	"sap/base/Log"
],
    
    function (BaseController,Log) {
        "use strict";

        return BaseController.extend("com.wakefern.znavigation.controller.App", {
            onInit: function () {
                // we need to do is listen to the bypassed event on the router. 
                //If the bypassed event is triggered, we simply get the current hash and log a message. 
                //In an actual app this is probably the right place to add some application analysis features, 
                //i.e. sending analytical logs to the back end for later evaluation and processing.
                // This could be used to improve the app, for example, to find out why the user called the app with an invalid hash.
                // This is ONLY for being used within the tutorial.
			// The default log level of the current running environment may be higher than INFO,
			// in order to see the debug info in the console, the log level needs to be explicitly
			// set to INFO here.
			// But for application development, the log level doesn't need to be set again in the code.
			//Log.setLevel(Log.Level.INFO);

			var oRouter = this.getRouter();

			oRouter.attachBypassed(function (oEvent) {
				var sHash = oEvent.getParameter("hash");
				// do something here, i.e. send logging data to the backend for analysis
				// telling what resource the user tried to access...
			//	Log.info("Sorry, but the hash '" + sHash + "' is invalid.", "The resource was not found.");
			});
            //Listen to Matched Events of Any Route
            oRouter.attachRouteMatched(function (oEvent){
				var sRouteName = oEvent.getParameter("name");
				// do something, i.e. send usage statistics to back end
				// in order to improve our app and the user experience (Build-Measure-Learn cycle)
			//	Log.info("User accessed route " + sRouteName + ", timestamp = " + Date.now());
			});

            }
        });
    });
