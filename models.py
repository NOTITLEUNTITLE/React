from db_connect import db

class Clothes(db.Model):
    __tablename__ = 'clothes'
    id = db.Column(db.Integer, primary_key= True)
    date_time = db.Column(db.DateTime, nullable = False)
    # categories = db.Column(db.String(20), nullable = False)
    total = db.Column(db.Integer, nullable = False)

    def __init__(self, date_time, total):

        self.date_time = date_time
        # self.categories = categories
        self.total = total

class Concert(db.Model):
    __tablename__ = 'concert'
    id = db.Column(db.Integer, primary_key=True)
    date_mon = db.Column(db.String(20), nullable=False)
    perform_num = db.Column(db.Integer, nullable=False)
    opening_num = db.Column(db.Integer, nullable=False)
    showing_num = db.Column(db.Integer, nullable=False)
    sales = db.Column(db.Integer, nullable=False)
    book_num = db.Column(db.Integer, nullable=False)

    def __init__(self, date_mon, perform_num, opening_num, showing_num, sales, book_num):

        self.date_mon = date_mon
        self.perform_num = perform_num
        self.opening_num = opening_num
        self.showing_num = showing_num
        self.sales = sales
        self.book_num = book_num


class PhaseNewCoronic(db.Model):

    __tablename__ = 'phase_new_coronic'

    id = db.Column(db.Integer, primary_key=True)
    date_day = db.Column(db.DateTime, nullable=False)
    phase = db.Column(db.Integer, nullable=False)
    new_coronic = db.Column(db.Integer, nullable=False)

    def __init__(self, date_day, phase, new_coronic):

        self.date_day = date_day
        self.phase = phase
        self.new_coronic = new_coronic


class NaverComprehensiveData(db.Model):

    __tablename__ = 'naver_comprehensive_data'

    id = db.Column(db.Integer, primary_key= True)
    date_day = db.Column(db.DateTime, nullable=False)
    furniture = db.Column(db.Float, nullable= False)
    book = db.Column(db.Float, nullable=False)
    home_appliance = db.Column(db.Float, nullable=False)
    duty_free = db.Column(db.Float, nullable=False)
    living_health = db.Column(db.Float, nullable=False)
    sport_leisure = db.Column(db.Float, nullable=False)
    food = db.Column(db.Float, nullable=False)
    amenity = db.Column(db.Float, nullable=False)
    childbirth = db.Column(db.Float, nullable=False)
    fashion_clothes = db.Column(db.Float, nullable=False)
    fashion_accessories = db.Column(db.Float, nullable=False)
    beauty = db.Column(db.Float, nullable=False)


    def __init__(self,date_day, furniture, book, home_appliance, duty_free, living_health, sport_leisure,
                 food, amenity, childbirth, fashion_clothes, fashion_accessories, beauty):

        self.date_day = date_day
        self.furniture = furniture
        self.book = book
        self.home_appliance = home_appliance
        self.duty_free = duty_free
        self.living_health = living_health
        self.sport_leisure = sport_leisure
        self.food = food
        self.amenity = amenity
        self.childbirth = childbirth
        self.fashion_clothes = fashion_clothes
        self.fashion_accessories = fashion_accessories
        self.beauty = beauty


class Movie(db.Model):

    __tablename__ = 'movie'

    id = db.Column(db.Integer, primary_key= True, nullable= False)
    date_day = db.Column(db.DateTime, nullable= False)
    korea_sales = db.Column(db.Integer, nullable= False)
    korea_audience_num = db.Column(db.Integer, nullable=False)
    foreign_audience_num = db.Column(db.Integer, nullable=False)
    foreign_sales = db.Column(db.Integer, nullable=False)
    total_sales = db.Column(db.Integer, nullable=False)
    total_audience = db.Column(db.Integer, nullable=False)

    def __init__(self, date_day, korea_sales, korea_audience_num, foreign_audience_num,foreign_sales,
                 total_sales, total_audience):
        self.date_day = date_day
        self.korea_sales = korea_sales
        self.korea_audience_num = korea_audience_num
        self.foreign_audience_num = foreign_audience_num
        self.foreign_sales = foreign_sales
        self.total_sales = total_sales
        self.total_audience = total_audience


class Metro(db.Model):
    __tablename__ = 'metro'
    id = db.Column(db.Integer, primary_key=True)
    date_day = db.Column(db.DateTime, nullable=False)
    get_on = db.Column(db.Integer, nullable=False)
    get_off = db.Column(db.Integer, nullable=False)

    def __init__(self, date_day, get_on , get_off):
        self.date_day = date_day
        self.get_on = get_on
        self.get_off = get_off