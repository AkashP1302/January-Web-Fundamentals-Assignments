var num = prompt("Enetr a Number");
num = parseInt(num);
var flag = true;

if(isNaN(num)){
    console.log("Enter a Valid Number");
}else{
    for(var i = 2; i < num; i++){
        
        if(num%i == 0){
            flag = false;
            break;
        }   
    }
}

if(flag){
    console.log("Prime Number");
}else{
    console.log("Not Prime Number");
}