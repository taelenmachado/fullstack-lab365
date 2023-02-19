let inputDate = document.getElementById("date");
let buttonSee = document.getElementById("see");
let finish;
let resposta = document.getElementById("resposta");

buttonSee.addEventListener("click", calculoAniversario)

function calculoAniversario () {
  let dataAniversario = inputDate.value
  clearTimeout(finish);
  finish = setInterval(()=>{
    const difMs   = new Date (dataAniversario) - new Date ()
    const difDays = Math.round(difMs / (1000*60*60*24));

    console.log(difDays) 
    if (difDays!=0) {
      resposta.innerHTML = (`Faltam ${difDays} dias`) 
    } else {
      resposta.innerHTML = (`Feliz aniversário!!`)
    }
  },1000)
}

 
  