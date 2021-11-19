from flask import Flask, render_template
from models import Consumption
from db_connect import db
import pymysql

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:elicerabbit@127.0.0.1:3306/app'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)


@app.route('/')
def test():
    data_consumption = db.session.query(Consumption).all()
    return render_template('home.html', metro_list = data_consumption)

if __name__ == '__main__':
    app.run(port=8000, debug=True)