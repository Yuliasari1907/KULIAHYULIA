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
                <a href="Latihan2.html"> Kembali Ke Materi </a>
            </div>
            <div class="quiz-repeat">
                <a href="sUniselulerdanMultiseluler.html"> Materi Selanjutnya</a>
            </div>
           
        `;

        let quizElement = document.getElementById("soal");
        quizElement.innerHTML = quizEndHTML;
}

// CREATE QUIZ QUESTIONS
let questions = [
    
    new Question(
        "Berdasarkan ada tidaknya membrane inti sel,sel dibagi menjadi dua bagian yaitu… ", ["sel prokariotik dan sel saraf","sel prokariotik dan sel otot ", "sel prokariotik dan sel eukariotik  ", "sel prokariotik dan sel hidrotilik"],"sel prokariotik dan sel eukariotik " 
    ),

    new Question(
        "Terdapat perbedaan mecolok antara sel hewan dan sel tumbuhan yaitu pada…", ["Pelindung membran luar dan dalam sel","pelindung dinding sel", "pelindung dalam sel ", "pelindung luar sel"],"pelindung luar sel " 
    ),

    new Question(
        "Nukleus memiliki ukuran diameter yaitu….", [" 10-20 μm","10-30 μm ", " 10-40 μm ", "10-50 μm"]," 10-20 μm" 
    ),

    new Question(
        "Gerak siklosis yaitu….", ["kemampuan matriks sitoplasma memantulkan cahaya","gerak acak (zig zag) patikel penyusun koloid  ", " gerak matriks sitoplasma berupa arus melingkar ", "kemampuan molekul mengantarkan listrik"]," gerak matriks sitoplasma berupa arus melingkar" 
    ),

    new Question(
        "Nukleus berisikan…. ", ["RNA dan DNA","RNA dan Golgi ", "RNA dan ATP ", "RNA dan RE"]," RNA dan DNA" 
    ),

    new Question(
        "Ribosom berbentuk…", ["agak bulat yang dibatasi membrane tunggal ","butiran halus yang melekat pada retikulum endoplasma kasar atau dalam sitoplasma", "komplek yang tersusun tidak teratur dan letaknya dekat engan inti sel ", "cairan dibatasi oleh selaput  "],"	butiran halus yang melekat pada retikulum endoplasma kasar atau dalam sitoplasma" 
    ),

    new Question(
        " Sistem membrane komplek yan tersusun tidak teratur,letaaknya dekat dengan inti sel disebut…", ["	lisosom"," mitokondria ", " retikulm Endoplasma  ", "libosom "],"mitokondria  " 
    ),

    

    new Question(
        "Lisosom memiliki ukuran diameter… ", ["1,5 μm","1,6 μm ", " 1,7 μm ", "1,8 μm"]," 1,5 μm" 
    ),

    new Question(
        "Kromoplas adalah plastisida yang berwarna-warni karena mengandung pigmen selain klorofil.Ada beberapa pigmen yang terdapat pada kromoplas yaitu Xantofil,dimana Xantofil ini memberikan warna…. ", ["kuning misalnya pada wortel"," biru pada ganggang biru  , ", " kuning pada daun yang telah tua  ", "warna cokelat pada gaanggang cokelat"]," " 
    ),
    
    new Question(
        " Mikrofilamen yaitu…..", ["rantai ganda protein yang paling tipis dan bertaut ","rantai molekul yan berbentuk untaian yang saling melilit ", " rantai protein yang berbentuk spiral  ", "rantai spiral yang  membentuk tabung berlubang"],"rantai ganda protein yang paling tipis dan bertaut " 
    )

]; 
let quiz = new Quiz(questions);

//display question
displayQuestion();


