/* Desenvolva aqui a rotina */
document.addEventListener('DOMContentLoaded', function () {
    
    const inputs = document.querySelectorAll('input');

    
    inputs.forEach(function (input) {
        input.addEventListener('change', calcular);
    });

    
    document.getElementById('btn_calcular').addEventListener('click', calcular);

    
    function calcular() {
        
        const valorBase = parseFloat(document.getElementById('valor_base').value) || 0;
        const valorTransporte = parseFloat(document.getElementById('valor_transporte').value) || 0;
        const valorAlimentacao = parseFloat(document.getElementById('valor_alimentacao').value) || 0;

        const valorReceita = valorBase + valorTransporte + valorAlimentacao;
        document.getElementById('valor_receita').value = valorReceita.toFixed(2);

       
        const valorAutomovel = parseFloat(document.getElementById('valor_automovel').value) || 0;
        const faltas = parseFloat(document.getElementById('faltas').value) || 0;

        const valorDescontos = valorAutomovel + faltas;
        document.getElementById('valor_descontos').value = valorDescontos.toFixed(2);

        
        const valorTotal = valorReceita - valorDescontos;
        document.getElementById('valor_total').value = valorTotal.toFixed(2);
    }
});