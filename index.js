
const quiz = [
    {
        question: "What is the capital of Australia?",
        ans1 : "Sydney",
        ans2 : "Melbourne",
        ans3 : "Canberra",
        ans4 : "Perth",
        answer : "Canberra",
     },
     {
        question: "Who painted the Mona Lisa?",
        ans1 : "Vincent van Gogh",
        ans2 : " Pablo Picasso",
        ans3 : "Leonardo da Vinci",
        ans4 : " Michelangelo",
        answer : "Leonardo da Vinci",
     },
     {
        question: "What is the largest ocean in the world?",
        ans1 : "Atlantic Ocean",
        ans2 : "Indian Ocean",
        ans3 : "Arctic Ocean",
        ans4 : "Pacific Ocean",
        answer : "Pacific Ocean",
     },
     {
        question: "Who wrote the play Romeo and Juliet?",
        ans1 : " William Shakespeare",
        ans2 : "Jane Austen",
        ans3 : "Charles Dickens",
        ans4 : "F. Scott Fitzgerald",
        answer : "William Shakespeare",
     },
     {
        question: "What is the currency of Japan?",
        ans1 : "Yen",
        ans2 : "Euro",
        ans3 : "Dollar",
        ans4 : "Rupee",
        answer : "Yen",
     },
     {
        question: "Who is the author of the Harry Potter book series?",
        ans1 : "J.R.R. Tolkien",
        ans2 : "J.K. Rowling",
        ans3 : "George R.R. Martin",
        ans4 : "Dan Brown",
        answer : "J.K. Rowling",
     },
     {
        question: "Which country is known as the Land of the Rising Sun?",
        ans1 : "China",
        ans2 : "South Korea",
        ans3 : "Japan",
        ans4 : "Thailand",
        answer : "Japan",
     },

]

const quest = document.getElementById("quiz-questions");
const opta = document.getElementById("option-a");
const optb = document.getElementById("option-b");
const optc = document.getElementById("option-c");
const optd = document.getElementById("option-d");
const answerelement = document.getElementsByClassName(".answers");


const submit = document.getElementById("nxt-btn");

let currentquestion = 0;
let score = 0;

quest.textContent = quiz[currentquestion].question;
opta.textContent = quiz[currentquestion].ans1;
optb.textContent = quiz[currentquestion].ans2;
optc.textContent = quiz[currentquestion].ans3;
optd.textContent = quiz[currentquestion].ans4;



submit.addEventListener("click", () => {
    const checkedans = document.querySelector('input[type="radio"]:checked')
    if(checkedans === null)
    {
        alert("Please select an option");
    }
    else
    if(checkedans.nextElementSibling.textContent == quiz[currentquestion].answer)
    {
        score++;
    }

   
    currentquestion++;

    if(currentquestion < quiz.length)
    {
        quest.textContent = quiz[currentquestion].question;
        opta.textContent = quiz[currentquestion].ans1;
        optb.textContent = quiz[currentquestion].ans2;
        optc.textContent = quiz[currentquestion].ans3;
        optd.textContent = quiz[currentquestion].ans4; 
        checkedans.checked = false;
    }
    else
    {
        alert("Your Score is " + score + " out of " + quiz.length );
        location.reload();
    }
});