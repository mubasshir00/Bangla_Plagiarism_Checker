import flask 
from flask import request, jsonify
import pickle
import keras
from keras.models import load_model
import json
from tensorflow.keras.preprocessing.sequence import pad_sequences


app = flask.Flask(__name__)

# we need to redefine our metric function in order 
# to use it when loading the model 
def auc(y_true, y_pred):
    auc = tf.metrics.auc(y_true, y_pred)[1]
    keras.backend.get_session().run(tf.local_variables_initializer())
    return auc

# load the model, and pass in the custom metric function

model = load_model('Document.h5', custom_objects={'auc': auc})



@app.route("/predict", methods=["POST"])
def predict():
    content_type = request.headers.get('Content-Type')
    json =''
    if (content_type == 'application/json'):
        json = request.json
    print(json['article'])    
    sample_news = json['article']
    class_names = ['Accident' ,'Amusement' ,'Art' ,'Business' ,'Chakri', 'Corporate', 'Employment','Health', 'Lifestyle', 'Opinion' ,'Politics' ,'Sports']
    with open('tokenizer.pickle', 'rb') as handle:
        loaded_tokenizer = pickle.load(handle)
    seq= loaded_tokenizer.texts_to_sequences([sample_news])
    padded = pad_sequences(seq, value=0.0,padding='post', maxlen= 300 )


    pred = model.predict(padded)
    y_pred = pred.reshape(-1)
    class_labels=[(class_names[i],round(prob*100,2)) for i,prob in enumerate(y_pred) if prob > 0.1]
    maxium = 0
    category = "uncategorized"
    for k, v in class_labels:
        if maxium <= v :
            maxium = v 
            category = k

    return flask.jsonify({'category': category});    

# start the flask app, allow remote connections 
app.run(host='0.0.0.0',port=8080)