document.addEventListener('DOMContentLoaded', function() {
    const btnContraste = document.getElementById('btn-contraste');
    const btnAumentarLetra = document.getElementById('btn-aumentar-letra');
    const btnDiminuirLetra = document.getElementById('btn-diminuir-letra');
    const corpoDaPagina = document.body;

    // Funcao do Botao de Alto Contraste
    btnContraste.addEventListener('click', function() {
        corpoDaPagina.classList.toggle('alto-contraste');
    });

    // Variaveis para o Controle de Tamanho da Letra
    let tamanhoFonteAtual = 18; 
    const tamanhoMaximo = 34;   
    const tamanhoMinimo = 14;   

    // Funcao para Aumentar a Letra
    btnAumentarLetra.addEventListener('click', function() {
        if (tamanhoFonteAtual < tamanhoMaximo) {
            tamanhoFonteAtual += 2;
            corpoDaPagina.style.fontSize = tamanhoFonteAtual + 'px';
        }
    });

    // Funcao para Diminuir a Letra
    btnDiminuirLetra.addEventListener('click', function() {
        if (tamanhoFonteAtual > tamanhoMinimo) {
            tamanhoFonteAtual -= 2;
            corpoDaPagina.style.fontSize = tamanhoFonteAtual + 'px';
        }
    });
});