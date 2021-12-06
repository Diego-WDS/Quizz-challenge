// Object data
const quizData = [
    
    {
        question:'¿Cuál es el río más largo del mundo?',
        a:'Amazonas',
        b:'Nilo',
        c:'Misisipi',
        d:'Ganges',
        correct:'a'
    },
    {
        question:'¿Dónde originaron los juegos olímpicos?',
        a:'Tokio',
        b:'Holanda',
        c:'Estados Unidos',
        d:'Grecia',
        correct:'d'
    },
    {
        question:'¿Cuál es el océano más grande?',
        a:'Atlantico',
        b:'Indico',
        c:'Pacifico',
        d:'Artico',
        correct:'c'
    },
    {
        question:'¿Cuál es el país más grande del mundo?',
        a:'Rusia',
        b:'Brasil',
        c:'Estados Unidos',
        d:'Canada',
        correct:'a'
    },
    {
        question:'¿En qué año comenzó la II Guerra Mundial?',
        a:'1919',
        b:'1939',
        c:'1922',
        d:'1943',
        correct:'b'
    },
    

];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl= document.getElementById('question')
const a_text= document.getElementById('a_text')
const b_text= document.getElementById('b_text')
const c_text= document.getElementById('c_text')
const d_text= document.getElementById('d_text')
const submitBtn = document.getElementById('button')

let currentQuiz = 0;
let score = 0;

const loadQuiz=()=>{
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
    
}

const getSelected=()=>{
    

    let answer = undefined;

    answerEls.forEach(answerEl =>{
        if(answerEl.checked)
        answer = answerEl.id
    });
    return answer;
}


const deselectAnswers = ()=>{
    answerEls.forEach(answerEl =>{
      answerEl.checked = false
    });
}

submitBtn.addEventListener('click', ()=>{
    // Check to see the answer
    const answer = getSelected()


    if(answer )
        {
            if(answer === quizData[currentQuiz].correct){
                score++;
            }
            currentQuiz++
            if(currentQuiz < quizData.length){
                loadQuiz()
            }else{
                    quiz.innerHTML = `<h2>Has contestado correctamente ${score}/${quizData.length} preguntas</h2> 
                    <button onclick="location.reload()">Volver a jugar</button>`
            }
        }    
})
loadQuiz()
// init quiz