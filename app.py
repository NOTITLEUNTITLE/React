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

# def serialize_many2many(self):
#        """
#        Return object's relations in easily serializable format.
#        NB! Calls many2many's serialize property.
#        """
#        return [ item.serialize for item in self.many2many]


# def serialize(self):
#        """Return object data in easily serializable format"""
#        return {
#            'ID'         : self.ID,
#            'many2many'  : self.serialize_many2many
#        }

# @app.route('/')
# def home():
#     weeks = db.session.query(Metro.DATE).all()
#     data1 = db.session.query(Metro.RIDE).all()

#     for i in range(len(weeks)):
#         weeks[i] = weeks[i][0]

#     for i in range(len(data1)):
#         data1[i] = data1[i][0]

#     return render_template('linegraph.html', weeks = weeks, data1 = data1)

@app.route('/')
def toJson():
    metro_list = db.session.query(Metro).all()
    result = metro_schema.dump(metro_list)
    return jsonify(result)


if __name__ == '__main__':
    app.run(port = 8000, debug=True)