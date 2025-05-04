import os
import json

data = {}

# Walk through directories to find all output.json files
for root, dirs, files in os.walk('.'):
    if 'output.json' in files:
        # Get the path two levels up as the dataset key
        parent_of_parent = os.path.basename(os.path.dirname(os.path.dirname(root)))
        file_path = os.path.join(root, 'output.json')
        
        with open(file_path, 'r') as f:
            content = json.load(f)
        
        if parent_of_parent not in data:
            data[parent_of_parent] = []
        
        data[parent_of_parent].append(content)

# Write to JS file
with open('Dbeta.tsx', 'w') as f:
    f.write("const data = ")
    json.dump(data, f, indent=4)
    f.write(";")
