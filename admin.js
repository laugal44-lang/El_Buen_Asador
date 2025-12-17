let menu = JSON.parse(localStorage.getItem('menu')) || [];
const lista = document.getElementById('lista');


function render(){
lista.innerHTML = '<h3>Platos cargados</h3>';
menu.forEach((p,i)=>{
lista.innerHTML += `
<p><b>${p.nombre}</b> - $${p.precio}
<button onclick="borrar(${i})">❌</button></p>`;
});
}


function agregarPlato(){
const plato = {
nombre: nombre.value,
descripcion: descripcion.value,
precio: precio.value
};
menu.push(plato);
localStorage.setItem('menu', JSON.stringify(menu));
render();
}


function borrar(i){
menu.splice(i,1);
localStorage.setItem('menu', JSON.stringify(menu));
render();
}


render();
