// Criando e exportando a função Modal
export default function Modal() {

    const modalWrapper = document.querySelector('.modal-wrapper')

    // Pegar o botão de cancelar
    const cancelButton = document.querySelector('.button.cancel')

    // Adicionar um listener no botão de cancelar para fechar a modal
    cancelButton.addEventListener("click", close)

    // Função para abrir a modal
    function open() {
        modalWrapper.classList.add('active')
    }

    // Função para fechar o modal
    function close() {
        modalWrapper.classList.remove('active')
    }

    // Retornando as funções
    return {
        open,
        close
    }
}
