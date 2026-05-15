const locais = [
    { tipo: "celular", lugar: "Tec Celular - Pq. Paineiras", },
    { tipo: "celular", lugar: "Casas Bahia - Ermelino Matarazzo", },
    { tipo: "celular", lugar: "Samsung Unidade São Miguel", },
    { tipo: "celular", lugar: "Roche Celulares", },
    { tipo: "celular", lugar: "Casas Bahia Vila Matilde", },
    { tipo: "celular", lugar: "Sodimac Dicico São Paulo - São Miguel", },
    { tipo: "celular", lugar: "Fatec Itaquera – Prof. Miguel Reale", },
    { tipo: "celular", lugar: "Telpres Celulares Ii", },


    { tipo: "bateria", lugar: "RAIA / DROGASIL - Jardim Nordeste" },
    { tipo: "bateria", lugar: "Assaí - Penha Tiquatira" },
    { tipo: "bateria", lugar: "Assaí - São Miguel II" },
    { tipo: "bateria", lugar: "Samsung Unidade São Miguel" },
    { tipo: "bateria", lugar: "Droga Raia" },
    { tipo: "bateria", lugar: "Mundial" },
    { tipo: "bateria", lugar: "RAIA / DROGASIL" },

    { tipo: "notebook", tipo: "computador", lugar: "Casas Bahia - Av. Sao Miguel" },
    { tipo: "notebook", tipo: "computador", lugar: "Casas Bahia - Vila Re" },
    { tipo: "notebook", tipo: "computador", lugar: "Casas Bahia - Ermelino Matarazzo" },
    { tipo: "notebook", tipo: "computador", lugar: "Samsung Unidade São Miguel" },
    { tipo: "notebook", tipo: "computador", lugar: "Mundial" },
    { tipo: "notebook", tipo: "computador", lugar: "Casas Bahia Vila Matilde" },
    { tipo: "notebook", tipo: "computador", lugar: "Sodimac Dicico São Paulo - São Miguel" },
    { tipo: "notebook", tipo: "computador", lugar: "Reciclo Inteligência Ambiental" },
    { tipo: "notebook", tipo: "computador", lugar: "Shopping Metro Itaquera" },
    { tipo: "notebook", tipo: "computador", lugar: "MotoStore São Paulo - Shopping Metrô Itaquera" },

    { tipo: "pilha", lugar: "RAIA / DROGASIL - Jardim Nordeste" },
    { tipo: "pilha", lugar: "Assaí - Águia de Haia" },
    { tipo: "pilha", lugar: "Assaí - Penha Tiquatira" },
    { tipo: "pilha", lugar: "Assaí - São Miguel II" },
    { tipo: "pilha", lugar: "Samsung Unidade São Miguel" },
    { tipo: "pilha", lugar: "C&A - Shopping Itaquera" },
];

function buscar() {
    let entrada = document.getElementById("busca").value.toLowerCase();
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    let filtrados = locais.filter(item => item.tipo.includes(entrada));

    if (filtrados.length === 0) {
        resultado.innerHTML = "<li>Nenhum local encontrado</li>";
        return;
    }

    filtrados.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = "📍 <strong>" + item.lugar + "</strong>";
        resultado.appendChild(li);
    });
}