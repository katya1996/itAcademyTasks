function showChess(length , height , char){
    var a = "";
    for(var i = 0; i < height; i++){
        for(var j = 0; j < length; j++){
            if(i%2===0) {
               a+= char +" ";
            } else {
                a+= " " + char;
            }
        }
        a= a +"\n";
    }
    return a;
}  

console.log(showChess(4,4,"*"));s