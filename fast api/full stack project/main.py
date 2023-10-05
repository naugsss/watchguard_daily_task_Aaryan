from fastapi import FastAPI
import models
from database import engine
from routers import auth, todos
from starlette.staticfiles import StaticFiles

app = FastAPI()

models.Base.metadata.create_all(bind=engine)

# mouting means adding a completely independent application to a specific path that then takes care of handling everything under the path, but the path operations declared in that sub application.
#
# this is the directory which we've created
app.mount("/static", StaticFiles(directory="static"), name="static")

app.include_router(auth.router)
app.include_router(todos.router)
