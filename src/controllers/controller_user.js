const Usuario = require("../models/model_user")

let id = 0

const nueva_cuenta = async (req, res) => { 

    try {

        const infoRegistro = req.body
    
        const mail = await Usuario.findOne({email:req.body.email});

        if(!mail){

        try{
        const buscar_id = await Usuario.findOne({})   

        if (buscar_id) {
            id = buscar_id.usuario_id + 1;
        }else{
            id = 1
        }

        const registro = new Usuario({
            nombre: infoRegistro.nombre, 
            apellido: infoRegistro.apellido, 
            email: infoRegistro.email, 
            contraseña1: infoRegistro.contraseña1, 
            contraseña2: infoRegistro.contraseña2,
            usuario_id : id 
        });
        
        await registro.save()
        res.status(200).redirect('./tienda')
    
    }catch(error){
        console.log(error)
    }

    }else{
        res.status(200).redirect('./registro')
    }

    } catch (error){

        console.log(`Algo falló en el create: ${error}`)
        res.status(500).json({
            msg: 'Algo falló en el servidor',
            error: true
        })    
    }
}

const buscar = async (req, res) => {
        console.log({email:req.body.email})	
        console.log({pasword:req.body.contraseña})	
        try{   
         const user = await Usuario.findOne({email:req.body.email}).lean() // .lean() => Dejarme lo que devuelve como un objeto vanilla javascript
         if(user.contraseña2===req.body.contraseña){
            //  res.render('datos/user', { pelicula, title: `Video Club - Viendo: ${pelicula.title}`})
            
            id = user.usuario_id
             
            if(200){
                 res.status(200).redirect('./tienda')
            }else{
                res.status(200).redirect('./tienda')
            }
			}else{
				res.status(201).redirect('./registro')
			}}catch(error){
              console.log(error)
            }
	}

    // Mostrar
    const mostrar_perfil = async (req, res) => {
        try{   
            const user = await Usuario.findOne({usuario_id: id})   
           
            res.json(user)

        }catch(error){
            console.log(error)
        }
    }
    
module.exports = {
    nueva_cuenta,
    buscar,
    mostrar_perfil
}