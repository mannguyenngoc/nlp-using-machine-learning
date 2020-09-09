from typing import Optional
import run_naive_bayes
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/predict/{document}")
def read_item(document: str):
    return run_naive_bayes.predict(document)