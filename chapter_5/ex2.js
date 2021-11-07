function loop(value, testFunct, updateFunct, bodyFunct){
    while(testFunct(value)){
        bodyFunct(value);
        value = updateFunct(value);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
loop(0, n => n < 10, n => n + 1, console.log);