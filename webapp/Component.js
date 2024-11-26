sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "sap/ui/model/json/JSONModel",
    "com/wakefern/znavigation/model/models"
],
    function (UIComponent, Device, models, JSONModel) {
        "use strict";

        return UIComponent.extend("com.wakefern.znavigation.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                var oModel;
                var oProductsModel; var oProductsModelPath;

                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);
                //     oModel = new JSONModel();
                //    this.setModel(oModel);
                // set the device model
                //   this.setModel(models.createDeviceModel(), "device");

                oProductsModelPath = sap.ui.require.toUrl("com/wakefern/znavigation/model/Products.json");
                oProductsModel = new sap.ui.model.json.JSONModel();
                oProductsModel.loadData(oProductsModelPath);
                oProductsModel.setSizeLimit(1000);
                 // set the local  model
                 this.setModel(oProductsModel   , 'products');
                // enable routing
                this.getRouter().initialize();
            }
        });
    }
);