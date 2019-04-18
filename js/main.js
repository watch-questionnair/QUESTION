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
      showMessage('Welcome to' + 'logo');
    }
  });
});


function showMessage(msg) {
  // hide #question
  theMsg.innerHTML = msg;
  // show #message

}

function showMessage(logo) {
  // hide #question
  theMsg.innerHTML = logo;
  // show #message

}

btnProceed.addEventListener('click', function() {
  // hide #message
  // show #quesion
});


showMessage('Welcome to <img src="img/Watch-logo-word copy.png" alt="">' )
