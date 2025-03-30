document.addEventListener("DOMContentLoaded", function () {
    const pageTitle = document.getElementById("page-title");

    // Defina o título com base na página
    if (pageTitle) {
        const titles = {
            "/pages/index.html": "Hotéis em Itapecuru Mirim",
            "/pages/visitados.html": "Hotéis Mais Visitados",
            "/pages/sobre.html": "Sobre o Projeto",
            "/pages/hoteis/hotel1.html": "Hotel Brasil",
            "/pages/hoteis/hotel2.html": "Hotel Tropical",
            "/pages/hoteis/hotel3.html": "Hotel Vania",
            "/pages/hoteis/hotel4.html": "Pousada Lodas",
            "/pages/hoteis/hotel5.html": "Pousada Lodas",
            "/pages/hoteis/hotel6.html": "Pousada Lodas",
            "/pages/hoteis/hotel7.html": "Pousada Lodas",
            "/pages/hoteis/hotel8.html": "Pousada Lodas"
        };

        // Obtenha o caminho da página atual
        const currentPath = window.location.pathname;

        // Defina o título com base no caminho
        pageTitle.textContent = titles[currentPath] || "Título Padrão";
    }

    fetch("/assets/components/header.html")
    .then(response => response.text())
    .then(data => {
        document.body.insertAdjacentHTML("afterbegin", data);
    });

// Carregar o rodapé
    fetch("/assets/components/footer.html")
    .then(response => response.text())
    .then(data => {
        document.body.insertAdjacentHTML("beforeend", data);
    });
});