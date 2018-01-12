export function hexadecimalToBinary(hexa){
          
    const mapping = {
        "0":"0000",
        "1":"0001",
        "2":"0010",
        "3":"0011",
        "4":"0100",
        "5":"0101",
        "6":"0110",
        "7":"0111",
        "8":"1000",
        "9":"1001",
        "A":"1010",
        "B":"1011",
        "C":"1100",
        "D":"1101",
        "E":"1110",
        "F":"1111"
    }

    var hexaString = hexa.toString();
    var i;
    var returnString = "";
    
    for(i=0; i < hexaString.length; i++){
        returnString += mapping[hexaString[i]];
    }

    return returnString;
} 


export function binaryToHexadecimal(bin){
    
    const mapping = {
        "0000":"0",
        "0001":"1",
        "0010":"2",
        "0011":"3",
        "0100":"4",
        "0101":"5",
        "0110":"6",
        "0111":"7",
        "1000":"8",
        "1001":"9",
        "1010":"A",
        "1011":"B",
        "1100":"C",
        "1101":"D",
        "1110":"E",
        "1111":"F",
    };

    var i;
    var binString = bin.toString();
    var returnString = "";
    var remainder = "";

    for(i = binString.length; i >=4; i -= 4){
        if(i - 4 < binString.length){
            returnString = mapping[binString.substr(i-4, 4)] + returnString;
        }
    }

    if(i !== 0){
        remainder = binString.substr(0, i);

        while(remainder.length < 4){
            remainder = "0" + remainder;
        }

        returnString = mapping[remainder] + returnString;
    }

    return returnString;
};


