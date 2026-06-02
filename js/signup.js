const form = document.getElementById("registerForm");

form.addEventListener("submit", function(e){

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    if(password !== confirmPassword){

        e.preventDefault();

        alert("Passwords do not match.");

        return;
    }

    alert("Account created successfully!");

    windows.location.href = "login.html";

});