sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller,MessageToast) {
      "use strict";

      return Controller.extend("project1.controller.View3", {
          onInit: function () {

          },
          newUser: function(){



            var id = Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
          
          
          
              var oModel = new sap.ui.model.odata.ODataModel("/catalog", true);
          
               
          
                          sap.ui.getCore().setModel(oModel);
          
               
          
                          var oEntry = {};
          
          
          
                          oEntry.u_Id = id;
          
          
          
                          // MessageBox.success("const ");
          
          
          
                          oEntry.username = this.getView().byId("inp_username").getValue();
          
               
          
                          oEntry.password = this.getView().byId("inp_password").getValue();
          
          
          
                          oEntry.mail = this.getView().byId("inp_mail").getValue();
          
                           
          
                          oEntry.phone = this.getView().byId("inp_phone").getValue();
          
          
          
                          var repass = this.getView().byId("inp_repassword").getValue();
          
          
          
          
          
                          if(oEntry.username === '')
          
                          {
          
                            MessageBox.error("Enter username");
          
                            return;
          
                          }
          
          
          
                          else if(oEntry.password === '')
          
                          {
          
                            MessageBox.error("Enter password");
          
                            return;
          
                          }
          
          
          
                          else if (oEntry.password === '' && oEntry.username === '' && oEntry.mail === '' && oEntry.phone === '' && repass === '')
          
                          {
          
                            MessageBox.error("Enter the details");  
          
                            return;
          
                          }
          
          
          
                          else if(oEntry.password != repass)
          
                          {
          
                            MessageBox.error("Password does not match");
          
                            return;
          
                          }
          
          
          
          
          
             
          
          
          
                          oModel.create("/dt_user", oEntry, {
          
               
          
                              success: function (odata) {
          
                 
          
                                // User Added
          
                 
          
                                MessageBox.success("User Added");
          
          
          
                                this.getView().byId("inp_username").setValue("");
          
               
          
                                this.getView().byId("inp_password").setValue("");
          
          
          
                                this.getView().byId("inp_mail").setValue("");
          
          
          
                                this.getView().byId("inp_phone").setValue("");
          
          
          
                              },
          
          
          
                              error: function (oError) {
          
               
          
                                  // There was some error. Retry!
          
          
          
                                  MessageBox.error("There was some error. Retry!");
          
                             
          
                              }
          
               
          
                          });
          
          
          
                         
          
                      }
                  });
              });
             
       
         

             
         
