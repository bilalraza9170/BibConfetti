import os
from openai import OpenAI
import sys

def summarize_text_file(file_path):
    with open(file_path, 'r') as file:
        text = file.read()
    return text

def summarize(summarized_text):
    client = OpenAI(api_key='')
    references = """
    1. Author A et al. (Year). Title of the Paper. <a href="https://example.com">Journal Name</a>.
    2. Author B et al. (Year). Title of the Paper. <a href="https://example.com">Journal Name</a>.
"""
    system = [{"role": "system",
                 "content": """You are a chatbot that receives a text and extract Abstract and keywords from the paper. Generate a detailed summary of the key findings, methodology, and conclusions, emphasizing the most significant insights, practical applications, and implications for the field. Additionally, identify sections of the paper that warrant closer examination, such as innovative methodologies or controversial findings, and offer suggestions for further analysis or experiments that could enhance the paper. Provide a checklist of criteria for evaluating the quality and novelty of the research, and include references to related literature or prior work for contextual understanding. Finally, offer additional hyperlinks related to the work of referenced materials."""}]
    user = [{"role": "user", "content": summarized_text}]
    chat = []
    response = client.chat.completions.create(
        messages=system + user,
        model="gpt-3.5-turbo", top_p=0.5, stream=True)
    reply = ""
    for delta in response:
        if not delta.choices[0].finish_reason:
            word = delta.choices[0].delta.content or ""
            reply += word
            # print(word, end="")
    return reply


def model_run(summarized_text):
    # file = input("Enter file path to summarize: ")
    # summarized_text = summarize_text_file(file)
    summary = summarize(summarized_text)
    # save in file summary.txt
    with open("summary.txt", "w") as file:
        file.write(summary)




if __name__ == '__main__':
    if len(sys.argv) == 2:
        model_run(sys.argv[1])
    else:
        print("Usage: python extract_pdf.py <file_path>")