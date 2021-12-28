from flask import Blueprint, render_template

views = Blueprint('views', __name__)
utils = [71, 43, 13, 56]

@views.route('/')
def home():
    # return '<h1>Hello World!</h1>'
    return render_template('home.html', utils=utils)

@views.route('/<machine>')
def machine(machine):
    return render_template('m1.html', machine=machine, utils=utils)

