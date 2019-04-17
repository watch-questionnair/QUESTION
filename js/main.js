const allData = JSON.parse(localStorage.getItem('data')) || [{session: 0, before: 3, after: 4}]
let currSession = false;

const divQuestion = document.getElementById('question');
const btnProceed = document.getElementById('proceed');
const divMessage = document.getElementById('message');
const theMsg = document.getElementById('msg');

let session = allData.length;
const eSession = document.getElementById('session');
eSession.innerHTML = `Session: ${session}, Status: BEFORE`;


// function savePlan(){
function saveData(){
  //   var myDayPlan = document.getElementById('6:00').value;
  //var moodButton = document.getElementById('1').value;
  //   localStorage.setItem(currentDay + '6:00', myDayPlan);
  localStorage.setItem('data', JSON.stringify(allData));
  //
  //   var myDayPlan = document.getElementById('6:30').value;
  //each place to store
  //   localStorage.setItem(currentDay + '6:30', myDayPlan);
  // }
}
// document.getElementById('savebutton').onclick = function() {
document.querySelectorAll('.emoji').forEach(function(btn) {
  btn.addEventListener('click', function({target}) {
    console.log(target);
    if (!currSession) {
      currSession = {session: session, before: parseInt(target.dataset.mood), after: null};
      eSession.innerHTML = `Session: ${session}, Status: AFTER`;
      showMessage('Please proceed through the curtain.');

    }
    else {
      currSession.after = parseInt(target.dataset.mood);
      allData.push(currSession);
      eSession.innerHTML = `Session: ${++session}, Status: BEFORE`;
      currSession = false;
      saveData();
      showMessage('Welcome to WATCH');
    }
  });
});


function showMessage(msg) {
  document.getElementById('question').style.display = "none";
  theMsg.innerHTML = msg;
  document.getElementById('msg').style.display = "inline";
  // show #message

}

btnProceed.addEventListener('click', function() {
  document.getElementById('message').style.display = "none";
  theMsg.innerHTML = msg;
  document.getElementById('msg').style.display = "block";
  // hide #message
  // show #quesion
});

showMessage('Welcome to WATCH');




//
// function callPlan(){
// function callPlan(){
// //   var storedPlan = localStorage.getItem(currentDay + '6:00');
//      var storedData = localStorage.getItem('1');
// //   document.getElementById('6:00').value = storedPlan;
//      document.getElementById('1').value = storedData;
// //   var storedPlan = localStorage.getItem(currentDay + '6:30');
//      var storedData = localStorage.getItem('2');
// //   document.getElementById('6:30').value = storedPlan;
//      document.getElementById('1').value = storedData;
// // }
// }
// var myTripButton = document.getElementById('datetripb');
// var myTripDay = document.getElementById('datetrip');
//
// function setTrip(){
//   var myDay = prompt('Please enter your Trip.');
//   localStorage.setItem('date', myDay);
//   myTripDay.textContent = myDay
// }
//
// if(!localStorage.getItem('date')) {
//   setTrip();
// } else {
//   var storedDay = localStorage.getItem('date');
//   myTripDay.textContent = storedDay;
// }
//
// myTripButton.onclick = function() {
//   setTrip();
// }
