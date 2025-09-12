const question1 = {
    question: "Which keyword is used to declare a variable in JavaScript that cannot be reassigned?",
    optiona : "var",
    optionb : "let",
    optionc : "const",
    optiond : "assign",
        
    }
    
    


function JStest (attempts){
    alert("Question 1");

const answer = prompt(
  "1. Which keyword is used to declare a variable in JavaScript that cannot be reassigned?\n" +
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

const question2 ={
    question: "What does JS stand for in programming?",
    optiona : "JavaScript",
    optionb : "JavaStyle",
    optionc : "JargonSyntax",
    optiond : "JustScript",

}

const answer2 = prompt (
    "2. What does JS stand for in programming? \n" +
    "a) JavaScript \n" + 
    "b) JavaStyle \n" +
    "c) JargonSyntax \n" +
    "d) JustScript"

)

if(answer2 === "a" || answer2 === question2.optiona){
    console.log(`${question2.optiona} is correct`);
} else {
    console.log(`Sorry the right answer is ${question2.optiona}`)

}

const question3 = {
    question : "Which method is used to print output to the browser console in JavaScript?",
    optiona : "print",
    optionb : "echo",
    optionc : "write",
    optiond : "console.log",

}

const answer3 = prompt (
    "3. Which method is used to print output to the browser console in JavaScript? \n" +
    "a) print() \n" + 
    "b) echo \n" +
    "c) write \n" +
    "d) console.log()"

)

if(answer3 === "d" || answer3 === question3.optiond){
    console.log(`${question3.optiond} is correct`);
} else {
    console.log(`Sorry the right answer is ${question3.optiond}`)
}
}

alert (JStest)