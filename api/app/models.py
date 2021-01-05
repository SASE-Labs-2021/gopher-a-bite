
#   MODELS
#   This file defines the database structure

from datetime import datetime
from app import db, login
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash


class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True) #unique integer for given user
    username = db.Column(db.String(64), index=True, unique=True) #Username that the person sets up the account with maximum length is 64
    email = db.Column(db.String(120), index=True, unique=True) #Email that the person sets up with max length is 120
    password_hash = db.Column(db.String(128)) #password after hashing with max length of 128
    posts = db.relationship('Post', backref='author', lazy='dynamic')
    #__repr__: a function that tells how to print objects of this User class for debugging purposes
    def __repr__(self):
        return '<User {}>'.format(self.username)
    # set_password: hashes given password
    def set_password(self, password):
        self.password_hash = generate_password_hash(password)
    # check_password: returns true if the passwords match
    def check_password(self, password):
        return check_password_hash(self.password_hash, password)


@login.user_loader
def load_user(id):
    return User.query.get(int(id))

# POST: links posts to author by referencing the unique user id
class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(140))
    # using timestamp to organize in chronological order
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return '<Post {}>'.format(self.body)