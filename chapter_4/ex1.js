function range(start, end, increment=1){
    let arr = [];
    if(start < end && increment > 0){
        for (let i = start; i <= end; i += increment) {
            arr.push(i);
        }
    } else if(start > end && increment < 0){
        for (let i = start; i >= end; i += increment) {
            arr.push(i);
        }
    }

    return arr;
}

function sum(arr){
    let total = 0;
    for(let num of arr){
        total += num;
    }
    return total;
}