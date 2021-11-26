import pymysql
from flask import Flask, render_template, jsonify
from models import Metro, Movie, MetroSchema
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

import pandas as pd

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://team4:1234@team4-db.ceb7xrkgnfi5.ap-northeast-2.rds.amazonaws.com:3306/project'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

metro_schema = MetroSchema(many=True)

@app.route('/')
def toJson():
    metro_list = db.session.query(Metro).all()
    result = metro_schema.dump(metro_list)
    return jsonify(result)


if __name__ == '__main__':
    app.run(port = 5000, debug=True)
