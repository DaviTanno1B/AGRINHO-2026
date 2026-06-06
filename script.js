let totalApoiadores = 0; 
let fonteAumentada = false;

const btnTema = document.getElementById('btn-tema');
const btnFonte = document.getElementById('btn-fonte');
const btnAssinar = document.getElementById('btn-assinar');
const btnApoiar = document.getElementById('btn-apoiar');
const inputNome = document.getElementById('nomeUsuario');
const mensagemBoasVindas = document.getElementById('mensagem-boas-vindas');
const textoContador = document.getElementById('contador');

btnTema.addEventListener('click', () => {
    document.body.classList.toggle('tema-escuro');
});

btnFonte.addEventListener('click', () => {
    if (!fonteAumentada) {
        document.body.style.fontSize = '120%';
        btnFonte.textContent = 'Diminuir Fonte';
        fonteAumentada = true;
    } else {
        document.body.style.fontSize = '100%';
        btnFonte.textContent = 'Aumentar Fonte';
        fonteAumentada = false;
    }
});

btnAssinar.addEventListener('click', () => {
    const nome = inputNome.value.trim();

    if (nome !== "") {
        mensagemBoasVindas.textContent = `Olá, ${nome}! Obrigado por assumir o compromisso com um Agro mais sustentável!`;
        mensagemBoasVindas.classList.remove('escondido');
        inputNome.value = '';
    } else {
        alert("Por favor, digite seu nome antes de assinar.");
    }
});

btnApoiar.addEventListener('click', () => {
    totalApoiadores++;
    textoContador.textContent = totalApoiadores;
    
    btnApoiar.disabled = true;
    btnApoiar.textContent = "Apoiado!";
    btnApoiar.style.backgroundColor = "#ccc";
    btnApoiar.style.cursor = "not-allowed";
});