const body = document.querySelector("body")
const start = document.createElement("button")

button.innerHTML = "Altere a cor aqui"
body.append(start)

button.addEventListener("click", () => {
    body.style.backgroundColor = "#264653"
    document.title = "Desafio de estilos" 

    const newDiv = document.createElement("div")
    newDiv.style.backgroundColor = "red"
    newDiv.style.color = "White"
    newDiv.style.boxShadow = "5px 5px 5px 5px grey"
    newDiv.style.borderstyle = "solid"
    newDiv.style.borderWidth = "2px"
    newDiv.style.borderRadius = "2rem"
    newDiv.style.padding = "5rem"
    newDiv.style.display = "flex"
    newDiv.style.alignItems = "flex-start"
    newDiv.style.justifyContent = "center"
    newDiv.style.marginTop = "100px"
    const textElement = document.createElement("h1")
    textElement.innerHTML = "Desafio de estilos"
    textElement.style.fontFamily = "sans-serif"
    textElement.style.alignItems = "flex-start"
    textElement.style.justifyContent = "center"
    
    newDiv.appendChild(textElement)
    body.appendChild(newDiv)  

    body.removeChild(button)
})