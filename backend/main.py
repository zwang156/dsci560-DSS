import json
import flask
from flask import Flask,  request
import os
import sys
from query_handler import *
from db_func import DataBase

# create app
app = Flask(__name__)

# get database instance
os.chdir(os.path.dirname(os.path.abspath(__file__)))
with open("./config.json") as f:
    login_info = json.load(f)
db = DataBase(**login_info)

# define api nodes

@app.route("/")
def root():
    return "<div> Root Page </div>"

@app.route("/test") #accept: {**kwargs: Any}
def test():
    sql = test_sql(request.query_string)
    data = db.query(sql);
    return data.json()

@app.route("/description") #accept: {code: int}
def description():
    sql = description_sql(request.query_string)
    data = db.query(sql);
    return data.json()

@app.route("/recommandation") #accept: {district: int}
def recommandation():
    sqls = recommendation_sql(request.query_string)
    data0 = db.query(sqls[0]);
    data1 = db.query(sqls[1]);
    return f"[{data0},{data1}]"

@app.route("/trend_data") #accept: {district: int}
def trend(): ...

@app.route("/anynode") #accept: {**kwargs: any}
def node(): ...

if __name__ == "__main__":
    # Setting debug to True enables debug output. This line should be
    # removed before deploying a production app.
    app.debug = True
    app.run()