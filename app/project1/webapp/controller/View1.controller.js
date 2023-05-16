sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageBox"],
    /**     
 *
  * @param {typeof sap.ui.core.mvc.Controller} Controller 
 */
    function (Controller,MessageBox) {
        "use strict"; return Controller.extend("project1.controller.View1",
            {
                onInit: function () { },
                onSignUser: function () {
                    var oRouter = sap.ui.core.UIComponent.getRouterFor(this); oRouter.navTo("View3"); },

                    onLoginUser: function () {
                        var oRouter = sap.ui.core.UIComponent.getRouterFor(this); oRouter.navTo("View2");
                    },

                 
                });
        });