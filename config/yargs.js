const argv=require('yargs').option('b',{
    alias:'base',
    type: 'number',
    demandOption:true
})
.option('l',{
    alias: 'listar',
    type: 'boolean',
    demandOption:true,
    default:false,
    describe:'Es la base de la tabla de multiplicar'

})
.option('h',{
    alias: 'hasta',
    type: 'number',
    
    default:10,
    describe:'hasta donde la tabla de multiplicar'

})
.check((argv,options)=>{
    console.log('yargs',argv)
    if(isNaN(argv.b))
    {
        throw 'La base tiene que ser un numero'
    }
    return true;
})


.argv;
module.exports=argv;