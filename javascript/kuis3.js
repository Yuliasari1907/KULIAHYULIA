//quiz
class Quiz{
    constructor(questions){
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex(){
        return this.questions[this.questionIndex];
    }

    guess(answer){
        if(this.getQuestionIndex().isCorrectAnswer(answer)){
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded(){
        return this.questionIndex === this.questions.length;
    }
}

//create a question class
class Question{
    constructor(text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    isCorrectAnswer(choice){
        return this.answer === choice;
    }
}
 
//DISPLAY QUESTIOM
function displayQuestion(){
    if(quiz.isEnded()){
        showScores();
    }else{
        //show question
        let questionElement = document.getElementById("pertanyaan");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        //show option
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++){
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};
//GUESS FUNCTION
function guess(id, guess){
    let button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        displayQuestion();
    }
}
// show  quiz progress
function showProgress(){
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = 
    `Pertanyaan ${currentQuestionNumber} dari ${quiz.questions.length}
    `;
}
 
 
//show score
function showScores(){
        let remark = null 
        if (quiz.score <= 2) {
            remark = "Jangan Menyerah, Teruslah Belajar" 
        }
        else if (quiz.score >= 3 && quiz.score < 4) {
            remark = "Tingkatkan Lagi Belajarnya"
             
        }
        else if (quiz.score >= 4) {
            remark = "Kamu Luar Biasa"
        }
        const nilai =quiz.score*10;
        
    let quizEndHTML =
        `
            <h3> Selamat <br>Kamu Telah Menyelesaikan Soal</h3>
            <h2 id="score"> Skor Anda : ${quiz.score} dari ${quiz.questions.length}</h2>
      
            
            <div class="quiz-repeat">
                <a href="SpesialisasiPadaSelHewan.html"> Kembali Ke Materi </a>
            </div>
            <div class="quiz-repeat">
                <a href="PETUNJUK PENGERJAAN.html"> Materi Selanjutnya</a>
            </div>
           
        `;

        let quizElement = document.getElementById("soal");
        quizElement.innerHTML = quizEndHTML;
}

// CREATE QUIZ QUESTIONS
let questions = [
    
    new Question(
        "Organisme yang terdiri dari satu sel  disebut….  ", ["Organisme multiseluler","Organisme selulosa ", " Organisme seluler ", "Organisme uniseluler"],"Organisme uniseluler " 
    ),

    new Question(
        "Contoh spesialisasi sel pada hewan ,<i>kecuali</i>  … ", ["sel epidermis"," sel darah merah ", "sel otot  ", "sel saraf"],"sel epidermis " 
    ),

    new Question(
        "Sel darah merah dibentuk dalam…. ", ["otot "," otak", "sumsum tulang  ", "paru-paru"],"sumsum tulang " 
    ),

    new Question(
        " Neuron terdiri dari tiga bagian yaitu…", ["Dendrit,eritrosit,neurit(akson)."," Sel otot,badan sel,neurit(akson).", "	Dendrit,reseptor,neurit(akson).  ", "Dendrit,badan sel,neurit(akson)"],"Dendrit,badan sel,neurit(akson) " 
    ),

    new Question(
        "Organisme yang memiliki bersel banyak disebut organisme…..   ", ["uniseluler",".	multiseluler ", "	selulosa  ", "membran sel"],"multiseluler " 
    ),

    new Question(
        "Pada  selubung mielin terdapat interval yang disebut nodus…. ", ["Ranvier","Neurielma ", " 	Dendrit ", "	Akson"],"Ranvier" 
     
    ),

    new Question(
        "Contoh sistem organ pada hewan dan manusia ,<i>kecuali<i>…… ", ["sistem gerak"," sistem otot", "sistem pernapasan  ", "sistem saraf"],"sistem otot " 
    ),

    new Question(
        " Guard cell biasa disebut juga dengan…..", ["sel penjaga"," sel tetangga", " sel otot ", "sel saraf"],"sel penjaga " 
    ),

    new Question(
        " Stomata pada tumbuhan xerofit merupakan contoh stomata….", ["stomata fanerofor","stomata kriptofor ", " stomata membuka ", "stomata menutup"],"stomata kriptofor " 
    
    ),

    new Question(
        " Alat sekresi yang mengeluarkan semacam lendir  disebut….", ["stomata","kriptofor ", " trikomata ", "papilla "],"papilla"  
       
    ),

    
];
let quiz = new Quiz(questions);

//display question
displayQuestion();


