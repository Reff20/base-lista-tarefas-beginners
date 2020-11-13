const elementoInput = document.querySelector('input')
const elementoBotao = document.querySelector('button')
const elementoLista = document.querySelector('ul')

const tarefas = ['tarefa 1']

function mostraTarefas() {

    elementoLista.innerHTML = ''

    for (tarefa of tarefas) {

        const itemLista = document.createElement('li')

        itemLista.innerText = tarefa

        elementoLista.appendChild(itemLista)
    }
}

mostraTarefas()

function addTarefa() {
    textoTarefa = elementoInput.value
    tarefas.push(textoTarefa)
    mostraTarefas()
    elementoInput.value = ''
}

elementoBotao.setAttribute('onclick', 'addTarefa()')