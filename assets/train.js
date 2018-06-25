// Initialize Firebase
/*var config = {
    apiKey: "AIzaSyALJqVYsCMAVkXAQ4XEBL83DFTucPxHZuc",
    authDomain: "traintime-c8fbe.firebaseapp.com",
    databaseURL: "https://traintime-c8fbe.firebaseio.com",
    projectId: "traintime-c8fbe",
    storageBucket: "traintime-c8fbe.appspot.com",
    messagingSenderId: "543183867704"
};
firebase.initializeApp(config);

var database = firebase.database();
*/
$("#add-train").on("click", function(event) {
    event.preventDefault();

    var trainName = $("#train-input").val().trim();
    var trainDestination = $("#destination-input").val().trim();
    var trainTime = moment($("#trainTime-input").val().trim(), "HH:mm").format("X");
    var frequency = moment($("#frequency-input").val().trim(),"mm");

    var newTrain = {
        name: trainName,
        destination: trainDestination,
        time: trainTime,
        freq: frequency
    };

    //database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.time);
    console.log(newTrain.freq);

    alert("Train successfully added");

    $("#train-input").val("");
    $("#destination-input").val("");
    $("#trainTime-input").val("");
    $("#frequency-input").val("");

    $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + frequency + "</td></tr>");


});

/*database.ref().on("child_added", function(childSnapshot, prevChildKey) {
    console.log(childSnapshot.val());
    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var trainTime = childSnapshot.val().time;
    var frequency = childSnapshot.val().freq;

    console.log(name);
    console.log(destination);
    console.log(trainTime);
    console.log(freq);
*/
    //var trainTimePretty = moment.unix(trainTime).format("HH:mm");
    //matematicas


//});
