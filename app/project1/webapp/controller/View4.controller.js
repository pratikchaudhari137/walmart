// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/m/MessageToast"
//   ],
//     /**
//      * @param {typeof sap.ui.core.mvc.Controller} Controller
//      */
//     function (Controller,MessageToast) {
//         "use strict";

//         return Controller.extend("project1.controller.View4", {
//             onInit: function () {

//             },
//            Footwear: function () {
//                 var oRouter = sap.ui.core.UIComponent.getRouterFor(this); oRouter.navTo("View5");
//             },

//         });
//     });
sap.ui.define(['sap/ui/core/mvc/Controller', 'sap/m/MessageToast'],
	function (Controller, MessageToast) {
		"use strict";

		var PageController = Controller.extend("sap.m.sample.SlideTile.Page", {
			pressOnTileOne: function (evt) {
				MessageToast.show("The generic tile one pressed.");
			},
			pressOnTileTwo: function (evt) {
				MessageToast.show("The generic tile two pressed.");
			},
			Mobiles: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this); oRouter.navTo("View5");
            },
			footwear: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this); oRouter.navTo("View6");
            },
			grocery: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this); oRouter.navTo("View7");
            },
			Beauty: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this); oRouter.navTo("View8");
            },
			Fashion: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this); oRouter.navTo("View9");
            },
			Kitchen: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this); oRouter.navTo("View10");
            },
			Electronics: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this); oRouter.navTo("View11");
            },
			onLogOut: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this); oRouter.navTo("View2");
            },
			onSearch: function (oEvent) {

				// add filter for search

				var aFilters = [];

				var sQuery = oEvent.getSource().getValue();

				if (sQuery && sQuery.length > 0) {

					var filter = new Filter("title", FilterOperator.Contains, sQuery);

					aFilters.push(filter);

				}



				// update list binding

				var oList = this.byId("list");

				var oBinding = oList.getBinding("items");

				oBinding.filter(aFilters);

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

		return PageController;
	});