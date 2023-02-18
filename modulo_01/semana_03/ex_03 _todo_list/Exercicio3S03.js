let tarefas = ["Ir à academia", "Estudar", "Almoçar", "Limpar a casa", "Descansar", "Tomar banho", "Assistir aula", "Dormir"];

let list = document.getElementById("list")
let InputTarefa = document.getElementById("search")
let buttonBuscar = document.getElementById("action")

buttonBuscar.addEventListener("click", busca)
  

  tarefas.forEach((tarefa) => {
    let li = document.createElement("li")
    li.innerText = tarefa
    list.appendChild(li)
  });

//1.Busca um item na lista
function busca () {
  let tarefa = tarefas.find(tarefa => {
    return tarefa == InputTarefa.value
  }) 
  console.log(tarefa);
}

//2.Altera um item na lista
function altera (indice, novaTarefa) {
  tarefas[indice] = novaTarefa
}

//3.Remove um item na lista
function deleta () {
  let tarefasPop = tarefas.pop();
  console.log(tarefasPop);
}

//4.Adiciona um item na lista
function adiciona () {
  let tarefasPush = tarefas.push("Namorar");
  console.log(tarefas);
}

