var config = {
    apiKey: "AIzaSyAftdjYKnYfRfR_Z7jrQE3k6EPKDubuiOg",
    authDomain: "groupstuff-3f245.firebaseapp.com",
    databaseURL: "https://groupstuff-3f245.firebaseio.com",
    projectId: "groupstuff-3f245",
    storageBucket: "",
    messagingSenderId: "956410588944",
    appId: "1:956410588944:web:5b1ec220f10c0653"
};

firebase.initializeApp(config);

var database = firebase.database();

$(document).ready(function () {
    console.log("ready!");
});

var name = "";
var role = "";
var monthlyRate = 0;
var date = "";

$(document).on("click", "#submit", function () {
    event.preventDefault();
    name = $("#eName").val().trim();
    role = $("#eRole").val().trim();
    monthlyRate = $("#eMR").val().trim();
    date = $("#eDt").val().trim();

    console.log(name);
    console.log(role);
    console.log(monthlyRate);
    console.log(date);

    database.ref().push({
        name: name,
        role: role,
        monthlyRate: monthlyRate,
        date: date
    });
});

database.ref().on("child_added", function(snap) {

    // if (snapshot.child("name").exists() && snapshot.child("highPrice").exists()) {
    //   highBidder = snapshot.val().highBidder;
    //   highPrice = parseInt(snapshot.val().highPrice);
    // }

    console.log(snap.val());

    var nameDiv = $("<div>");
    nameDiv.addClass("name").attr("data-name", snap.val().name).html(snap.val().name);

    var roleDiv = $("<div>");
    roleDiv.addClass("role").attr("data-role", snap.val().role).html(snap.val().role);
    
    var monthlyRateDiv = $("<div>");
    monthlyRateDiv.addClass("monthlyRate").attr("data-monthlyRate", snap.val().monthlyRate).html(snap.val().monthlyRate);

    var dateDiv = $("<div>");
    dateDiv.addClass("name").attr("data-date", snap.val().date).html(snap.val().date);
    
    $("#displayName").prepend(nameDiv);
    $("#displayRole").prepend(roleDiv);
    $("#displayMonthlyRate").prepend(monthlyRateDiv);
    $("#displayDate").prepend(dateDiv);

  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

// database.ref().push({
//     highBidder: bidderName,
//     highPrice: bidderPrice
//   });