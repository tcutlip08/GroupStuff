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

$(document).ready(function () {
    console.log("ready!");
});

$(document).on("click", "#submit", function () {
    
    console.log("Hey")
});

// database.ref().on("child_added", function(snapshot) {

//     if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {
//       highBidder = snapshot.val().highBidder;
//       highPrice = parseInt(snapshot.val().highPrice);
//     }
  
//     console.log(highBidder);
//     console.log(highPrice);
//     $("#highest-bidder").text(highBidder);
//     $("#highest-price").text(highPrice);
  
//   }, function(errorObject) {
//     console.log("The read failed: " + errorObject.code);
//   });

// database.ref().push({
//     highBidder: bidderName,
//     highPrice: bidderPrice
//   });