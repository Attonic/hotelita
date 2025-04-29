document.addEventListener("DOMContentLoaded", function () {
    const pageTitle = document.getElementById("page-title");

    // Defina o título com base na página
    if (pageTitle) {
        const titles = {
            "/index.html": "Hotéis em Itapecuru Mirim",
            "/pages/visitados.html": "Hotéis Mais Visitados",
            "/pages/sobre.html": "Sobre o Projeto",
            "/pages/seuHotel.html": "Entre em Contato",
            "/pages/hoteis/hotel1.html": "Hotel Brasill",
            "/pages/hoteis/hotel2.html": "Hotel Por Do Sol",
            "/pages/hoteis/hotel3.html": "Plaza Hotel e Restaurante",
            "/pages/hoteis/hotel4.html": "Hotel Green Villages",
            
        };

        // Obtenha o caminho da página atual
        const currentPath = window.location.pathname;

        // Defina o título com base no caminho
        pageTitle.textContent = titles[currentPath] || "Título Padrão";
    }

    // Carrega o menu
    fetch("/assets/components/header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar o cabeçalho.");
            }
            return response.text();
        })
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);

            // Registra o evento de clique após o cabeçalho ser carregado
            const menuToggle = document.querySelector(".menu-toggle");
            const menu = document.querySelector(".menu");

            if (menuToggle && menu) {
                menuToggle.addEventListener("click", function (event) {
                    event.stopPropagation(); // Impede que o clique no botão feche o menu
                    menu.classList.toggle("active");
                });

                // Fecha o menu ao clicar fora dele
                document.addEventListener("click", function () {
                    if (menu.classList.contains("active")) {
                        menu.classList.remove("active");
                    }
                });

                // Impede que o clique dentro do menu feche o menu
                menu.addEventListener("click", function (event) {
                    event.stopPropagation();
                });
            } else {
                console.error("Menu ou botão de alternância não encontrado.");
            }
        })
        .catch(error => console.error(error));

    // Carregar o rodapé
    fetch("/assets/components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);
        });
});