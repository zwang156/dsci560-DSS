from db_func import Data, json
import pandas as pd

# This file is to define backend engine function
# each sql function returns a sql string
# each processing function returns a Data object

def extract_param(query: bytes) -> dict:
    query = query.decode()
    form_content = dict(i.split('=') for i in query.split('&'))
    return form_content


def test_sql(query: bytes) -> str:
    query = extract_param(query)
    ...
    sql = "select {} from {} where {}"
    ...
    cols = '*'
    table = 'test'
    where = '1'
    return sql.format(cols, table, where);

def description_sql(query: bytes) -> str:
    query = extract_param(query)
    if ('code' not in query):
        return ";"
    else:
        return f"select * from industry where code={query['code']}"

def recommendation_sql(query: bytes) -> str:
    if ('district' not in query): return ";"
    else: return f"select name, predict.code, net_increase, increase_ratio   \
        from (predict right JOIN industry on predict.code = industry.code)  \
        where district={query['district']} \
        ORDER BY increase_ratio desc limit 5"

def trend_sql(query: bytes) -> str:
    sql = "SELECT date, code, active, close, net_change, change_rate from per_year_pred "
    order = "order by code, date"
    if ('district' not in query): return ";"
    where = f"where district={query['district']} "
    if ('start' in query): where += f"and date>='{query['start']}' "
    if ('end' in query): where += f"and date<='{query['end']}' "
    return sql + where + order

def trend_data_process(data: Data) -> str:
    if not len(data.columns): return "[]"
    date = sorted(list(set(data["date"])))
    df = pd.DataFrame(data._Data__data, columns=data.columns)
    df = df.groupby(["code"]).agg(list).reset_index()
    data = Data(df.columns, df.values)
    data.drop("date")
    return '{' + f''' "time": {date},
                      "industries": {data.json()} ''' +'}'

def api_node_sql_2(query: bytes) -> str: ...
def api_node_sql_3(query: bytes) -> str: ...
...
...
def api_node_sql_n(query: bytes) -> str: ...


def api_node_data_proc_1(data: Data) -> Data: ...