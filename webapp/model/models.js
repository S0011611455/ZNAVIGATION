// @ts-nocheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
],
    /**
     * provide app-view type models (as in the first "V" in MVVC)
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.Device} Device
     * 
     * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
     */
    function (JSONModel, Device) {
        "use strict";
      
        return {
            createDeviceModel: function () {
                var oModel = new sap.ui.model.json.JSONModel(Device);
                // @ts-ignore
                oModel.setDefaultBindingMode("OneWay");
                return oModel;
            },
            createLocalModel: function () {
                var oProductsModel; var oProductsModelPath;
                oProductsModelPath = sap.ui.require.toUrl("com/wakefern/znavigation/model/Products.json");
                oProductsModel = new sap.ui.model.json.JSONModel();
                oProductsModel.loadData(oProductsModelPath);
                oProductsModel.setSizeLimit(1000);
                return oProductsModel;
            }
        };
    });