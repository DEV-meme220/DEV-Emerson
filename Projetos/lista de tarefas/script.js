function adicionarTarefa() {
    const input = document.getElementById("01"); 
    const texto = input.value; 

    if 
        (texto.trim() === "") {
            return;
        }
    
    const lista = document.getElementById("listaTarefas"); 
    const item = document.createElement("li");

    input.value = "";
}

