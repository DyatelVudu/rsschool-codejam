function sumOfOther(arr){
    if(arr.length){
        if(arr.every(el => !isNaN(+el))){
            let res = arr.reduce((acc, el) => acc + +el)
            return arr.map((el)=> res - +el);
        } else return 'Not all elements in your array are numbers';
    } else return null;
}

module.exports = { sumOfOther:sumOfOther }
