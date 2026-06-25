let tamanhoFonteAtual = 24;

function alterarTamanhoFonte(mudanca) {
    tamanhoFonteAtual += mudanca;
    // Limites para a fonte nao ficar nem invisivel, nem gigante demais
    if (tamanhoFonteAtual < 16) tamanhoFonteAtual = 16;
    if (tamanhoFonteAtual > 40) tamanhoFonteAtual = 40;
    
    document.body.style.fontSize = tamanhoFonteAtual + "px";
}

function alternarAltoContraste() {
    document.body.classList.toggle("alto-contraste");
}


/* =========================================
   LOGICA DO SIMULADOR DE GOLPES
   ========================================= */
const cenarios = [
    {
        texto: " WhatsApp de numero desconhecido: 'Oi mae, mudei de numero. Preciso pagar uma conta urgente hoje, me manda um Pix de R$ 1.500?'",
        eGolpe: true,
        explicacao: " GOLPE! Criminosos usam fotos de parentes para pedir dinheiro. Nunca envie Pix sem antes ligar para o numero antigo ou falar por voz com a pessoa."
    },
    {
        texto: " SMS do Banco: 'Sua conta foi bloqueada por seguranca. Clique no link para reativar agora: www.bancofake-seguro.com'",
        eGolpe: true,
        explicacao: " GOLPE! Bancos nao mandam links por SMS pedindo seus dados ou dizendo que a conta foi bloqueada. Nao clique em links!"
    },
    {
        texto: " Ligacao telefonica: 'Aqui e do seu banco. Identificamos uma compra suspeita no seu cartao. Nao confirme nada, digite apenas sua senha para cancelarmos.'",
        eGolpe: true,
        explicacao: " GOLPE! O banco nunca pede sua senha por telefone. Se receber essa ligacao, desligue e ligue voce mesmo para o numero que esta atras do seu cartão físico."
    },
    {
        texto: " E-mail oficial da Receita Federal avisando que seu prazo para declaracao terminou e que voce deve consultar o app oficial do governo Gov.br.",
        eGolpe: false,
        explicacao: " SEGURO! Avisos gerais que mandam voce procurar os canais oficiais (como o aplicativo que voce ja tem instalado) sem pedir dados ou cliques em links suspeitos costumam ser informativos."
    }
];

let indiceAtual = 0;

function carregarCenario() {
    document.getElementById('texto-cenario').innerText = cenarios[indiceAtual].texto;
    document.getElementById('caixa-resultado').style.display = 'none';
    document.getElementById('btn-proxima').style.display = 'none';
    
    alterarStatusBotoes(false);
}

function verificarResposta(escolhaUsuario) {
    const cenario
}