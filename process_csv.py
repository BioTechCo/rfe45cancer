import csv
import json
import os
import sys

def count_feature_values_and_dbeta(csv_file_path):
    """
    Processes the dbeta.csv file to:
    - Count occurrences of each value in the 'feature' column.
    - Count how many 'dbeta' values are > 0 (hyper) and < 0 (hypo).
    Returns the data in a structured dictionary.
    """
    feature_counts = {}
    hyper_count = 0
    hypo_count = 0
    
    try:
        with open(csv_file_path, 'r') as file:
            csv_reader = csv.DictReader(file)
            for row in csv_reader:
                # Count feature occurrences
                feature = row.get('feature')
                if feature:
                    feature_counts[feature] = feature_counts.get(feature, 0) + 1
                
                # Count hyper and hypo dbeta values
                dbeta_str = row.get('dbeta')
                try:
                    dbeta_val = float(dbeta_str)
                    if dbeta_val > 0:
                        hyper_count += 1
                    elif dbeta_val < 0:
                        hypo_count += 1
                except (ValueError, TypeError):
                    continue  # Skip rows with invalid dbeta values
        
        result = {
            "feature_counts": [{"name": key, "value": value} for key, value in feature_counts.items()],
            "dbeta": {
                "hyper": hyper_count,
                "hypo": hypo_count
            }
        }
        return result

    except Exception as e:
        print(f"Error processing CSV: {str(e)}")
        return {"feature_counts": [], "dbeta": {"hyper": 0, "hypo": 0}}

def main():
    if len(sys.argv) != 3:
        print("Usage: python script.py <input_csv_path> <output_json_path>")
        sys.exit(1)

    csv_path = sys.argv[1]
    output_path = sys.argv[2]

    data = count_feature_values_and_dbeta(csv_path)

    with open(output_path, 'w') as json_file:
        json.dump(data, json_file, indent=4)

    print(f"Feature counts and dbeta summary written to {output_path}")

if __name__ == "__main__":
    main()
