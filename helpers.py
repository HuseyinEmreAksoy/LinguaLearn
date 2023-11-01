import json

def load_json(file_name) -> dict:
    if not file_name.endswith(".json"):
        file_name += ".json"
    file = open(file_name)
    data = json.load(file)
    return data