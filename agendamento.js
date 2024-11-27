//  // Funções de abertura e fechamento dos modais
//  function toggleModal(modalId, show) {
//     document.getElementById(modalId).style.display = show ? 'block' : 'none';
// }

// document.getElementById('openModalBtn').onclick = function() {
//     toggleModal('modalFilial', true);
// };

// document.getElementById('closeFilial').onclick = function() {
//     toggleModal('modalFilial', false);
// };

// document.getElementById('openModalBtn2').onclick = function() {
//     toggleModal('modalServico', true);
// };

// document.getElementById('closeServico').onclick = function() {
//     toggleModal('modalServico', false);
// };

// document.getElementById('openModalBtn3').onclick = function() {
//     toggleModal('modalSub', true);
// };

// document.getElementById('closeSub').onclick = function() {
//     toggleModal('modalSub', false);
// };

// // Fechar modal ao clicar fora dele
// window.onclick = function(event) {
//     ['modalFilial', 'modalServico', 'modalSub'].forEach(function(modalId) {
//         if (event.target == document.getElementById(modalId)) {
//             toggleModal(modalId, false);
//         }
//     });
// };

// // Função de seleção
// function selecionar(nome, idElemento) {
//     document.getElementById(idElemento).innerHTML = `<strong>${nome}</strong>`;
//     if (idElemento === 'filialSelecionada') {
//         toggleModal('modalFilial', false);
//         document.getElementById('openModalBtn2').style.pointerEvents = 'auto';
//         document.getElementById('openModalBtn2').style.opacity = '1';
//     } else if (idElemento === 'servicoSelecionado') {
//         toggleModal('modalServico', false);
//         document.getElementById('openModalBtn3').style.pointerEvents = 'auto';
//         document.getElementById('openModalBtn3').style.opacity = '1';
//     } else if (idElemento === 'subSelecionado') {
//         toggleModal('modalSub', false);
//     }
// }


// menu hamburguer
function aparecerMenu() {
    let menu = document.getElementById('menu-oculto')
    if (menu.style.display === 'block') {
        menu.style.display = 'none'
    }
    else {
        menu.style.display = 'block'
    }
}

function clicar(botao) {
    const conteudo = document.querySelector('.botao2')

    if (conteudo.style.display === 'none') {
        conteudo.style.display = 'block'
        botao.classList.add('ativa')
    } else {
        conteudo.style.display = 'none'
        botao.classList.remove('ativa')
    }
}

function selecionarOpcao(elemento, opcao) {
    const botao = document.getElementById('textoBotao')
    botao.innerHTML = `<strong>${opcao}</strong>`

    const conteudo = document.getElementById('conteudoOculto')
    conteudo.style.display = 'none'


}

// selecione o tipo de servico

function clicarServico(botao) {
    // Seleciona todos os elementos com a classe 'conteudoOcultoServico'
    const conteudos = document.querySelectorAll('.conteudoOcultoServico');

    // Percorre todos os elementos e alterna o display
    conteudos.forEach(conteudo => {
        if (conteudo.style.display === 'none' || conteudo.style.display === '') {
            conteudo.style.display = 'flex';
        } else {
            conteudo.style.display = 'none';
        }
    });

    // Altera a classe do botão para mostrar que ele foi ativado
    botao.classList.add('ativa');
}

function selecionarServico(servico) {
    // Atualiza o texto do botão "Selecione o tipo de serviço"
    const botao = document.getElementById('servicoSelecionado');
    botao.innerHTML = `<strong>${servico}</strong>`;

    // Oculta o menu
    const conteudo = document.getElementById('conteudoOcultoServico');
    conteudo.style.display = 'none';

    // Ativa o botão (remove pointer-events e ajusta opacidade)
    const openModalBtn2 = document.getElementById('openModalBtn2');
    openModalBtn2.style.pointerEvents = 'auto';
    openModalBtn2.style.opacity = '1';
}