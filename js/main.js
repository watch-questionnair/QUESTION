// function savePlan(){
function saveData(){
//   var myDayPlan = document.getElementById('6:00').value;
var moodButton = document.getElementById('1').value;
//   localStorage.setItem(currentDay + '6:00', myDayPlan);
localStorage.setItem(mood1 += 1);
//
//   var myDayPlan = document.getElementById('6:30').value;
each place to store
//   localStorage.setItem(currentDay + '6:30', myDayPlan);
// }
}
// document.getElementById('savebutton').onclick = function() {
document.getElementById('buttonId?').onclick = function(){
//   savePlan();
    saveData();
// }
}
//
// function callPlan(){
    function callPlan(){
//   var storedPlan = localStorage.getItem(currentDay + '6:00');
     var storedData = localStorage.getItem('1');
//   document.getElementById('6:00').value = storedPlan;
     document.getElementById('1').value = storedData;
//   var storedPlan = localStorage.getItem(currentDay + '6:30');
     var storedData = localStorage.getItem('2');
//   document.getElementById('6:30').value = storedPlan;
     document.getElementById('1').value = storedData;
// }
      }
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
