document
.getElementById("kycForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert(
        "Verification documents submitted successfully."
    );

    window.location.href =
    "profile.html";

});