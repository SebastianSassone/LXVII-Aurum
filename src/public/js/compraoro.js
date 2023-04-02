// Carrito
// Abrir y cerrar carrito
const abrir_c = document.getElementById('abrir_c')
const cerrar_c = document.getElementById('cerrar_c')

abrir_c.addEventListener('click', () => {
    let section_carrito = document.getElementById('section_carrito')
    section_carrito.style.display = 'flex'
})
cerrar_c.addEventListener('click', () => {
    let section_carrito = document.getElementById('section_carrito')
    section_carrito.style.display = 'none'
})

// Sumar productos
const lis_produc = document.getElementById('lis_produc')
const val_final = document.getElementById('val_final')
const buttons = document.querySelectorAll('button')
console.log(buttons)

const productos = [
    ["Lingote de oro 20g", 284963,83 + "$"],
    ["Lingote de oro 10g", 150153,73 + "$"],
    ["Lingote de oro 50g", 684984,36 + "$"]
]

let pre_produc_default = 0

function sumar_precios(pre_produc){
let valor1 = pre_produc
let valor2 = pre_produc_default
suma=parseFloat(valor1)+parseFloat(valor2);
    val_final.innerHTML = suma
    pre_produc_default = suma
}

function sumar_productos(producto){
    buttons.forEach(() => button = buttons);{

    buttons[1].addEventListener('click', () => {
        producto = productos[0]  
        crear_producto(producto)  
            pre_produc = productos[0][1]
            sumar_precios(pre_produc)
    })
        buttons[2].addEventListener('click', () => {
            producto = productos[1] 
            crear_producto(producto)
               pre_produc = productos[1][1]
               sumar_precios(pre_produc)
        })
            buttons[3].addEventListener('click', () => {
                producto = productos[2] 
                crear_producto(producto)
                    pre_produc = productos[2][1]
                    sumar_precios(pre_produc)
            })
}
}
sumar_productos()

function crear_producto(producto){
    const lis_produc = document.getElementById('lis_produc')
        let mosp_produc = document.createElement('div');
            lis_produc.appendChild(mosp_produc);
                mosp_produc.classList.add('mosp_produc');
                    mosp_produc.innerHTML = producto
    
        let boton = document.createElement('button')
            mosp_produc.appendChild(boton)
                boton.classList.add('but_bor')
                    boton.innerHTML = 'X'
                        boton.addEventListener('click', () => mosp_produc.style.display = 'none')
                        boton.addEventListener('click', () => boton.style.display = 'none')

            let but_vac_car = document.getElementById('but_vac_car')
            but_vac_car.addEventListener('click', () => {
                val_final.innerHTML = 0
                mosp_produc.style.display = 'none'
            })
}

async function solicitar_datos(){
    try{
      let response = await fetch('https://lxvii-aurum.onrender.com/datos');
      let respuesta = await response.json();
      const but_fin_com = document.getElementById('but_fin_com')
      but_fin_com.addEventListener('click', () => {
         if(pre_produc_default == 0){
             alert('No hay productos en su carrito')
         }else{
            let section_factura = document.getElementById('section_factura')
            section_factura.style.display = 'flex'
            
                   document.getElementById('nombre').innerHTML = respuesta.name
                   document.getElementById('apellido').innerHTML = respuesta.apellido
                   document.getElementById('email').innerHTML = respuesta.email
                   document.getElementById('valor_final').innerHTML = pre_produc_default     
         }
      })

      const but_acept = document.getElementById('but_acept')
            but_acept.addEventListener('click', () => {
                section_factura.style.display = 'none'
            })

    }catch (error){
        console.log(error)}
}

solicitar_datos()

