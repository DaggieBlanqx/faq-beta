// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: "<API_KEY>",
  authDomain: "<PROJECT_ID>.firebaseapp.com",
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
  projectId: "<PROJECT_ID>",
  storageBucket: "<BUCKET>.appspot.com",
  messagingSenderId: "<SENDER_ID>",
};
firebase.initializeApp(config);
// get a reference to the root of your database
var faqbetaRef = firebase.database().ref('/').orderByKey();
faqbetaRef.once('value')
  .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
          var key = childSnapshot.key;
          // childData will be the actual contents of the child
          var childData = childSnapshot.val();
          // faq section questions and answers, call from firebase realtime database
          var faq_question = childSnapshot.val().faq_question;
          var faq_answer = childSnapshot.val().faq_answer;
          var faq_question1 = childSnapshot.val().faq_question1;
          var faq_answer1 = childSnapshot.val().faq_answer1;
          // create a javaScript object for the HTML element that has id="question" 
          document.getElementById('question').innerHTML = faq_question;
          // create a javaScript object for the HTML element that has id="answer"
          document.getElementById('answer').innerHTML = faq_answer;
          // create a javaScript object for the HTML element that has id="question1" 
          document.getElementById('question1').innerHTML = faq_question1;
          // create a javaScript object for the HTML element that has id="answer1"
          document.getElementById('answer1').innerHTML = faq_answer1;
      });
  });