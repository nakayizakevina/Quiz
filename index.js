const question1 = {
    question: "Which keyword is used to declare a variable in JavaScript that cannot be reassigned?",
    optiona : "var",
    optionb : "let",
    optionc : "const",
    optiond : "assign",
        
    }
    
    
alert("Question 1");

const answer = prompt(
  "Which keyword is used to declare a variable in JavaScript that cannot be reassigned?\n" +
  "a) var\n" +
  "b) let\n" +
  "c) const\n" +
  "d) assign"
);

if (answer === "c" || answer === question1.optionc ){
    console.log(`${question1.optionc} is correct`);
} else {
    console.log(`Sorry the right answer is ${question1.optionc}`)
}