

document.addEventListener("DOMContentLoaded", () => {
    const logo = document.getElementById("logo");
    const mainContainer = document.getElementById("main");

    // Evento al hacer clic en el logo
    logo.addEventListener("click", () => {
        fetch("src/assets/data/champion.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al cargar el JSON");
                }
                return response.json();
            })
            .then(data => {
                mostrarCampeones(data);
            })
            .catch(error => {
                console.error("Error:", error);
                mainContainer.innerHTML = "<p>Error al cargar los datos.</p>";
            });
    });

    // Función para mostrar campeones
    function mostrarCampeones(data) {
        mainContainer.innerHTML = ""; 
        const champions = Object.values(data.data);

        champions.forEach(champion => {
            const championCard = document.createElement("div");
            championCard.className = "champion-card";

            championCard.innerHTML = `
                <img src="src/assets/images/${champion.image.full}" alt="${champion.name}">
                <h3>${champion.name} (${champion.title})</h3>
                <p>${champion.blurb}</p>
                <p><strong>Roles:</strong> ${champion.tags.join(", ")}</p>
            `;
            mainContainer.appendChild(championCard);
        });
    }
});






