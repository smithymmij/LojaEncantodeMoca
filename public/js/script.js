document.addEventListener('DOMContentLoaded', function(){

    const allButtons = document.querySelectorAll('.searchBtn');
    const searchBar = document.querySelector('.searchBar');
    const searchInput = document.getElementById('searchInput');
    const searchClose = document.getElementById('searchClose');

    for (var i = 0; i < allButtons.length; i++) {

        allButtons[i].addEventListener('click', function() {
            searchBar.style.visibility = 'visible';
            searchBar.classList.add('open');
            this.setAttribute('aria-expanded', 'true');
            searchInput.focus();
            searchBar.style.width = ''; // Ajuste o tamanho conforme necessário
            searchBar.style.height = '60px'; // Ajuste a altura conforme necessário


        });
    }

        searchClose.addEventListener('click', function() {
            searchBar.style.visibility = 'hidden';
            searchBar.classList.remove('open');
            this.setAttribute('aria-expanded', 'false');
            searchBar.style.width = ''; // Remove a largura personalizada
            searchBar.style.height = ''; // Remove a altura personalizada
    
            
        });


})



//Codigo para limpar histórico de login
document.addEventListener('DOMContentLoaded', function () {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // Armazenar os valores iniciais dos campos de entrada
    let initialUsernameValue = usernameInput.value;
    let initialPasswordValue = passwordInput.value;

    window.addEventListener('pageshow', function (event) {
        if (event.persisted) {
            // Verificar se a navegação foi feita através do histórico do navegador
            // Se sim, limpar os campos de entrada
            if (window.performance && window.performance.navigation.type === 2) {
                usernameInput.value = initialUsernameValue;
                passwordInput.value = initialPasswordValue;
            }
        }
    });
});


//Animação da galeria principals
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio >= 0.5) {  // Mudei de 1 para 0.5 para ser mais permissivo
            entry.target.classList.add('gallery-off');  // Removi o ponto
        } else {
            entry.target.classList.remove('gallery-off');  // Pode ser útil para alternar a classe
        }
    });
}, {
    threshold: [0, 0.5, 1]
});

document.querySelectorAll('.gallery').forEach(element => {
    observer.observe(element);
});
