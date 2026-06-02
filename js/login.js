const togglePassword =
document.querySelector(".toggle-password");

const password =
document.querySelector("#password");

togglePassword.addEventListener("click", () => {

    const type =
    password.getAttribute("type") === "password"
    ? "text"
    : "password";

    password.setAttribute("type", type);

    togglePassword.classList.toggle("fa-eye");
    togglePassword.classList.toggle("fa-eye-slash");

});

document
.getElementById("loginForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    if(email === "" || password === ""){
        alert("Please fill all fields");
        return;
    }

    alert("Login Successful");

    window.location.href =
    "dashboard.html";

});