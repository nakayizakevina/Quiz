
const questions = [
   {
    question : "Which keyword is used to declare a variable in JavaScript that cannot be reassigned?",
    options :{a : "var", b : "let", c : "const", d : "assign"},
    correct : "c",
   },

  {
    question : "What does JS stand for in programming?",
    options : {a : "JavaScript", b : "JavaStyle", c : "JargonSyntax", d : "JustScript"},
    correct : "a"
  },

  {
    question: "Which method is used to print output to the browser console in JavaScript?",
    options:{a : "Print()", b : "echo()", c : "write()", d : "console.log()"},
    correct : "d"
  }
]


function testCompliation (){
   for (K = 0; K < questions.length; K++){
    const iterate = questions[K];
    const answer = prompt (
        `${K+1}.${iterate.question} \n` +
        `a) ${iterate.options.a} \n` +
        `b) ${iterate.options.b} \n` +
        `c) ${iterate.options.c} \n` +
        `d) ${iterate.options.d} \n` 
         );
 if(answer === iterate.correct || answer === iterate.options[iterate.correct]){
    console.log(`${iterate.options[iterate.correct]} is correct`);
} else {
    console.log(`The correct answer is ${iterate.options[iterate.correct]}`)
}
   
}


}
    testCompliation();


