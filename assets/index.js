const ansOne = document.querySelector(".ansOne")
const questionsOne = document.getElementsByClassName("questionsOne")[0]
const iconOne = document.querySelector(".iconOne")

const ansTwo = document.querySelector(".ansTwo")
const questionsTwo = document.getElementsByClassName("questionsTwo")[0]
const iconTwo = document.querySelector(".iconTwo")

const ansThree = document.querySelector(".ansThree")
const questionsThree = document.getElementsByClassName("questionsThree")[0]
const iconThree = document.querySelector(".iconThree")

const ansFour = document.querySelector(".ansFour")
const questionsFour = document.getElementsByClassName("questionsFour")[0]
const iconFour = document.querySelector(".iconFour")

const ansFive = document.querySelector(".ansFive")
const questionsFive = document.getElementsByClassName("questionsFive")[0]
const iconFive = document.querySelector(".iconFive")



questionsOne.addEventListener("click", ()=>{
    questionsOne.style="font-weight:bold"
    ansOne.style="font-weight:normal"
    ansOne.classList.remove("add")
    
    remove(ansTwo, questionsTwo)
    remove(ansThree, questionsThree)
    remove(ansFour, questionsFour)
    remove(ansFive, questionsTwo)

    rotate(iconOne, iconTwo, iconThree, iconFour, iconFive)
})

questionsTwo.addEventListener("click", ()=>{
    questionsTwo.style="font-weight:bold"
    ansTwo.style="font-weight:normal"
    ansTwo.classList.remove("add")
    remove(ansOne, questionsOne)
    remove(ansThree, questionsThree)
    remove(ansFour, questionsFour)
    remove(ansFive, questionsFive)

    rotate(iconTwo, iconOne, iconThree, iconFour, iconFive)
})

questionsThree.addEventListener("click", ()=>{
    questionsThree.style="font-weight:bold"
    ansThree.style="font-weight:normal"
    ansThree.classList.remove("add")
    remove(ansOne, questionsOne)
    remove(ansTwo, questionsTwo)
    remove(ansFour, questionsFour)
    remove(ansFive, questionsFive)

    rotate(iconThree, iconTwo, iconOne, iconFour, iconFive)
})

questionsFour.addEventListener("click", ()=>{
    questionsFour.style="font-weight:bold"
    ansFour.style="font-weight:normal"
    ansFour.classList.remove("add")
    remove(ansOne, questionsOne)
    remove(ansTwo, questionsTwo)
    remove(ansThree, questionsThree)
    remove(ansFive, questionsFive)

    rotate(iconFour, iconThree, iconTwo, iconOne, iconFive)
})

questionsFive.addEventListener("click", ()=>{
    questionsFive.style="font-weight:bold"
    ansFive.style="font-weight:normal"
    ansFive.classList.remove("add")
    remove(ansOne, questionsOne)
    remove(ansTwo, questionsTwo)
    remove(ansThree, questionsThree)
    remove(ansFour, questionsFour)

    rotate( iconFive, iconTwo, iconOne, iconThree, iconFour)
    
})

function remove(element1, element2) {
    element1.classList.add("add")
    element2.style="font-weight:normal"
}

function rotate(element1, element2, element3, element4, element5) {
    element1.style="rotate:180deg"
    element2.style="rotate:0deg"
    element3.style="rotate:0deg"
    element4.style="rotate:0deg"
    element5.style="rotate:0deg"
}

