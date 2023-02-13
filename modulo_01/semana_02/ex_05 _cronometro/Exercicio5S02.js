var finish; 
let number = 11

function score () {
    if(number == 0) {
        console.log("Seu tempo acabou!! Tente novamente!!");
        clearTimeout(finish);
    } else {
        number --
        console.log(number);
    }
}
let start = () => {
    finish = setInterval(score,1000)
}

let button = document.getElementById("iniciar");

button.addEventListener("click", start)



