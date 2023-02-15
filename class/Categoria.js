export class Categoria{
    constructor(){

    }
    obtenerCategorias(){
        return fetch('https://bsite.net/metalflap/td-categoria')
        .then(response => response.json())
        .then(data => data)
    }
}