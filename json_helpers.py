import json

def load_json(file_path: str) -> dict():
    f = open(file_path)
    data = json.load(f) 
    return data

def create_json(data: dict, file_or_path_name: str):
    return pass