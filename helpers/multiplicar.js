const fs = require('fs');
const colors= require('colors/safe');
/*
const crearArchivo = (base = 5) => {
    return new Promise((resolve,reject) => {      
        console.log('================');
    //console.log(`  Tabla del: ${base}  `);
    console.log('  Tabla del:', base  );
    console.log('================');
    let salida= '';
    for (let i=1;i<=10;i++){
      salida +=`${base} x ${i} = ${base * i}\n`;
    }   
    console.log(salida);    
    fs.writeFileSync(`tabla-${base}.txt`,salida);
    resolve(`tabla-${base}.txt`);
    });
}*/

const crearArchivo = async (base = 5,listar=false,hasta = 10) => {
    try {
        
        let salida, consola= '';
        for (let i=1;i<=hasta;i++){
        salida +=`${base} x ${i} = ${base * i}\n`;
        //salida +=`${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        consola +=`${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }   
        if(listar){
           
            
            // console.log('  Tabla del:', base  );
            // console.log('================');
            // console.log(salida); 
            //console.log(colors.blue('================'));
            console.log('================'.green);
            //console.log(colors.inverse('  Tabla del:', base  ));
            console.log('  Tabla del:'.green, colors.blue(base)  );
            console.log(colors.green('================'));
            //console.log(colors.rainbow(salida)); 
            console.log(consola); 
        }           
        //fs.writeFileSync(`tabla-${base}.txt`,salida);
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        //return colors.rainbow(`tabla-${base}.txt`);
        return (`tabla-${base}.txt`).rainbow;
    } catch (err) {
        throw err;
    }   
    
    
}

module.exports = {
    //funcion : crearArchivo
    //crearArchivo : crearArchivo
    crearArchivo
}