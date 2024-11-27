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

function clicarFilial(botao) {
    const conteudos = document.querySelectorAll('.conteudoOculto');
    conteudos.forEach(conteudo => {
        conteudo.style.display = conteudo.style.display === 'none' || conteudo.style.display === '' ? 'flex' : 'none';
    });
}

function selecionarFilial(filial) {
    const botao = document.getElementById('textoBotao');
    botao.innerHTML = `<strong>${filial}</strong>`;

    const conteudos = document.querySelectorAll('.conteudoOculto');
    conteudos.forEach(conteudo => (conteudo.style.display = 'none'));

    // Ativa o botão de tipo de serviço
    const openModalBtn2 = document.getElementById('openModalBtn2');
    openModalBtn2.style.pointerEvents = 'auto';
    openModalBtn2.style.opacity = '1';
}

function clicarServico() {
    const conteudos = document.querySelectorAll('.conteudoOcultoServico');
    conteudos.forEach(conteudo => {
        conteudo.style.display = conteudo.style.display === 'none' || conteudo.style.display === '' ? 'flex' : 'none';
    });
}

function selecionarServico(servico) {
    const botao = document.getElementById('servicoSelecionado');
    botao.innerHTML = `<strong>${servico}</strong>`;

    const conteudos = document.querySelectorAll('.conteudoOcultoServico');
    conteudos.forEach(conteudo => (conteudo.style.display = 'none'));

    // Ativa o botão de subcategorias
    const openModalBtn3 = document.getElementById('openModalBtn3');
    openModalBtn3.style.pointerEvents = 'auto';
    openModalBtn3.style.opacity = '1';

    // Define as subcategorias dinamicamente
    const subcategorias = {
        'Corte de Cabelo Masculino e Barba': ['Corte Masculino', 'Barba', 'Corte + Barba'],
        'Corte de Cabelo Feminino': ['Corte Longo', 'Corte Curto', 'Corte em Camadas'],
        'Manicure e Pedicure': ['Manicure', 'Pedicure', 'Combo'],
        'Hidratação Capilar': ['Hidratação Rápida', 'Hidratação Profunda'],
    };

    const subcategoriaOpcoes = document.getElementById('subcategoriaOpcoes');
    subcategoriaOpcoes.innerHTML = ''; // Limpa as subcategorias antigas

    if (subcategorias[servico]) {
        subcategorias[servico].forEach(sub => {
            const div = document.createElement('div');
            div.className = 'botao2 conteudoOcultoSub';
            div.innerHTML = `<p class="a1" onclick="selecionarSub('${sub}')">${sub}</p>`;
            subcategoriaOpcoes.appendChild(div);
        });
    }
}

function clicarSubcategoria() {
    const conteudos = document.querySelectorAll('.conteudoOcultoSub');
    conteudos.forEach(conteudo => {
        conteudo.style.display = conteudo.style.display === 'none' || conteudo.style.display === '' ? 'flex' : 'none';
    });
}

function selecionarSub(sub) {
    const botao = document.getElementById('subSelecionado');
    botao.innerHTML = `<strong>${sub}</strong>`;

    const conteudos = document.querySelectorAll('.conteudoOcultoSub');
    conteudos.forEach(conteudo => (conteudo.style.display = 'none'));
}