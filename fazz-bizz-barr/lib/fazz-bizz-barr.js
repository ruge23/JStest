function fazzBizzBarr(num){

    let str;

    for(let i = 1; i<=num; i+=1){
        str = '';
        if (i%3 === 0) str += 'Fazz';
        if (i%5 === 0) str += 'Bizz';
        if (i%7 === 0) str += 'Barr';
        if (!str) str = String(i);

        console.log(str);
    }
    return str;
}

module.exports = fazzBizzBarr;