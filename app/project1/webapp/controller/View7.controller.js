sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
  ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast) {
        "use strict";
 
        return Controller.extend("project1.controller.View7", {
            onInit: function () {
 
            },
            onLogOut: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this); oRouter.navTo("View2");
            },
            
         
           
 
               
           
 
        });
    });