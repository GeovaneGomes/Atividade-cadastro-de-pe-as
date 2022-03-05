var listaDePecas = ["Amortecedor", "Motor", "Filtro de ar"];

let peso = 100;

if(peso < 100) {
    console.log("A peça deve pesar no minimp 100g");
}else {
    console.log("A peça possui peso adequado")
};

var listaDePecas = ["Amortecedor", "Motor", "Filtro de ar", "Amortecedor", "Motor", "Filtro de ar", "Amortecedor", "Motor", "Filtro de ar", "Amortecedor"];

if(listaDePecas.length < 10) {
    console.log("Ainda tem espaço");
}else {
    console.log("Não tem mais espaço")
};


let nomePeca = "Disco de Freio"

if(nomePeca.length > 3) {
    console.log("Nome da peça esta adequado")
}else if (nomePeca.length == 0) {
    console.log("Nome da peça não pode ser vazio")
}else {
    console.log("nome da peça precisa ter no minimo 3 caracterres")
}
