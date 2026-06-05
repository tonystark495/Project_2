document
.getElementById("addCardForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const cardholder =
    document.getElementById("cardholder").value;

    const cardNumber =
    document.getElementById("cardNumber").value;

    const expiry =
    document.getElementById("expiry").value;

    const cvv =
    document.getElementById("cvv").value;

    if(
        !cardholder ||
        !cardNumber ||
        !expiry ||
        !cvv
    ){
        alert("Please fill all fields.");
        return;
    }

    alert(
        "Card linked successfully!"
    );

    window.location.href =
    "wallet.html";

});