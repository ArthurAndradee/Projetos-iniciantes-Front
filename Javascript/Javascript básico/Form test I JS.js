const form = document.getElementsByClassName("body")

const button = document.createElement("button")
button.setAttribute = ("type","button")
button.setAttribute = ("id","button")
button.textContent = ("Enviar")

document.body.appendChild(button)

document.getElementById("accept").addEventListener("change", (event) => {
    if (event.target.checked) {
        document.body.appendChild(button)
    } else {
      document.body.removeChild(button)
    }
  })