# Bangla_Plagiarism_Checker

To develop a plagiarism checker I’m following microservice architecture. Here I have 5 types of service in the backend.

1. Data Scrapper service: To collect data from the different sources we need a service that is only responsible for web scraping and sending data for data classification.
2. Data Classification Service: From here we will develop our incremental model to classify our data.
3. Input Data classification Service: This service will classify user input and define their family.
4. Main Server: responsible for accepting data from client/user.
5. Plagiarism Service: Here we will implement multiple types of plagiarism checker algorithms and analyze their performance.

# description

Here I've used three different approach for checking plagiarism .
1) Cosine Similarity
2) Jaccard Similarity
3) Bert 

<br>
For Bert, we've used Universal Sentence Encoder model which is a model that encodes text into 512-dimensional embeddings and tensorflow/tfjs-node for native TensorFlow execution in backend JavaScript applications under the Node.js runtime.

