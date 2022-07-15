let empty = [];
let newEmpty = new Array();
let newArray = ["this will work", 12, null];
console.log(newArray);
console.log(newArray.length);
let AssociateArray = [];
AssociateArray["first"] = ["This is the First value"];
AssociateArray["second"] = ["This is the Second value"];
AssociateArray["Third"] = ["This is the Third value"];
AssociateArray["Fourth"] = ["This is the Fourth value"];
AssociateArray["Fifth"] = ["This is the Fifth value"];
console.log(AssociateArray);

for (i = 0; i < newArray.length; i++) {
  console.log(newArray[i]);
}

//for-in
for (i in AssociateArray) {
  console.log(AssociateArray[i]);
}
//without Quotes to the key
let colors = {
  Red: "Blood",
  Green: "Plant",
  Yellow: "Tdp",
  Blue: "YCP",
  White: "Good",
};

for (key in colors) {
  console.log(colors[key]);
}
