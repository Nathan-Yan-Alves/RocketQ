// Importando a modal
import Modal from './modal.js'

// Atribuindo a função Modal() a constante modal
const modal = Modal()

// Armazenando na constante os valores necessários para realizar a mudança no modal
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
    // Adicionar o listener ao botão
    button.addEventListener("click", handleClick)
});

// Quando o botão delete for clicado ele abre a modal
const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
    button.addEventListener('click', (event) => handleClick(event, false))
});

function handleClick(event, check = true) {
    // Faz com que as tags 'a' não adicione # na url
    event.preventDefault()

    // Verificando se o check é verdadeiro ou falso para atribuir a url
    const slug = check ? "check" : "delete"

    // Selecionando o ID da sala
    const roomID = document.querySelector("#room-id").dataset.id

    // Armazenando o ID da pergunta
    const questionID = event.target.dataset.id

    // Modificando o form action
    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomID}/${questionID}/${slug}`)

    // Modificando as tags de acordo com o check
    modalTitle.innerHTML = check ? 'Marcar como lida esta pergunta' : 'Excluir esta pergunta'
    modalDescription.innerHTML = check ? 'Tem certeza que deseja marcar como lida esta pergunta?' : 'Tem certeza que deseja excluir esta pergunta?'
    modalButton.innerHTML = check ? "Sim, marcar como lida" : "Sim, excluir"
    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')
    
    modal.open()
}