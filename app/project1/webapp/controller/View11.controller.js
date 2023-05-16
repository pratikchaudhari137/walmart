sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/Device",
    "sap/ui/model/json/JSONModel"
], function (Controller, Device, JSONModel) {
    "use strict";

    return Controller.extend("project1.controller.View11", {

        onInit: function () {
           
                       
var dataModel = this.getOwnerComponent().getModel("tableData");
            this.getView().setModel(dataModel, "DataModel");



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
   
    Router2.navTo("Wishlist");
   
   
   
   
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


    // add to cart code


onAddToCartPress: function (oEvent) {


    var oRouter = sap.ui.core.UIComponent.getRouterFor(this); oRouter.navTo("Wishlist");

    //  var firstName = this.getView().getModel("localdata").getProperty("/user/firstName");
    
    //  if (firstName == "Sir") {
    
    //  MessageBox.error("Please Login First !");
    
    //  let Router2 = sap.ui.core.UIComponent.getRouterFor(this);
    
    //  Router2.navTo("Wishcart");
    
    
    
    
    //  } else {
    
    
    
    
    
    
    //  var oProduct = oEvent.getSource().getBindingContext("localdata").getObject();
    
    
    
    
    //  var oCart = this.getView().getModel("localdata").getProperty("/cart");
    
    
    
    
    //  oCart.push(oProduct);
    
    
    
    
    //  this.getView().getModel("localdata").setProperty("/cart", oCart);
    
    
    
    
    //  MessageToast.show("Product added to cart.");
    
    //  // let nd = this.getView().getModel("localdata").getProperty("/cart");
    
    //  // console.log(nd);
    
    //  }
    
    
    },

    
});
});