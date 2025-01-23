import requests
import json

def generate_text(input_text):
    url = "https://api.liteLLM.com/generate"
    headers = {"Content-Type": "application/json"}
    data = {"input": input_text}
    response = requests.post(url, headers=headers, data=json.dumps(data))
    return response.json()["output"]

def get_conversation_history():
    url = "https://api.liteLLM.com/conversations"
    headers = {"Content-Type": "application/json"}
    response = requests.get(url, headers=headers)
    return response.json()

def get_files():
    url = "https://api.liteLLM.com/files"
    headers = {"Content-Type": "application/json"}
    response = requests.get(url, headers=headers)
    return response.json()

def search(query):
    url = "https://api.liteLLM.com/search"
    headers = {"Content-Type": "application/json"}
    data = {"q": query}
    response = requests.get(url, headers=headers, data=json.dumps(data))
    return response.json()