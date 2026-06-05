function logout(){
    window.location.href = "dashboard.html";
}
document
.getElementById("profileForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Profile updated successfully!");

});