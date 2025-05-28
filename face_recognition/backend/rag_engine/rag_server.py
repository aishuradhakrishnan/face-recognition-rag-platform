from flask import Flask, request, jsonify
from langchain.chains import RetrievalQA
from langchain.vectorstores import FAISS
from langchain.embeddings.openai import OpenAIEmbeddings
from openai import OpenAI
import os

app = Flask(__name__)

# Load environment variables
from dotenv import load_dotenv
load_dotenv()
OPENAI_API_KEY = os.getenv("YOUR_OPEN_API")

# Initialize OpenAI embeddings
embeddings = OpenAIEmbeddings(openai_api_key=OPENAI_API_KEY)

# Load or create FAISS index
# Assume 'documents' is a list of strings containing registration info
# documents = ["Karthik registered at 10:00 AM", ...]
# vector_store = FAISS.from_texts(documents, embeddings)

# For demonstration, using an empty vector store
vector_store = FAISS(embeddings.embed_query)

retriever = vector_store.as_retriever()
qa_chain = RetrievalQA.from_chain_type(llm=OpenAI(api_key=OPENAI_API_KEY), retriever=retriever)

@app.route('/query', methods=['POST'])
def query():
    data = request.get_json()
    question = data.get('question', '')
    answer = qa_chain.run(question)
    return jsonify({'answer': answer})

if __name__ == '__main__':
    app.run(port=5000)
