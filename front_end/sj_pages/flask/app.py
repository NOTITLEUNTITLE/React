import pymysql
from flask import Flask, render_template, jsonify
from models import Project
from db_connect import db
import json
# import pandas as pd

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://team4:1234@team4-db.ceb7xrkgnfi5.ap-northeast-2.rds.amazonaws.com:3306/project'
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:1234@localhost:3306/project'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)


@app.route('/')
def home():
    return "index"

@app.route('/metrodata')
def metrodata():
    # data = db.session.query(Project).all()
    weeks = db.session.query(Project.DATE).all()
    data1 = db.session.query(Project.RIDE).all()

    for i in range(len(weeks)):
        weeks[i] = weeks[i][0]

    for i in range(len(data1)):
        data1[i] = data1[i][0]
    ddd = ['norm9_ab1', 'dataset-hdf', 'audio', 'csvfile', 'saveHDF', 'backend_test', 'keras-adversarial', 'pathconnect']
    M = dict(zip(range(1, len(data1) + 1), data1))
    json.dumps(M)
    print(len(weeks))
    return jsonify(M)


# metro = pd.read_csv('metro3.csv', encoding = 'CP949')
# labels = metro['DATE'].tolist()
# values = metro['RIDE'].tolist()

# @app.route("/metro")
# def metro_chart():
#     return render_template("metro_chart.html", labels = labels, values = values)
@app.route('/members')
def members():
  return jsonify(
    [
      {
        "사람숫자": 15,
        "Flask": "React",
        "Date": "2021-11-12",
        "Active": 1
      },
      {
        "사람숫자": 283,
        "Flask": "React",
        "Date": "2021-11-13",
        "Active": 0
      },
      {
        "사람숫자": 3,
        "Flask": "React",
        "Date": "2021-11-14",
        "Active": 1
      },
      {
        "사람숫자": 111,
        "Flask": "React",
        "Date": "2021-11-15",
        "Active": 0
      },
    ]
  )
if __name__ == '__main__':
    app.run(debug=True)