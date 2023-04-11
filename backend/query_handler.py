from db_func import Data
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
    return sql;

def description_sql(query: bytes) -> str:
    query = extract_param(query)
    if ('code' not in query):
        return ";"
    else:
        return f"select * from industry where code={query['code']}"

#TODO sql formation in else
def recommendation_sql(query: bytes) -> str:
    query = extract_param(query)
    if ('district' not in query):
        return ";"
    else:
        return f";"

#TODO sql formation in else
def trend_sql(query: bytes) -> str:
    query = extract_param(query)
    if ('district' not in query):
        return ";"
    else:
        return ";"

def api_node_sql_2(query: bytes) -> str: ...
def api_node_sql_3(query: bytes) -> str: ...
...
...
def api_node_sql_n(query: bytes) -> str: ...


def api_node_data_proc_1(data: Data) -> Data: ...