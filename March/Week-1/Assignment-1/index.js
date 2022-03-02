function checkPassword(){
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;

    // console.log(pass1 +"-"+pass2);

    if(pass1 === pass2 && pass1 != "" && pass2 != ""){
        alert("Password Match");
    }else if(pass1 == "" && pass2==""){
        alert("Please Enter Password");
    }else{
        alert("Password Not Match");
    }
}