sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
  ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast) {
        "use strict";
 
        return Controller.extend("project1.controller.View5", {
            onInit: function () {
 
            },
            onLogOut: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this); oRouter.navTo("View2");
            },
            onAddToWishListPress: function (oEvent) {




                var firstName = this.getView().getModel("localdata").getProperty("/user/firstName");
               
                console.log(firstName)
               
                if (firstName == "Sir") {
               
                MessageBox.error("Please Login First !");
               
                let Router2 = sap.ui.core.UIComponent.getRouterFor(this);
               
                Router2.navTo("Wishcart");
               
               
               
               
                } else {
               
               
               
               
               
               
                var oProduct = oEvent.getSource().getBindingContext("localdata").getObject();
               
               
               
               
                var owishlist = this.getView().getModel("localdata").getProperty("/wishlist");
               
               
               
               
                owishlist.push(oProduct);
               
               
               
               
                this.getView().getModel("localdata").setProperty("/wishlist", owishlist);
               
                var wishlist = this.getView().getModel("localdata").getProperty("/wishlist");
               
                if (wishlist.length > 0) {
               
                this.getView().getModel("localdata").setProperty("/wishlistvisbi/visibilty", true)
               
                this.getView().getModel("localdata").setProperty("/wishlistvisbi/messagevisibilty", false)
               
                }
               
               
               
               
                MessageToast.show("Product added to the Wishlist.");
               
                let nd = this.getView().getModel("localdata").getProperty("/wishlist");
               
                console.log(nd);
               
                }
               
                },
         
           
 
               
           
 
        });
    });