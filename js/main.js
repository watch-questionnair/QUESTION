var balance = 12345;

balance = balance - 300;
balance-= 300;  //same thing

balance = balance + 1;
balance += 1;
balance++;

var name = `George`
//identical:
console.log(name + "'s pet dog has" + balance + "dolloars");
console.log(name + '\'s pet dog has $' + balance + 'dolloars');
console.log(`${name}'s pet dog has $${balance} dolloars`);

//boolean
var happy = true;

if (happy) {
  console.log("Hello world!");
}
else {
  console.log(":(")
}

if (balance > 10000 || balance < 1000000) {
  console.log("baller!");
}
else if (balance >10000) {
  console.log('baller!')
}
