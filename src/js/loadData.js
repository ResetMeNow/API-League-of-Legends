

export function cargarDatos(url, callback) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar el JSON");
            }
            return response.json();
        })
        .then(data => {
            callback(data);
        })
        .catch(error => {
            console.error("Error:", error);
            callback(null, error); // Pasamos null si hay error
        });
}
