document
.getElementById("adminLoginForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    if(
        email === "admin@abcs.com" &&
        password === "admin123"
    ){

        window.location.href =
        "admin-dashboard.html";

    }else{

        alert(
        "Invalid administrator credentials."
        );

    }

});