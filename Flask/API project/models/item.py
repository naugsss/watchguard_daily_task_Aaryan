from db import db

class ItemModel(db.Model):
    __tablename__ = "Items"
    # this is how we define a column where this is an integer column and id is a primary key
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    price = db.Column(db.Float(precision=2), unique=False, nullable=False)
    store_id = db.Column(db.Integer, db.ForeignKey("stores.id"), unique=False, nullable=False)
    store = db.relationship("StoreModel", back_populates="items")
    # this means that the stores table is being used by the StoreModel class, so when we've a store_id that is using the stores table, we can then define a relationship with the store model call and that will automatically populate the store variable with a store model object whose ID matches that of a foreign key
