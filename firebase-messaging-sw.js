importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
 
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCkZ6MW6yYW53DTmRLnnDsxfNizfB1l00M",
    authDomain: "sdmstest-637a3.firebaseapp.com",
    //databaseURL: "https://seoulsafecitytest.firebaseio.com",
    projectId: "sdmstest-637a3",
    storageBucket: "sdmstest-637a3.appspot.com",
    messagingSenderId: "147112431607"
};
firebase.initializeApp(config);
 
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload){
 
    const title = "Hello World";
    const options = {
            body: payload.data.status
    };
 
    return self.registration.showNotification(title,options);
});
