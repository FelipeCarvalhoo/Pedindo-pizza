function sendOrder() {
    // Obtém os valores do formulário
    const form = document.getElementById("orderForm");
    const formData = new FormData(form);
    const pizza = formData.get("pizza");
    const size = formData.get("size");
    
    // Monta a mensagem de pedido
    const message = `Olá, gostaria de pedir uma pizza de ${pizza} tamanho ${size}.`;
    
    // Cria o link para enviar a mensagem pelo WhatsApp
    const phone = "63992424385"; // número de telefone para enviar a mensagem
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    
    // Abre o link do WhatsApp em uma nova aba
    window.open(url, "_blank");
  }