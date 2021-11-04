function deepEqual(value1, value2){
    if(typeof value1 == 'object' && typeof value2 == 'object' && value1 && value2){
        let keys1 = Object.keys(value1);
        for(key of keys1){
            if(key in value2){
                if(!deepEqual(value1[key], value2[key])){
                    return false;
                }
            }else{
                return false;
            }
        }
        return true;
    }else{
        return value1 == value2;
    }
}