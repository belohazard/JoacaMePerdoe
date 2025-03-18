async function loadDog() {
    try {
        const response = await fetch("https://seu-repl.replit.dev:8080/api/dog");
        const data = await response.json();
        document.getElementById("dog-image").src = data.url;
    } catch (error) {
        console.error("Erro ao carregar a imagem:", error);
    }
}

async function loadQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        document.getElementById("quote").innerText = data.content;
    } catch (error) {
        console.error("Erro ao carregar a frase:", error);
    }
}

window.onload = () => {
    loadDog();
    loadQuote();
};
