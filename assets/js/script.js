document.addEventListener("DOMContentLoaded", function () {
    const hotels = [
        {   id: 1, 
            name: "Hotel Brasil", 
            location: "Centro", 
            description: "Conforto garantido.", 
            contact: "99999-9999", 
            image: "/assets/img/hoteimg.jpg" },

        {   id: 2, 
            name: "Hotel Tropical", 
            location: "Centro", 
            description: "Vista incrível.", 
            contact: "98888-8888", 
            image: "/assets/img/hoteimg.jpg" },

        {   id: 3, 
            name: "Hotel Vania", 
            location: "Lago Encantado", 
            description: "Clima agradável.", 
            contact: "97777-7777", 
            image: "/assets/img/hoteimg.jpg" },
            
        {   id: 4, 
            name: "Pousada Lodas", 
            location: "Bairro Verde", 
            description: "Tranquilidade e natureza.", 
            contact: "96666-6666", 
            image: "/assets/img/hoteimg.jpg" },
        
        {   id: 5, 
            name: "Pousada Lodas", 
            location: "Bairro Verde", 
            description: "Tranquilidade e natureza.", 
            contact: "96666-6666", 
            image: "/assets/img/hoteimg.jpg" },
            
        {   id: 6, 
            name: "Pousada Lodas", 
            location: "Bairro Verde", 
            description: "Tranquilidade e natureza.", 
            contact: "96666-6666", 
            image: "/assets/img/hoteimg.jpg" },
        
        {   id: 7, 
            name: "Pousada Lodas", 
            location: "Bairro Verde", 
            description: "Tranquilidade e natureza.", 
            contact: "96666-6666", 
            image: "/assets/img/hoteimg.jpg" },

        {   id: 8, 
            name: "Pousada Lodas", 
            location: "Bairro Verde", 
            description: "Tranquilidade e natureza.", 
            contact: "96666-6666", 
            image: "/assets/img/hoteimg.jpg" },
        
        ];

    const hotelList = document.getElementById("hotel-list");

    hotels.forEach(hotel => {
        const hotelCard = document.createElement("div");
        hotelCard.classList.add("hotel-card");
        hotelCard.innerHTML = `
            <img src="${hotel.image}" alt="${hotel.name}" class="hotel-image">
            <h2>${hotel.name}</h2>
            <p><strong>Localização:</strong> ${hotel.location}</p>
            <p>${hotel.description}</p>
            <p><strong>Contato:</strong> ${hotel.contact}</p>
            <a href="hoteis/hotel${hotel.id}.html"><button class="view-button">Ver mais</button></a>
        `;
        hotelList.appendChild(hotelCard);
    });



       
   
});
