import pyrebase

config = {
  "apiKey": "AIzaSyDVhynHE9ALyUyRkRwKKRcIxjoEU-0_-2s",
  "authDomain": "yummy-e448a.firebaseapp.com",
  "databaseURL": "https://yummy-e448a-default-rtdb.europe-west1.firebasedatabase.app",
  "projectId": "yummy-e448a",
  "storageBucket": "yummy-e448a.appspot.com",
  "messagingSenderId": "602381728354",
  "appId": "1:602381728354:web:f85e8cdad859b72d29ef3b",
  "measurementId": "G-7FT6HRM07B"
}

firebase = pyrebase.initialize_app(config)
storage = firebase.storage()

path_on_cloud = "/images/holaqupasa.jpg"
path_local = "images/test.jpg"

# Upload
storage.child(path_on_cloud).put(path_local)

# Download
# storage.child(path_on_cloud).download(path_on_cloud, "images/test.jpg")