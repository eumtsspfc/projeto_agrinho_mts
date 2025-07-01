// Adicione seu código JavaScri// JavaScript para o formulário e navegação suave
document.addEventListener('DOMContentLoaded', function() {
    // Formulário de compromisso
    const ecoForm = document.getElementById('eco-form');
    if (ecoForm) {
        ecoForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Obter valores do formulário
            const nome = document.getElementById('nome').value;
            const acao = document.getElementById('acao').value;
            
            // Exibir mensagem de confirmação
            alert(`Obrigado, ${nome}! Seu compromisso com ${getAcaoTexto(acao)} foi registrado. Juntos fazemos a diferença!`);
            
            // Resetar formulário
            this.reset();
        });
    }
    
    // Função para obter o texto da ação
    function getAcaoTexto(valor) {
        const acoes = {
            'reciclar': 'reciclar seu lixo',
            'agua': 'economizar água',
            'energia': 'reduzir consumo de energia',
            'transporte': 'usar transporte sustentável',
            'consumo': 'reduzir consumo de produtos'
        };
        
        return acoes[valor] || 'esta ação sustentável';
    }
    
    // Rolagem suave para links internos
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});pt aqui
