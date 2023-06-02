function myfunction(){
    var x =document.getElementById("pass");

    if(x.type === "password"){
        x.type = "text";
    }
    else{
        x.type = "password";
    }
}

function validate(){
    var password = document.getElementById("pass");
    var login = document.getElementById("login");

    if(
        (password.value == 'Пароль')&&(login.value == 'Логин')
    ){
        alert("Login Succesfull");
        window.location.replace("main_page.html");
        return false;
    }
    else{
        alert("Login Failed");
    }
}



function lpage(){
    window.location.replace("Landingpage.html")
}