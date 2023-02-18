const inputNumero = document.getElementById("number");
const inputMessage = document.getElementById("message");
const buttonAction = document.getElementById("action");

buttonAction.addEventListener("click", action)

function action () {
  const link = ("http://api.whatsapp.com/send?phone=" + inputNumero.value + "&text= " + inputMessage.value).replace(" ", "%20")
  console.log(link)
  document.getElementById("app").innerHTML = `<a href="${link}" target= "_blank" >abrir whatsapp</a>`
}


