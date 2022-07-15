//types of functions
function sayHi() {
  console.log("hi");
}
let sayHI = function () {
  console.log("hi");
};
function askQuestion(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
function showOk() {
  console.log("agreed");
  alert("You agreed");
}
function showCancel() {
  console.log("cancelled");
  alert("You Cancelled");
}
//usage: functions showOk,showCancel are passed as arguments to askQuestion
askQuestion("Do You Agree", showOk, showCancel);
