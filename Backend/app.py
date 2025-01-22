from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import os

app = Flask(__name__)
CORS(app)

# configuration de la base de donnée
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL','sqlite:///db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# This is where you'll initialize Llama 3.2
# Example:
# from llama import Llama
# llm = Llama(model_path="path/to/llama-model")

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    message = data.get('message')
    
    # This is where you'll integrate Llama 3.2
    # Example:
    # response = llm.generate(message)
    
    response = {
        'message': 'This is where Llama 3.2 will process your medical query.',
        'timestamp': datetime.utcnow().isoformat()
    }
    
    return jsonify(response)

@app.route('/api/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400
        
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400
        

    return jsonify({'message': 'File uploaded successfully'})

if __name__ == '__main__':
    app.run(debug=True)









































































































#  from flask import Flask, render_template, redirect, url_for, flash, request
# from flask_sqlalchemy import SQLAlchemy
# from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
# from forms import RegistrationForm, LoginForm
# from models import db, User, ChatMessage
# from config import Config

# app = Flask(__name__)
# app.config.from_object(Config)
# db.init_app(app)

# login_manager = LoginManager(app)
# login_manager.login_view = 'login'

# @login_manager.user_loader
# def load_user(user_id):
#     return User.query.get(int(user_id))

# @app.route('/')
# def home():
#     return render_template('home.html')

# @app.route('/register', methods=['GET', 'POST'])
# def register():
#     form = RegistrationForm()
#     if form.validate_on_submit():
#         new_user = User(username=form.username.data, password=form.password.data, role=form.role.data)
#         db.session.add(new_user)
#         db.session.commit()
#         flash('Account created!', 'success')
#         return redirect(url_for('login'))
#     return render_template('register.html', form=form)

# @app.route('/login', methods=['GET', 'POST'])
# def login():
#     form = LoginForm()
#     if form.validate_on_submit():
#         user = User.query.filter_by(username=form.username.data).first()
#         if user and user.password == form.password.data:  # Add hashed password check in production
#             login_user(user)
#             return redirect(url_for('chat'))
#         flash('Login Unsuccessful. Please check username and password', 'danger')
#     return render_template('login.html', form=form)

# @app.route('/chat', methods=['GET', 'POST'])
# @login_required
# def chat():
#     if request.method == 'POST':
#         message = request.form.get('message')
#         new_message = ChatMessage(user_id=current_user.id, message=message)
#         db.session.add(new_message)
#         db.session.commit()
#     messages = ChatMessage.query.all()
#     return render_template('chat.html', messages=messages)

# @app.route('/logout')
# @login_required
# def logout():
#     logout_user()
#     return redirect(url_for('home'))

# if __name__ == '__main__':
#     with app.app_context():
#         db.create_all() 
#     # app.run(debug=True)
