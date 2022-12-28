const ansOne = document.querySelector(".ansOne")
const questionsOne = document.getElementsByClassName("questionsOne")[0]


const ansTwo = document.querySelector(".ansTwo")
const questionsTwo = document.getElementsByClassName("questionsTwo")[0]

const ansThree = document.querySelector(".ansThree")
const questionsThree = document.getElementsByClassName("questionsThree")[0]

const ansFour = document.querySelector(".ansFour")
const questionsFour = document.getElementsByClassName("questionsFour")[0]

const ansFive = document.querySelector(".ansFive")
const questionsFive = document.getElementsByClassName("questionsFive")[0]




questionsOne.addEventListener("click", ()=>{
    questionsOne.style="font-weight:bold"
    ansOne.style="font-weight:normal"
    ansOne.classList.remove("add")
    remove(ansTwo, questionsTwo)
    remove(ansThree, questionsThree)
    remove(ansFour, questionsFour)
    remove(ansFive, questionsTwo)
})

questionsTwo.addEventListener("click", ()=>{
    questionsTwo.style="font-weight:bold"
    ansTwo.style="font-weight:normal"
    ansTwo.classList.remove("add")
    remove(ansOne, questionsOne)
    remove(ansThree, questionsThree)
    remove(ansFour, questionsFour)
    remove(ansFive, questionsFive)
})

questionsThree.addEventListener("click", ()=>{
    questionsThree.style="font-weight:bold"
    ansThree.style="font-weight:normal"
    ansThree.classList.remove("add")
    remove(ansOne, questionsOne)
    remove(ansTwo, questionsTwo)
    remove(ansFour, questionsFour)
    remove(ansFive, questionsFive)
    
})

questionsFour.addEventListener("click", ()=>{
    questionsFour.style="font-weight:bold"
    ansFour.style="font-weight:normal"
    ansFour.classList.remove("add")
    remove(ansOne, questionsOne)
    remove(ansTwo, questionsTwo)
    remove(ansThree, questionsThree)
    remove(ansFive, questionsFive)
})

questionsFive.addEventListener("click", ()=>{
    questionsFive.style="font-weight:bold"
    ansFive.style="font-weight:normal"
    ansFive.classList.remove("add")
    remove(ansOne, questionsOne)
    remove(ansTwo, questionsTwo)
    remove(ansThree, questionsThree)
    remove(ansFour, questionsFour)
    
})

function remove(element1, element2) {
    element1.classList.add("add")
    element2.style="font-weight:normal"
}

