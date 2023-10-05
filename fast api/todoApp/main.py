import models
from models import Todos
from fastapi import FastAPI
from database import engine
from routers import auth, todos, admin, users

app = FastAPI()

# this will create a new database if doesn't exists
models.Base.metadata.create_all(bind=engine)

# we are including the auth.py file as a route
app.include_router(auth.router)
app.include_router(todos.router)
app.include_router(admin.router)
app.include_router(users.router)

