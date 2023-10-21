//Conditionals in Javascript

// Singal if statement 
var age = 18;
if(age<18)
{
    console.log("You are not adult");
}

// if else Statements 
if(age<18)
{
    console.log("You are not adult");
}else
{
    console.log("You are adult now!");
}

// if else ladder 
if (age == 80) {
    console.log("You are senior citizen");
} else if (age < 18) {
    console.log("You are kid");
}else if (age >= 18) {
    console.log("You are Adult");
} else if (age == 60) {
    console.log("Confirm you are becoming older");
} else if (age == 90) {
    console.log("Confirm you are going die");
} else if (age == 110) {
    console.log("Confirm you are dead");
} else {
    console.log("You are not a human! aa! aa! Monster!!!");
    console.log("Run everybody!!!");
}