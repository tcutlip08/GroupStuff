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

// var displayDate = new date();
// console.log(displayDate);

database.ref().on("child_added", function (snap) {

    // if (snapshot.child("name").exists() && snapshot.child("highPrice").exists()) {
    //   highBidder = snapshot.val().highBidder;
    //   highPrice = parseInt(snapshot.val().highPrice);
    // }

    console.log(snap.val().date);

    // console.log(moment(snap.val().date, "YYYYMMDD").fromNow());
    var month = calcMonthsWorked(snap);
    console.log(month);

    var nameDiv = $("<div>");
    nameDiv.addClass("name").attr("data-name", snap.val().name).html(snap.val().name);

    var roleDiv = $("<div>");
    roleDiv.addClass("role").attr("data-role", snap.val().role).html(snap.val().role);

    var monthlyRateDiv = $("<div>");
    monthlyRateDiv.addClass("monthlyRate").attr("data-monthlyRate", snap.val().monthlyRate).html(snap.val().monthlyRate);

    var dateDiv = $("<div>");
    dateDiv.addClass("name").attr("data-date", snap.val().date).html(snap.val().date);

    var monthDiv = $("<div>");
    monthDiv.addClass("month").attr("data-month", month).html(month);

    $("#displayName").append(nameDiv);
    $("#displayRole").append(roleDiv);
    $("#displayMonthlyRate").append(monthlyRateDiv);
    $("#displayDate").append(dateDiv);
    $("#displayMonthsWorked").append(monthDiv);

}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});

function calcMonthsWorked(snap) {
    var now = moment(new Date()); //todays date
    var end = moment(snap.val().date); // another date
    var duration = moment.duration(now.diff(end));
    var months = parseInt(duration.asMonths());
    var years = parseInt(duration.asYears());
    console.log("month: " + months);
    console.log("year: " + years);

    return months;
}

// database.ref().push({
//     highBidder: bidderName,
//     highPrice: bidderPrice
//   });