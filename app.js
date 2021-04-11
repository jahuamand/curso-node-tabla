//carpeta node_modules no se sube al repositorio.
//al descargar el codigo, usar npm install

//const fs = require('fs');
//const { option } = require('yargs');
const { crearArchivo} =require ('./helpers/multiplicar');
const argv =require ('./config/yargs');
const colors= require('colors');
/*const argv=require('yargs')
            .option('b',{
                alias: 'base',
                type: 'number',
                demandOption: true
            })
            .check((argv, options) => {
               // console.log('yargs',argv)
               if(isNaN(argv.b)) {
                   throw 'La base tiene que ser un número'
               }
               return true;
            })
            .option('l',{
                alias: 'listar',
                type: 'boolean',
                demandOption: true,
                default: false
            })
            .argv;*/

//option('l'): si se pone solo --l lo identifca como true
//listar
//boolean
//default: false


console.clear();

//console.log(process.argv);
//console.log(argv);

//console.log('base: yargs',argv.b);

crearArchivo(argv.b,argv.l,argv.h)
.then(nombreArchivo => console.log(nombreArchivo,'creado'.green))
.catch(err => console.log(colors.red( err)));

// console.log('================');
// console.log('  Tabla del: 5  ');
// console.log('================');

//console.log(process.argv);

/*
const [ , , arg3='base=5'] = process.argv;
const [ ,base=5] = arg3.split('=');
*/

//console.log(base);

/*
crearArchivo(base)
.then(nombreArchivo => console.log(nombreArchivo,'creado'))
.catch(err => console.log(err));
*/

/*
const base =3;

crearArchivo(base)
.then(nombreArchivo => console.log(nombreArchivo,'creado'))
.catch(err => console.log(err));
*/



/*
let salida= '';
for (let i=1;i<=10;i++){
   // console.log(`${base} x ${i} = ${base * i}`);
  salida +=`${base} x ${i} = ${base * i}\n`;
}

console.log(salida);*/
// fs.writeFile( `tabla-${base}.txt`,salida, (err) =>{
//     if (err) throw err;
//     console.log(`tabla ${base}.txt creado` );
// }
// );
/*fs.writeFileSync(`tabla-${base}.txt`,salida);
console.log(`tabla ${base}.txt creado` );
*/