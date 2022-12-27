const ansOne = document.querySelector(".ansOne")
const questionsOne = document.getElementsByClassName("questionsOne")[0]
console.log(ansOne)

const ansTwo = document.querySelector(".ansTwo")
const questionsTwo = document.getElementsByClassName("questionsTwo")[0]




questionsOne.addEventListener("click", ()=>{
    questionsOne.style="font-weight:bold"
    ansOne.style="font-weight:normal"
    ansOne.classList.remove("add")
    remove(ansTwo, questionsTwo)
})

questionsTwo.addEventListener("click", ()=>{
    questionsTwo.style="font-weight:bold"
    ansTwo.style="font-weight:normal"
    ansTwo.classList.remove("add")
    remove(ansOne, questionsOne)
})

function remove(element1, element2) {
    element1.classList.add("add")
    element2.style="font-weight:normal"
}

