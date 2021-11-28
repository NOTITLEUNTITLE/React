from flask import Flask, render_template, jsonify
from models import Clothes, Concert, PhaseNewCoronic, NaverComprehensiveData, Movie, Metro
from db_connect import db
import pymysql

import json

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://seamus:elicerabbit@team4-db.clq1g0g3exq8.ap-northeast-2.rds.amazonaws.com/csv_data'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JSON_SORT_KEYS'] = False  #prevent sorting data by alphabet
db.init_app(app)


@app.route('/clothes')
def clothes():
    rows = db.session.query(Clothes.id, Clothes.date_time, Clothes.total).all()
    # print(rows)

    #각 column 명을 뽑아내는 반복문
    for i in range(len(Clothes.__table__.columns.keys())):
        globals()['col{}'.format(i)] = Clothes.__table__.columns.keys()[i]
    # print(type(col0))

    data_list = []

    for row in rows:
        # print(row[0])
        temp = ({col0:row[0],col1:row[1],col2:row[2]})

        data_list.append(temp)
        # print(type(data_list))

    # print(data_list)
    json_data = json.dumps(data_list, default=str)
    json_data = json_data.replace("\"", "")  # backslash 제거
    #default =str // Object of type datetime is not JSON serializable 해결


    return jsonify(json_data)
    # return render_template('home.html', metro_list = data_consumption)


@app.route('/concert')
def concert():



    rows = db.session.query(Concert.id, Concert.date_mon, Concert.perform_num, Concert.opening_num, Concert.showing_num,
                            Concert.sales, Concert.book_num).all()


    for i in range(len(Concert.__table__.columns.keys())):
        globals()['col{}'.format(i)] = Concert.__table__.columns.keys()[i]
        # print(type(col0))


    concert_data = []
    for row in rows:
        # print(row[0])
        temp = ({col0:row[0],col1:row[1],col2:row[2],col3:row[3],col4:row[4],col5:row[5],col6:row[6]})

        concert_data.append(temp)

    concert_data_json = json.dumps(concert_data, default=str)
    concert_data_json = concert_data_json.replace("\"","") #backslash 제거
    return jsonify(concert_data_json)



@app.route('/phase_new_coronic')
def phase_new_coronic():



    rows = db.session.query(PhaseNewCoronic.id, PhaseNewCoronic.date_day, PhaseNewCoronic.phase,
                            PhaseNewCoronic.new_coronic).all()


    for i in range(len(PhaseNewCoronic.__table__.columns.keys())):
        globals()['col{}'.format(i)] = PhaseNewCoronic.__table__.columns.keys()[i]
        # print(type(col0))


    phase_new_coronic_data = []
    for row in rows:
        # print(row[0])
        temp = ({col0:row[0],col1:row[1],col2:row[2],col3:row[3]})

        phase_new_coronic_data.append(temp)

    phase_new_coronic_data_json = json.dumps(phase_new_coronic_data, default=str)
    phase_new_coronic_data_json = phase_new_coronic_data_json.replace("\"","") #backslash 제거
    return jsonify(phase_new_coronic_data_json)

#######################################


@app.route('/naver_data')
def naver_comporehensive():



    rows = db.session.query(NaverComprehensiveData.id, NaverComprehensiveData.date_day, NaverComprehensiveData.furniture,
                            NaverComprehensiveData.book, NaverComprehensiveData.home_appliance, NaverComprehensiveData.duty_free,
                            NaverComprehensiveData.living_health, NaverComprehensiveData.sport_leisure,NaverComprehensiveData.food,
                            NaverComprehensiveData.amenity, NaverComprehensiveData.childbirth, NaverComprehensiveData.fashion_clothes,
                            NaverComprehensiveData.fashion_accessories, NaverComprehensiveData.beauty).all()


    for i in range(len(NaverComprehensiveData.__table__.columns.keys())):
        globals()['col{}'.format(i)] = NaverComprehensiveData.__table__.columns.keys()[i]
        # print(type(col0))


    naver_comporehensive_data = []
    for row in rows:
        # print(row[0])
        temp = ({col0:row[0],col1:row[1],col2:row[2],col3:row[3],col4:row[4],col5:row[5],col5:row[5],col6:row[6],col7:row[7],
                 col8:row[8],col9:row[9],col10:row[10],col11:row[11],col12:row[12],col13:row[13]})

        naver_comporehensive_data.append(temp)
    # print(naver_comporehensive_data)

    naver_comporehensive_data_json = json.dumps(naver_comporehensive_data, default=str)
    print(naver_comporehensive_data_json)
    naver_comporehensive_data_json = naver_comporehensive_data_json.replace("\"","") #backslash 제거
    return jsonify(naver_comporehensive_data)


#######################################

@app.route('/movie')
def movie():



    rows = db.session.query(Movie.id, Movie.date_day, Movie.korea_sales, Movie.korea_audience_num, Movie.korea_audience_num,
                            Movie.foreign_audience_num, Movie.foreign_sales, Movie.total_sales, Movie.total_audience).all()


    for i in range(len(Movie.__table__.columns.keys())):
        globals()['col{}'.format(i)] = Movie.__table__.columns.keys()[i]
        # print(type(col0))


    movie_data = []
    for row in rows:
        # print(row[0])
        temp = ({col0:row[0],col1:row[1],col2:row[2],col3:row[3],col4:row[4],col5:row[5],col6:row[6],col7:row[7]})

        movie_data.append(temp)

    movie_data_json = json.dumps(movie_data, default=str)
    movie_data_json = movie_data_json.replace("\"","") #backslash 제거
    return jsonify(movie_data_json)



########################################

@app.route('/metro')
def metro():



    rows = db.session.query(Metro.id, Metro.date_day, Metro.get_on,
                            Metro.get_off).all()


    for i in range(len(Metro.__table__.columns.keys())):
        globals()['col{}'.format(i)] = Metro.__table__.columns.keys()[i]
        # print(type(col0))


    metro_date = []
    for row in rows:
        # print(row[0])
        temp = ({col0:row[0],col1:row[1],col2:row[2],col3:row[3]})

        metro_date.append(temp)

    metro_date_json = json.dumps(metro_date, default=str)
    metro_date_json = metro_date_json.replace("\"","") #backslash 제거
    return jsonify(metro_date_json)

#######################################

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=3000, debug=True)


