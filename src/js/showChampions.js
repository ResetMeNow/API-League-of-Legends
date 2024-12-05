
export function mostrarCampeones(data, container) {
    if (!data) {
        container.innerHTML = "<p>Error al cargar los datos.</p>";
        return;
    }

    container.innerHTML = "";  // Limpiar el contenido previo
    const champions = Object.values(data.data);

    champions.forEach(champion => {
        const championCard = document.createElement("div");
        championCard.className = "champion-card";

        championCard.innerHTML = `
            <img src="assets/images/${champion.image.full}" alt="${champion.name}">
            <h3>${champion.name} (${champion.title})</h3>
            <p>${champion.blurb}</p>
            <p><strong>Roles:</strong> ${champion.tags.join(", ")}</p>
        `;
        container.appendChild(championCard);
    });
}
