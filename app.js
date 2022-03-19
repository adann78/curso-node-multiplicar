
const { crearArchivo }=require('./HELPERS/multiplicar')
const argv=require('./config/yargs');
const colors=require('colors');
/*
console.clear()
console.log(process.argv);
const[, ,arg3='base 5']=process.argv;
const[ , base=5]=arg3.split('=');
console.log(arg3)

*/

//const base=12;

crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo=>console.log (nombreArchivo.rainbow),'creado')
.catch(err=>console.log(err))    



