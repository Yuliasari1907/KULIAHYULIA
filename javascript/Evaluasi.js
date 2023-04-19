//evaluasi
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
            remark = "Jangan Menyerah, Tetaplah Belajar" 
        }
        else if (quiz.score >= 3 && quiz.score < 4) {
            remark = "Tingkatkan Lagi Belajarnya"
             
        }
        else if (quiz.score >= 4) {
            remark = "Luar Biasa"
        }
        const nilai =quiz.score*5;
    let quizEndHTML =
        `
            <h2> Selamat <br> Evaluasi Selesai</h2>
            <h2 id="score"> Skor Anda : ${quiz.score} dari ${quiz.questions.length}</h2>
            <h2> Nilai : <span>${nilai}</span></h2>
            <h2 id="remarks"> ${remark}</h2>  
            
            <div class="quiz-repeat">
                <a href="Evaluasi.html"> Ulangi Evaluasi </a>
            </div>
            <div class="quiz-repeat">
                <a href="MENU.html"> Selesai</a>
            </div>
           
        `;

        let quizElement = document.getElementById("soal");
        quizElement.innerHTML = quizEndHTML;
}

// CREATE QUIZ QUESTIONS
let questions = [
    new Question(
        "Sel berasal dari Bahasa Latin, yaitu cellulae yang berarti… ", ["ruangan","selaput", "bangunan", "struktur"],"struktur" 
    ),

    new Question(
        "Sejarah penemuan sel pertama kali ditemukan oleh …", [" Robert Brown "," Rudolf Virchow ", "Robert Hooke  ", "Max Schultze "], "Robert Hooke"
    ),

    new Question(
        "Perhatikan Gambar dibawah ini! <br> <center> <img src='../img/gambar1.png' width='150px' height='150px'/> </center> <br> Gambar diatas merupakan mikroskop.....", [" Robert Hooke "," Robert Brown  ", "Max Schultze ", " Max Schultze"], "Robert Hooke"
    ),

    new Question(
        "Ahli Biologi Jerman bernama Rudolf Virchow mengungkapkan bahwa bahwa sel-sel tersebut berasal dari sel yang sebelumnya sudah ada.Beliau mengungkapkan teori`tersebut pada tahun…", ["  1655 "," 1084 ", " 1881", "1885 "], "1885"
    ),

    new Question(
        "Mikroskop berasal dari Bahasa Yunani yaitu micros yang artinya kecil dan scropos yang artinya ….", ["  mendengar"," melihat ", " menyimak", "mengambil "],"melihat"
    ),

    new Question(
        "Tabung Mikroskop berfungsi untuk….", [" pegangan terhadap mikroskop "," mengatur pembesaran lensa objektif ", "menggerakkkan lensa objektif ", " menghubungkan lensa objektif dan lensa okuler"], "menghubungkan lensa objektif dan lensa okuler"
    ),

    new Question(
        "Mikroskop Cahaya jua disebut dengan mikroskop optic karena menggunakan sistem lensa untuk memperbesar objek berukuran kecil.berikut ni termasuk kelebihan mikroskop cahaya..... ", ["memiliki ruangan ketajaman lensa mikroskop yang lebih tingi"," muda untuk digunakan dan tidak memerlukan tempat yang luas ", "resolusi dan perbesaran gambar besar ", " tampilan gambarnya cukup jelas"], "muda untuk digunakan dan tidak memerlukan tempat yang luas"
    ),

    new Question(
        "Mengatur pembesaran lensa obejeltif untuk mempermuah pengaturan pengamatan dari mikroskop, merupakan fungsi dari….", [" makrometer"," mikrometer ", "revolver", "penjepit preparate"],"revolver"
    ),

    new Question(
        "Sitoplasma merupakan plasma yang terapat didalam sel dan diluar sel.Matriks sitoplasma atau bahan dasar sitoplasma memiliki sifat-sifat fisis, kecuali… ", ["efek tyndall"," golgi ", " sekresi", " glikoprotein"], "efek tyndall"
    ),

    new Question(
        "Pelindung luar sel berfungsi untuk….", ["batas antarsel an melindungi isi sel agar tidak keluar.","mengendalikan seluruh kegiatan yang terjadi didalam sel.", " Tempat penyimpanan bahan kimia yang penting.", " menangkap energi cahaya."],"batas antarsel an melindungi isi sel agar tidak keluar"
    ),

    new Question(
        "Organel yang berisi cairan dibatasi oleh selaput yang berisi tonoplast merupakan pengertian dari….", ["  Lisosom","  Leukloplas", " Kromoplas", " Vakuola"],"Vakuola"
    ),

    new Question(
        " Organisme uniseluler adalah organisme yang hanya teriri ari satu sel.Contoh organisme uniseluler yaitu …", ["  bakteri dan jenis kata"," bakteri dan jenis Protista ", " bakteri dan jenis DNA", " bakteri dan jenis Kloroplas"],"bakteri dan jenis Protista"
    ),

    new Question(
        "Tempat terjadinya respirasi sel untuk menghasilkan energi(ATP),merupakan fungsi dari….", ["Mitokondria","  Ribosom", "Lisosom ", " Vakuola"],"Mitokondria" 
    ),

    new Question(
        "Mengatur banyak sedikitnya cahya yang masuk dan mengenai preparat ,merupakan fungsi dari….", ["tabung mikroskop","diafragma", "lensa okuler", "lensa mikroskop"], "diafragma"
    ),

    new Question(
        "Lensa okuler adalah lensa yang dekat dengan mata pengamat.Lensa okuler ini biasanya memiliki perbesaran yaitu… ", ["3,10 atau 12 kali","4,10 atau 12 kali", "5,10 atau 12 kali ", " 6,10 atau 12 kali"] 
    ),

    new Question(
        "Mikroskop elektron terdiri dari dua jenis yaitu…", ["Mikroskop binokuler dan mikroskop monokuler "," Mikroskop monokulerdan TEM (TRansmition Electron Microscope)", "SEM(Scanning Electron Microscope) dan TEM (TRansmition Electron Microscope) ", "SEM(Scanning Electron Microscope) dan Mikroskop Pender atau fluorescence. "], "SEM(Scanning Electron Microscope) dan TEM (TRansmition Electron Microscope)"
    ),

    new Question(
        "Seorang siswa bernama fika kelas VIII B mengamati sebuah preparate yang perbesaran lensa okulernya yaitu 5X dan perbesaran lensa objektifnya 40X.Maka besar perbesaran total pada mikroskop tersebut adalah…", ["20X "," 200X", "250X ", " 1000X"],"200X"
    ),
    new Question(
        "Neuron(sel saraf) berfungsi untuk …..", ["mengantarkan impuls atau sinyal dari reseptor ke pusat saraf dan meneruskannya ke efektor."," menghantaarkan sinyal dari reseptor ke badan sel ", " sebagai isolator dan pemberi nutrisi bagi akson.", " membawa rangsangan dari badan sel ke neuron."],"mengantarkan impuls atau sinyal dari reseptor ke pusat saraf dan meneruskannya ke efektor."
    ),
    new Question(
        "Perhatikan Gambar berikut ini! <br> <center> <img src='../img/gambar3 .png' width='100px' height='100px'/> </center> Gambar diatas merupakan mikroskop.....", [" mikroskop cahaya binokuler  "," mikroskop cahaya fluorescence ", " mikroskop cahaya monokuler", "mikroskop cahaya ultraviolet"],"mikroskop cahaya monokuler"
    ),
    new Question(
        " Sel merupakan kesatuan atau unit terkecil dari makhluk hidup.Teori ini dikemukakan oleh ….", ["Robert Brown dan Robert Hooke"," Rudolf Virchow dan Max Schultze", " Jacob Schleiden dan Teodor Schwann ", "Antonie Van Leeuwenhoek dan Felix Durjadin"],"Jacob Schleiden dan Teodor Schwann " 
    )

];

let quiz = new Quiz(questions);

//display question
displayQuestion();
