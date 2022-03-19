const fs= require('fs')
const argv=require('yargs').argv;
const colors=require('colors');
const crearArchivo= async(base=7, listar=false, hasta=10)=>{
  try{
    console.log("===========================".green)
    console.log(`T A B L A  D E L : ${base}` )
    console.log("===========================".red)
    let salida=''

    for (let i=1;i<=hasta;i++){
    
    salida+=`${base} X ${i} = ${base*i}\n`
    
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
    return (`tabla-${base}.txt`)
  
    

  }catch(err){
throw err;
  }
    
    
}
    module.exports={
      crearArchivo
    }
