const body = document.querySelector("body")

const namevaluetext = document.createElement("p")
namevaluetext.innerHTML = "Nome: "
const namevalue = document.createElement("input")
namevalue.setAttribute("type","text")

const surnamevaluetext = document.createElement("p")
surnamevaluetext.innerHTML = "Sobrenome: "
const surname = document.createElement("input")
surname.setAttribute("type","text")

const emailtext = document.createElement("p")
emailtext.innerHTML = "Email: "
const email = document.createElement("input")
email.setAttribute("type","email")

const numbertext = document.createElement("p")
numbertext.innerHTML = "Número: "
const number = document.createElement("input")
number.setAttribute("type","number")

const generotext = document.createElement("p")
generotext.innerHTML = "Genero: "
const genero = document.createElement("input")
genero.setAttribute("type","text")

const checkbox1 = document.createElement("input")
checkbox1.setAttribute("type","checkbox")

const checkbox2 = document.createElement("input")
checkbox2.setAttribute("type","checkbox")

const submit = document.createElement("button")
submit.innerHTML  = "Enviar"

const text1 = document.createElement("p")
text1.innerHTML = "Salvar informações"

const text2 = document.createElement("p")
text2.innerHTML = "Termos de Uso"

const space = document.createElement("p")
space.innerHTML = " "

body.append(namevaluetext, namevalue)
body.append(surnamevaluetext, surname)
body.append(emailtext, email)
body.append(numbertext, number)
body.append(generotext, genero)
body.append(text1, checkbox1)
body.append(text2, checkbox2)
body.append(space)
body.append(submit)

function checkout () {
    if (namevalue.value == "") {
        alert("Preencha o campo nome")
        namevalue.focus()
        return false
    }
    if (surname.value == "") {
        alert("Preencha o campo sobrenome")
        surname.focus()
        return false
    }
    if (email.value == "") {
        alert("Preencha o campo email")
        email.focus()
        return false
    }
    if (number.value == "") {
        alert("Preencha o campo número")
        number.focus()
        return false
    }
    if (genero.value == "") {
        alert("Preencha o campo genero")
        genero.focus()
        return false
    }
    if (checkbox1.checked && checkbox2.checked) {
        return true
    } else {
        alert("Preencha as caixas")
        return false
    }
}

submit.addEventListener("click", () => {
    checkout ()
})