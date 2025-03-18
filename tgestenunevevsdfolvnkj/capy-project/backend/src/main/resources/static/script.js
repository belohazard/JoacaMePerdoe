
async function loadCapybara() {
    try {
        const response = await fetch("/api/capybara");
        const data = await response.json();
        const imgElement = document.getElementById("capybara-image");
        imgElement.src = data.url;
    } catch (error) {
        console.error("Erro ao carregar a imagem:", error);
    }
}

function loadQuote() {
    document.getElementById("quote").innerText = "Seja feliz como um cachorro! 🐕";
}

function refreshContent() {
    loadCapybara();
    loadQuote();
}

window.onload = () => {
    refreshContent();
};
