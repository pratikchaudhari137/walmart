sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/Device",
    "sap/ui/model/json/JSONModel"
], function (Controller, Device, JSONModel) {
    "use strict";

    return Controller.extend("project1.controller.View10", {

        onInit: function () {
           
            var dataModel = this.getOwnerComponent().getModel("tableData");
            this.getView().setModel(dataModel, "DataModel");

        },
        onLogOut: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this); oRouter.navTo("View2");
        },
       
    });
});    