from flask import Flask, request
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
async def root():
    return """<div> Root Page </div>
            """


@app.route("/test")  # accept: {**kwargs: Any}
async def test():
    sql = test_sql(request.query_string)
    data = db.query(sql)
    return data.json()


@app.route("/description")  # accept: {code: int}
async def description():
    sql = description_sql(request.query_string)
    data = db.query(sql)
    return data.json()


@app.route("/recommandation")  # accept: {district: int}
def recommandation():
    sql = recommendation_sql(request.args)
    data = db.query(sql)
    data.rename("increase_ratio", "ratio")
    data.append("rank", range(1, 6))
    return '{"recommandations": ' + data.json() + "}"
    # {"recommandations": [
    #    {"name": string, "code": int, "ratio": float, "net_increase" "rank": int},
    #    ...
    # ]}


@app.route("/active_data")
# accept: {district: int, start: optional("yyyy"| "yyyy/q" | undefined),
#                         end: option("yyyy"| "yyyy/q" | undefined)}
# url = domain/active_data?district=1&startTime=2015%2F1&endTime=2018%2F2
def trend():
    sql = trend_sql(request.args)
    data = db.query(sql)
    return trend_data_process(data)
    #    {
    #         "time": ["2015/01", "2015/02", "2015/03", "2015/04", "2016/01", "2016/02"],
    #         "industries": [
    #             {"name": "Lessors of Real Estate",
    #              "code": "5311",
    #              "data": [1234, 1235, 2935, 1928, 1203, 1290],
    #             },
    #             ...
    #         ],
    #     }


@app.route("/change_ratio")
# accept: {district: int, start: string("yyyy"| "yyyy/q")
#                         end: string("yyyy"| "yyyy/q")}
async def ratio():

    return json.dumps(
        {
            "time": ["2015/01", "2015/02", "2015/03", "2015/04", "2016/01", "2016/02"],
            "industris": [
                {
                    "name": "Lessor of Real Estate",
                    "code": "5311",
                    "data": [0.12, 0.05, -0.1, 0.1, 0.15, 0.03],
                },
                {
                    "name": "Legal Services",
                    "code": "5411",
                    "data": [0.04, 0.13, 0.01, -0.2, 0.1, 0.15],
                },
                {
                    "name": "Full-service restaurants",
                    "code": "722511",
                    "data": [0, 0, 0.02, 0.03, -0.01, -0.5],
                },
            ],
        }
    )


@app.route("/anynode")  # accept: {**kwargs: any}
async def node():
    ...


if __name__ == "__main__":
    # Setting debug to True enables debug output. This line should be
    # removed before deploying a production app.
    # app.debug = True
    app.run()
