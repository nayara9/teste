const elementoLista = document.querySelector("ul");
const elementoInput = document.querySelector("input");

const tarefas = [];

function mostraTarefasL() {
  elementoLista.innerHTML = "";
  for (tarefa of tarefas) {
    const elementoTarefa = document.createElement("li");
    const textoTarefa = document.createTextNode(tarefa);

    elementoTarefa.appendChild(textoTarefa);
    elementoLista.appendChild(elementoTarefa);
  }
}
mostraTarefas();

function mostraTarefas() {
  elementoLista.innerHTML = "";
  for (tarefa of tarefas) {
    const elementoTarefa = document.createElement("li");
    const textoTarefa = document.createTextNode(tarefa);

    elementoTarefa.appendChild(textoTarefa);
    elementoLista.appendChild(elementoTarefa);
  }
}
mostraTarefas();

function addTarefa() {
  const textoTarefa = elementoInput.value;
  tarefas.push(textoTarefa);
  elementoInput.value = "";

  mostraTarefas();
}
