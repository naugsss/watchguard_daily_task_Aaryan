import uuid
# from flask import request
from flask.views import MethodView
from flask_smorest import Blueprint, abort
# from db import stores
# from resources.schemas import ItemSchema, ItemUpdateSchema
from schemas import StoreSchema


blp = Blueprint("Items", __name__, description="Operation on items")

@blp.route("/store/<string:store_id>")
class Store(MethodView):
    @blp.response(200, StoreSchema)
    def get(self, store_id):
        try:
            return stores[store_id]
        except:
            abort(404, message="Store not found")
            
    def delete(self, store_id):
        try:
            del stores[store_id]
            return {"message" : "Store deleted."}
        except KeyError:
            abort(404, message="Store not found.")

@blp.route("/store")
class StoreList(MethodView):
    @blp.response(200, StoreSchema(many=True))
    def get(self):
        return stores.values()
    
    @blp.arguments(StoreSchema)
# The item_data is the JSON data which is the validated fields which the ItemSchema requested, the clients sends the JSON which is passed through the schema
    @blp.response(201, StoreSchema)
    def post(self, store_data):
        for store in stores.values():
            if(
                store_data["name"] == store["name"]
            ):
                abort(400, message=f"stores already exists.")

        if store_data["store_id"] not in stores:
            abort(404, message="Store not found")
        # item_data mein store id aayegi and vo hr item ke saath attach hogi
        store_id = uuid.uuid4().hex
        store = {**store_data, "id": store_id}
        stores[store_id] = item

        return store, 201
