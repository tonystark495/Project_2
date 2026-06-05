const toggle = document.getElementById("darkModeToggle");

// Load saved mode
if(localStorage.getItem("darkMode") === "enabled"){
    document.body.classList.add("dark-mode");
    toggle.checked = true;
}

// Toggle dark mode
toggle.addEventListener("change", function(){

    if(this.checked){
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");
    }

});

// SECURITY ACTIONS

function changePassword(){
    alert("Redirecting to change password page...");
}

function enable2FA(){
    alert("Two-Factor Authentication enabled (UI only).");
}

function logoutAllDevices(){
    alert("All devices logged out.");
}

function deleteAccount(){
    const confirmDelete = confirm("Are you sure you want to delete your account?");

    if(confirmDelete){
        alert("Account deleted (UI simulation).");
        window.location.href = "index.html";
    }
}