document.addEventListener("DOMContentLoaded", function () {
    const hotelList = document.getElementById("hotel-list"); // Para a página principal
    const visitadosContainer = document.getElementById("mais-visitados"); // Para a página de mais visitados

    // Função para buscar todos os hotéis
    async function fetchHotels() {
        if (!hotelList) return; // Evita erros se o elemento não existir
        try {
            const response = await fetch("https://hotelita-api.onrender.com/hoteis");
            if (!response.ok) {
                throw new Error("Erro ao buscar hotéis");
            }
            const hotels = await response.json();
            renderHotels(hotels);
        } catch (error) {
            console.error(error);
        }
    }

    // Função para renderizar os hotéis na página principal
    function renderHotels(hotels) {
        hotels.forEach(hotel => {
            const hotelCard = document.createElement("div");
            hotelCard.classList.add("hotel-card");
            hotelCard.innerHTML = `
                <img src="${hotel.imagem}" alt="${hotel.nome}" class="hotel-image">

                <h2>>${hotel.nome}</h2>
                
                <p><strong>Localização:</strong> ${hotel.descricao}</p>
                <p><strong>Contato:</strong> ${hotel.telefone}</p>
                <button class="view-button" data-id="${hotel.id}">🔍︎ Ver mais</button>

                <img src="assets/img/svg/home-page-svgrepo-com.svg" alt="Search Icon"
                class="search-icon"> 
            `;
            hotelList.appendChild(hotelCard);
        });

        // Adicione eventos de clique aos botões "Ver mais"
        const buttons = document.querySelectorAll(".view-button");
        buttons.forEach(button => {
            button.addEventListener("click", async (event) => {
                const hotelId = event.target.getAttribute("data-id");
                try {
                    await fetch(`https://hotelita-api.onrender.com/hoteis/${hotelId}/incrementar-visitas`, {
                        method: "PUT"
                    });
                    // Redireciona para a página do hotel (se necessário)
                    window.location.href = `/pages/hoteis/hotel${hotelId}.html`;
                } catch (error) {
                    console.error("Erro ao incrementar visitas:", error);
                }
            });
        });
    }

    // Função para buscar os hotéis mais visitados
    async function fetchMaisVisitados() {
        if (!visitadosContainer) return; // Evita erros se o elemento não existir
        try {
            const response = await fetch("https://hotelita-api.onrender.com/hoteis/populares"); //consomei a rota de populares
            if (!response.ok) {
                throw new Error("Erro ao buscar hotéis mais visitados");
            }
            const hotels = await response.json();
            renderMaisVisitados(hotels);
        } catch (error) {
            console.error(error);
        }
    }

    // Função para renderizar os hotéis mais visitados
    function renderMaisVisitados(hotels) {
        hotels.forEach(hotel => {
            const hotelCard = document.createElement("div");
            hotelCard.classList.add("hotel-card");
            hotelCard.innerHTML = `
                <img src="${hotel.imagem}" alt="${hotel.nome}" class="hotel-image">
                <h2>>${hotel.nome}</h2>
                <p><strong>Localização:</strong> ${hotel.descricao}</p>
                <p><strong>Contato:</strong> ${hotel.telefone}</p>
                <button class="view-button" data-id="${hotel.id}">🔍︎ Ver mais</button>
            `;
            visitadosContainer.appendChild(hotelCard);
        });

        // Adicione eventos de clique aos botões "Ver mais"
        const buttons = document.querySelectorAll(".view-button");
        buttons.forEach(button => {
            button.addEventListener("click", async (event) => {
                const hotelId = event.target.getAttribute("data-id");
                try {
                    await fetch(`https://hotelita-api.onrender.com/hoteis/${hotelId}/incrementar-visitas`, {
                        method: "PUT"
                    });
                    // Redireciona para a página do hotel (se necessário)
                    window.location.href = `hoteis/hotel${hotelId}.html`;
                } catch (error) {
                    console.error("Erro ao incrementar visitas:", error);
                }
            });
        });
    }

    // Chamar as funções para buscar e exibir os hotéis
    fetchHotels();
    fetchMaisVisitados();
});
