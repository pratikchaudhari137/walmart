

using my.bookshop as db from '../db/data-model';

service CatalogService {
    entity dt_user as projection on db.dt_user;
     entity Product as projection on db.Product;
      entity Category as projection on db.Category;
      entity Supplier as projection on db.Supplier;
      entity Order as projection on db.Order;
       entity OrderItems as projection on db.OrderItems;
        entity Address as projection on db.Address;
}
