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
                <a href="Latihan1.html"> Kembali Ke Materi </a>
            </div>
            <div class="quiz-repeat">
                <a href="StrukturSel.html"> Materi Selanjutnya</a>
            </div>
           
        `;

        let quizElement = document.getElementById("soal");
        quizElement.innerHTML = quizEndHTML;
}

// CREATE QUIZ QUESTIONS
let questions = [
    new Question(
        "Pada tahun 1674 seorang ilmuan merancang sebuah mikroskop berlensa tunggal.Ilmuan tersebut  yaitu…", ["Robert Brown ","Rudolf Virchow ", "Jacob Schleiden ", "Antonie Van Leeuwenhoek"],"Antonie Van Leeuwenhoek" 
    ),

    new Question(
        "Organisme yang bergerak didalam air dimana  binatang ini sangat kecil disebut…", [" <i>animaculla</i> ", " <i>raster</i> ", "<i>dots</i> "], "<i>animaculla</i>"
    ),
    new Question(
        "Orang pertama yang menemukan sel yaitu…..", ["Robert Brown","Antonie Van Leeuwenhoek ", " Jacob Schleiden  ", "Rudolf Virchow "]," Antonie Van Leeuwenhoek" 
    ),
    new Question(
        "Pada tahun 1835 seorang ahli biologi perancis menjumpai cairan yang disebut plotoplasma dalam setiap sel.Ahli Ahli biologi tersebut yaitu…", ["Felix Durjadin","Rudolf Virchow  ", " Jacob Schleiden  ", "	Antonie Van Leeuwenhoek"]," Felix Durjadin" 
    ),

    new Question(
        "Ukuran mikroskop sangat kecil, sehingga bagian sel yang hanya dapat dilihat dengan menggunakan mikroskop yaitu sekitar…. ", ["	1-50 μm","	1-100 μm ", " 1-200 μm ", "1-250 μm"]," 1-100 μm" 
    ),

    new Question(
        "Vivi aalah anak kelas VIII A ,dimana dia mengamati sebuah preparat perbesaran lensa okulernya yaitu 10X dan perbesaran lensa objektifnya 100X.Maka besar perbesaran total pada mikroskop tersebut adalah… ", ["50X"," 100X", " 200X ", "1000X"],"1000X " 
    ),
    new Question(
        "Pada tahun berapa Johannes Purkinje mengajukan istiliah bahwa plotoplasm untuk menamai bahan embryonal sel telur… ", ["1787-1869","1788-1869 ", " 1789-1869 ", "1790-1869"]," 1787-1869" 
    ),
    
    new Question(
        " TEM merupakan singkatan dari…", ["Television Electron Microscope","Transition Electron Microscope", " Transmition Electron Microscope ", "Techincal Electron Microscope"],"Transmition Electron Microscope " 
    ),
    new Question(
        "Lensa Objektif  memiliki perbesaran yaitu…", ["4,10,30 dan 200 kali","4,10,40 dan 200 kali ", "4,10,30 dan 100 kali  ", "4,10,40 dan 100 kali"],"4,10,40 dan 100 kali" 
    ),

    new Question(
        "Antonie van Leewenhoek mengamati sebuah sampel air seperti sampel air didanau ,air sungai ,air gusi dan gigi ,serta air talang hujan.Dimana beliau mendapat sebuah macam oraganisme mikroskopis yang bergerak-gerak dan disebut dengan… ", ["<i>raster</i>","<i>ots</i> ", " <i>animaculla</i> ", "<i>Protozoa</i>"]," <i>Protozoa</i>" 
    ),
];
let quiz = new Quiz(questions);

//display question
displayQuestion();


