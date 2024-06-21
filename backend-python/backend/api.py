from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS from flask_cors
import subprocess
import tempfile
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes in the Flask app

@app.route('/process_pdf', methods=['POST'])
def process_pdf():
    # Get the PDF file from the request
    pdf_file = request.files['pdf']

    # Save the PDF file to a temporary location
    temp_dir = tempfile.mkdtemp()
    temp_file_path = os.path.join(temp_dir, pdf_file.filename)
    pdf_file.save(temp_file_path)

    # Call the extract_pdf.py script to process the PDF content
    print(f"running extract_pdf.py")
    result = subprocess.run(['python', 'extract_pdf.py', temp_file_path], check=True, capture_output=True)

    # Read the content from clean_extracted.txt file
    print("Reading clean_extracted.txt file")
    with open("clean_extracted.txt", "r", encoding='utf-8') as clean_file:
        cleaned_content = clean_file.read()

    print("Running modelcheck.py")
    result2 = subprocess.run(['python', 'modelcheck.py', cleaned_content], check=True, capture_output=True)

    print("Reading summary.txt file")
    with open("summary.txt", "r") as file:
        result2 = file.read()

    # Return the cleaned text
    return jsonify({'cleaned_text': result2})

if __name__ == '__main__':
    app.run(port=4000,debug=True)
