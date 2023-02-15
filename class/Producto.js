export class Producto{
    #api
    constructor(){
        this.#api = 'https://bsite.net/metalflap';
        this.nombre="";
    }

    async listaProductos(){
        const response = await fetch(this.#api+'/td-producto')
        const data = await response.json()
        return data;
    }


    async crearProducto(producto){

        
        const response = await fetch(this.#api+'/td-producto',
        {method:'POST',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }, 
        body: JSON.stringify(producto)});

        console.log(response);
      
    }
}