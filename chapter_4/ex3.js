function arrayToList(arr){
    let head = {value: null, rest: null};
    let curr = head;
    for (let i = 0; i < arr.length; i++) {
        curr.value = arr[i];
        if(i + 1 < arr.length){
            curr.rest = {value: null, rest: null};
            curr = curr.rest;
        } else{
            curr.rest = null;
        }
    }
    return head;
}

function listToArray(list){
    let curr = list;
    let arr = [];
    while(curr.rest != null){
        arr.push(curr.value);
        curr = curr.rest;
    }
    arr.push(curr.value);
    return arr;
}

function prepend(element, list){
    return {value: element, rest: list};
}

function nth(num, list){
    if(num == 0 || list.rest == null){
        return num == 0 ? list.value : undefined;
    }else{
        return nth(num - 1, list.rest);
    }
}