import {Categoria} from '../class/Categoria.js'
const categorias = new Categoria();
const select = document.querySelector('#categorias');
const lista = document.querySelector('#lista');
const filtro = document.querySelector('#filtro');

categorias.obtenerCategorias()
.then(categorias=>{
    categorias.forEach(element => {
        const option = document.createElement('option');
        option.value=element.id;
        option.textContent=element.nombre;
        select.appendChild(option);
        
    });
});

categorias.obtenerCategorias()
.then(categorias=>{
    categorias.forEach(element => {
        const li = document.createElement('li');
        li.textContent=element.nombre;
        lista.appendChild(li);
        
    });
});

categorias.obtenerCategorias()
.then(categorias=>{
    categorias.forEach(element => {
        const button = document.createElement('button');
        button.textContent=element.nombre;
        filtro.appendChild(button);
        
    });
});