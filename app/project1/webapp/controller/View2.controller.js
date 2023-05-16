sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller,MessageToast,_oEvent) {
      "use strict";

      return Controller.extend("project1.controller.View2", {
          onInit: function () {

          },
          Home: function () {
              var oRouter = sap.ui.core.UIComponent.getRouterFor(this); oRouter.navTo("View4");
          },
          onSignUser: function () {
              var oRouter = sap.ui.core.UIComponent.getRouterFor(this); oRouter.navTo("View3");
          },
       
          onLoginUser: function () {
              var oModel = new sap.ui.model.odata.v4.ODataModel({ serviceUrl: "../../Catalog/", synchronizationMode: "None" });
              var oContext = oModel.bindContext("/dt_user");


              var username = this.getView().byId("inp_username");
              var password = this.getView().byId("inp_password");
              console.log(username.getValue(), password.getValue())
              var oRouter = this.getOwnerComponent().getRouter();

              var uname = username.getValue();
              this.getView().getModel("TempDataModel").setProperty("/", { "UserName": uname });

              oContext.requestObject().then(function (result) {
                  var size = result.value.length;
                  var i = 0;
                  while (i < size) {
                      var user = result.value[i].username;
                      var pass = result.value[i].password;
                      console.log(user, pass);
                      if (username.getValue() === "") {
                          MessageToast.show("Please enter username", { at: "center top" }); return;

                      }
                      if (password.getValue() === "") {
                          MessageToast.show("Please enter Password", { at: "center top" });
                          return;
                      }
                      if (username.getValue() === user && password.getValue() === pass) {
                          MessageToast.show("Congratulations!!! You have successfully Logged in...", { at: "center top" });
                           oRouter.navTo("View4");
                          break;
                      }
                      else {
                          MessageToast.show("Invalid username and password", { at: "center top" });
                          i++;
                      }
                  }
              })
          },
         

      });
  });