let first = document.getElementById("firstValue")
let second = document.getElementById("secondValue")
let result = document.querySelector("#result")

const calc = () => {
     result.value = parseInt(first.value) + parseInt(second.value)
}