from flask import Flask, render_template, jsonify
from models import Csv_data
from db_connect import db
import pymysql

import json

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://seamus:elicerabbit@team4-db.clq1g0g3exq8.ap-northeast-2.rds.amazonaws.com/csv_data'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
# datas = db.session.query(Csv_data)
# data_list = []
# for data in datas:
#     t = ({"id":data[0]}, {""})

@app.route('/')
def test():
    # data_consumption = db.session.query(Csv_data.total).all()
    rows = db.session.query(Csv_data.id, Csv_data.date_time, Csv_data.categories, Csv_data.total).all()
    # print(rows)
    data_list = []
    # col1 = Csv_data.__table__.columns.keys()
    # print(col)
    # print(type(data_consumption))
    # row = db.session.query(Csv_data).first()
    # print(type(row))

    for i in range(len(Csv_data.__table__.columns.keys())):
        globals()['col{}'.format(i)] = Csv_data.__table__.columns.keys()[i]
    # print(type(col0))
    # print(col1)
    # col0 = Csv_data.__table__.columns.keys()[0]

    # import datetime
    # today = datetime.date.today()
    # col2 = (today.strftime('%Y-%m-%d'))
    # print("test:"+ col2)
    # print(type(col2))

    for row in rows:
        # print(row[0])
        temp = ({col0:row[0], col1: row[1], col2: row[2], col3: row[3]})
        data_list.append(temp)
        # print(type(data_list))

    # print(data_list)
    json_data = json.dumps(data_list, default=str) #default =str // Object of type datetime is not JSON serializable 해결
    print(json_data)

    return jsonify(json_data)
    # return render_template('home.html', metro_list = data_consumption)

if __name__ == '__main__':
    app.run(port=5001, debug=True)

