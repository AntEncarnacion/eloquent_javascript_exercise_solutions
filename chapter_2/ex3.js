let size = 8;
let board = "";

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if(((i + 1) % 2) != 0){
            board += ((j + 1) % 2) != 0 ? " " : "#";
        } else{
            board += ((j + 1) % 2) != 0 ? "#" : " ";
        } 
    }
    board += "\n"
}