document.addEventListener('onload', () => {
    alert('Hola')
})

console.log('Hola')

const $form = document.querySelector('#form')

$form.addEventListener('submit', () => {

const contraseña1 = document.getElementById('contraseña1').value
const contraseña2 = document.getElementById('contraseña2').value

if( contraseña1 === contraseña2){
    alert('Registro realizado con exito')
}else{
    alert('Las contraseñas no coninciden reintente')
}})