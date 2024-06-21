import tkinter as tk
from tkinter import filedialog
import PyPDF2
import re
import sys
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

def process_pdf_file(file_path):
    print(f"Selected file: {file_path}")
    extracted_text = extract_text_from_pdf(file_path)
    cleanedText = remove_tags_and_headers(extracted_text)
    cleaned_text = removeStopwords(cleanedText)
    create_cleaned_text_file(cleaned_text)

def open_file_dialog():
    file_path = filedialog.askopenfilename(title="Select a PDF file", filetypes=[("PDF files", "*.pdf")])
    if file_path:
        process_pdf_file(file_path)

def extract_text_from_pdf(pdf_path):
    text = ""
    with open(pdf_path, 'rb') as file:
        pdf_reader = PyPDF2.PdfReader(file)
        for page in pdf_reader.pages:
            text += page.extract_text() + "\n"
    return text

def remove_tags_and_headers(text):
    tags_to_remove = ["CONTACT", "EMAIL", "PHONE", "LINKS"]
    for tag in tags_to_remove:
        text = re.sub(fr'{tag}\s*:\s*.*?\n', '', text)
    text = re.sub(r'UFV ASC.*?Available online at:.*?\n', '', text, flags=re.DOTALL)
    text = re.sub(r'or \(Chilliwack CEP\) 604 -504-7441 ext\. 2432.*?\n', '', text, flags=re.DOTALL)
    return text

def create_cleaned_text_file(text):
    cleaned_text = text.replace('\n', '').replace('\t', '')
    cleaned_content = re.sub(r'[^A-Za-z0-9]', ' ', cleaned_text)
    cleaned_content = re.sub(r'\b\d{10,14}\b', ' ', cleaned_content)
    cleaned_content = re.sub(r'\b\d{3}-\d{3}-\d{4}\b|\b\d{10,14}\b', '', cleaned_content)
    with open("clean_extracted.txt", "w", encoding='utf-8') as text_file:
        text_file.write(cleaned_content)

def removeStopwords(cleaned_content):
    stop_words = set(stopwords.words('english'))
    words = word_tokenize(cleaned_content)
    without_stop_words = [word for word in words if word not in stop_words]
    return ' '.join(without_stop_words)

if __name__ == '__main__':
    if len(sys.argv) == 2:
        process_pdf_file(sys.argv[1])
    else:
        print("Usage: python extract_pdf.py <file_path>")
