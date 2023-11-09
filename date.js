let myDate = new Date();

// Date Methods
// console.log(myDate.getTime());
// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth()+1);

// Printing Date in format
var date = myDate.getDate();
var year = myDate.getFullYear();
var month = myDate.getMonth()+1;
var formatedDate = '0' + date + '/' + month + '/' + year;
console.log(formatedDate);