import { fazzBizzBarr } from './lib/fazz-bizz-barr.js';

if(process.argv.length < 3) {

  console.log('Ingrese el numero de elementos por argumento')
} else {

  fazzBizzBarr(process.argv[3]);
}