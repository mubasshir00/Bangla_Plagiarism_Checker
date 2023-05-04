import pandas as pd 
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

df = pd.read_csv('iris.csv')

print(df.head())

#select independent and dependent variable
x = df[["Sepal_Length","Sepal_Width","Petal_Length","Petal_Width"]]
y = df["Class"]

#split the dataset into train and test
X_train , X_test, y_train , y_test = train_test_split(x,y,test_size=0.3,random_state=50)

