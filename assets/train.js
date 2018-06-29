// Initialize Firebase
var config = {
    apiKey: "AIzaSyALJqVYsCMAVkXAQ4XEBL83DFTucPxHZuc",
    authDomain: "traintime-c8fbe.firebaseapp.com",
    databaseURL: "https://traintime-c8fbe.firebaseio.com",
    projectId: "traintime-c8fbe",
    storageBucket: "traintime-c8fbe.appspot.com",
    messagingSenderId: "543183867704"
  };
  firebase.initializeApp(config);
  
  var database = firebase.database();
  
  
  // submit a new train to Firebase
  $("#add-train").on("click", function (event) {
    event.preventDefault();
  
    var trainName = $("#train-input").val().trim();
    var trainDestination = $("#destination-input").val().trim();
    var trainTime = $("#trainTime-input").val().trim();
    var frequency = $("#frequency-input").val().trim();
  
    var newTrain = {
      name: trainName,
      destination: trainDestination,
      time: trainTime,
      freq: frequency
    };
  
    database.ref().push(newTrain);
  
    alert("Train successfully added");
  
    $("#train-input").val("");
    $("#destination-input").val("");
    $("#trainTime-input").val("");
    $("#frequency-input").val("");
  });
  
  
  // receive new trains from Firebase
  database.ref().on("child_added", function (childSnapshot, prevChildKey) {
    // console.log(childSnapshot.val());
  
    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var trainTime = childSnapshot.val().time;
    var frequency = childSnapshot.val().freq;
  
  
    var firstTimeConv = moment(trainTime, "HH:mm").subtract(1, "years");
    // console.log("firstTimeConv: " + firstTimeConv);
  
    var currentTime = moment();
    // console.log("current time: " + moment(currentTime).format("hh:mm"));
  
    var diffTime = moment().diff(moment(firstTimeConv), "minutes");
    // console.log("difference in time: " + diffTime);
  
    var tRemainder = diffTime % frequency;
    // console.log("tRemainder: " + tRemainder);
  
    var minTillTrain = frequency - tRemainder;
    // console.log("MINUTES TILL TRAIN: " + minTillTrain);
  
    var nextTrain = moment().add(minTillTrain, "minutes");
    // console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
  
    $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + frequency + "</td><td>" + moment(nextTrain).format("hh:mm") + "</td><td>" + minTillTrain + "</td></tr>");
  });