function addtion(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    
    var no1 = parseInt(num1);
    var no2 = parseInt(num2);

     var sum = no1 + no2;
    
   var element = document.getElementById("sum");
      element.innerHTML = "Sum of two number is: "+ sum;
    

}