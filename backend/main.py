import json
import flask
from flask import Flask,  request
import os
import sys
from query_handler import *
from db_func import DataBase
from flask_cors import CORS

# create app
app = Flask(__name__)
CORS(app)

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

@app.route("/active_data") #accept: {district: int}
def trend():
    sql = "select industry_code, date, active_count from industry order by date, active_count where district="
    data = db.query(sql)
    return json.dumps({
        "time": ["2015/01", "2015/02", "2015/03", "2015/04", "2016/01", "2016/02"],
        "5311": [1234, 1235, 2935, 1928, 1203, 1290],
        "5411": [1234, 1200, 1150, 1400, 1202, 1290],
        "722511": [2345,2456,2567,2134,2432,2222],
    })

@app.route("/change_ratio") #accept: {district: int}
def ratio():
    return json.dumps({
        "time": ["2015/01", "2015/02", "2015/03", "2015/04", "2016/01", "2016/02"],
        "5311": [0.12, 0.05, -0.1, 0.1, 0.15, 0.03],
        "5411": [0.04, 0.13, 0.01, -0.2, 0.1, 0.15],
        "722511": [0,0,0.02,0.03,-.01,-.5],
    })

@app.route("/anynode") #accept: {**kwargs: any}
def node(): ...

if __name__ == "__main__":
    # Setting debug to True enables debug output. This line should be
    # removed before deploying a production app.
    # app.debug = True
    app.run()