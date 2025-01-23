from flask import Flask, request, jsonify
import json
from flask_sqlalchemy import SQLAlchemy
from liteLLM import generate_text, get_conversation_history, get_files, search

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///medchat.db'
db = SQLAlchemy(app)

class Conversation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(100), nullable=False)
    output = db.Column(db.String(100), nullable=False)

class File(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    filename = db.Column(db.String(100), nullable=False)
    filecontent = db.Column(db.String(100), nullable=False)

@app.route('/conversations', methods=['GET'])
def get_conversations():
    conversations = Conversation.query.all()
    return jsonify([{'id': c.id, 'text': c.text, 'output': c.output} for c in conversations])

@app.route('/files', methods=['GET'])
def get_files():
    files = File.query.all()
    return jsonify([{'id': f.id, 'filename': f.filename, 'filecontent': f.filecontent} for f in files])

@app.route('/search', methods=['GET'])
def search():
    query = request.args.get('q')
    conversations = Conversation.query.filter(Conversation.text.contains(query)).all()
    return jsonify([{'id': c.id, 'text': c.text, 'output': c.output} for c in conversations])

@app.route('/generate', methods=['POST'])
def generate():
    input_text = request.json['input']
    output_text = generate_text(input_text)
    return jsonify({'output': output_text})

if __name__ == '__main__':
    app.run(debug=True)