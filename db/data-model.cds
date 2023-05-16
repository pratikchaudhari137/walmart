namespace my.bookshop;

using { managed } from '@sap/cds/common';
using { Currency } from '@sap/cds/common';




entity  dt_user {

      u_Id : Integer @title : 'UID';
      username : String @title : 'Username';
      password : String @title : 'Password';
  key mail : String @title : 'Mail';
      phone : String @title : 'Phone';

      orders : Composition  of  many Order on orders.userid = $self.u_Id
 
}

entity Order : managed{

  key o_Id : Integer @title : 'OID';
      totalPrice : Integer @title : 'TotalPrice';
      status : OrderStatus;
      // cur : Currency @title : 'Cur';
      userid : Integer @title : 'UserID';

      user : Association to dt_user on user.u_Id = $self.userid;
      orderItems : Composition of  many OrderItems on orderItems.orderid = $self.o_Id
}

entity OrderItems {

  key oi_id : Integer @title : 'OIID';
      quantity : Integer @title : 'Quantity';
      cur : Currency @title : 'Cur';
      price : Integer @title : 'Price';
      createdAt : DateTime @title : 'CreatedAt';
      orderid : Integer @title : 'OrderID';
      prodid : Integer @title : 'ProductID';

      order : Association to Order on order.o_Id = $self.orderid;
      product : Association to Product on product.p_id = $self.prodid

}

entity Product {

  key p_id : Integer @title : 'PID';
      name : String @title : 'Name';
      description : String @title : 'Description';
      price : Integer @title : 'Price';
      cur : Currency @title : 'Cur';
      custid : Integer @title : 'CustomerID';
      suppid : Integer @title : 'SupplierID';
      image : String @title : 'Image';

      category : Association to Category on category.c_id = $self.custid;
      supplier : Association to Supplier on supplier.s_id = $self.suppid;
      orderItem : Association to many OrderItems on orderItem.prodid = $self.p_id
}

entity Category {

  key c_id : Integer @title : 'CID';
      name : String @title : 'Name';    

      products : Association to many Product on products.custid = $self.c_id
     
}

entity Supplier {

  key s_id : Integer @title : 'SID';
      name : String @title : 'Name' ;

      products : Association to Product on products.suppid = $self.s_id  
}

entity Address {

  key a_id : Integer @title : 'Address';
      state : String @title : 'State';
      city : String @title : 'City';
      street : String @title : 'Street'    
}

type OrderStatus : String enum {
 
  Submitted;
  confirmed;
  shipped;
  delivered;
}
