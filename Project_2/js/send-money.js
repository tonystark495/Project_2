const form = document.getElementById("sendForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const recipient =
        document.getElementById("recipient").value;

    const amount =
        document.getElementById("amount").value;

    if(amount <= 0){

        alert("Enter a valid amount.");

        return;
    }

    const confirmTransfer =
        confirm(
        `Send $${amount} to ${recipient}?`
        );

    if(confirmTransfer){

        alert(
        "Transfer submitted successfully."
        );

        window.location.href =
        "dashboard.html";
    }
    window.location.href = "confirm-payment.html";
});