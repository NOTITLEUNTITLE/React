from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

db = SQLAlchemy()
ma = Marshmallow()


class Metro(db.Model):
    __tablename__ = 'metro'
    ID = db.Column(db.Integer, primary_key = True)
    DATE = db.Column(db.String(255), nullable = False)
    RIDE = db.Column(db.Integer, nullable = False)
    ALIGHT = db.Column(db.Integer, nullable = False)
    
    def __init__(self, DATE, RIDE, ALIGHT):
        self.DATE = DATE
        self.RIDE = RIDE
        self.ALIGHT = ALIGHT


class Movie(db.Model):
    __tablename__ = 'movie'
    ID = db.Column(db.Integer, primary_key = True)
    DATE = db.Column(db.String(255), nullable = False)
    DOMESTIC_SALES = db.Column(db.Integer, nullable = False)
    DOMESTIC_AUDIENCES = db.Column(db.Integer, nullable = False)
    OVERSEAS_SALES = db.Column(db.Integer, nullable = False)
    OVERSEAS_AUDIENCES = db.Column(db.Integer, nullable = False)
    TOTAL_SALES = db.Column(db.Integer, nullable = False)
    TOTAL_AUDIENCES = db.Column(db.Integer, nullable = False)

    def __init__(self, DATE, DOMESTIC_SALES, DOMESTIC_AUDIENCES, OVERSEAS_SALES, OVERSEAS_AUDIENCES, TOTAL_SALES, TOTAL_AUDIENCES):
        self.DATE = DATE
        self.DOMESTIC_SALES = DOMESTIC_SALES
        self.DOMESTIC_AUDIENCES = DOMESTIC_AUDIENCES
        self.OVERSEAS_SALES = OVERSEAS_SALES
        self.OVERSEAS_AUDIENCES = OVERSEAS_AUDIENCES
        self.TOTAL_SALES = TOTAL_SALES
        self.TOTAL_AUDIENCES = TOTAL_AUDIENCES


# class Consumtion(db.Model):
#     __tablename__ = 'consumtion'
#     ID = db.Column(db.Integer, primary_key = True)
#     DATE = db.Column(db.String(255), nullable = False)
#     MARKET_NONFOOD_HOMEWARE_CULTURE = db.Column(db.Float(8), nullable = False)
#     MARKET_NONFOOD_CLOTHING = db.Column(db.Float(8), nullable = False)
#     MARKET_NONFOOD_DAILY = db.Column(db.Float(8), nullable = False)
#     MARKET_NONFOOD_SPORT = db.Column(db.Float(8), nullable = False)
#     MARKET_NONFOOD_CHANDLERY = db.Column(db.Float(8), nullable = False)
#     MARKET_NONFOOD_SUBTOTAL = db.Column(db.Float(8), nullable = False)
#     MARKET_FOOD = db.Column(db.Float(8), nullable = False)


class MetroSchema(ma.Schema):
    class Meta:
        fields = ('ID', 'DATE', 'RIDE', 'ALIGHT')
