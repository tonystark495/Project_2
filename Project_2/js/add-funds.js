document
.getElementById("addFundsForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const amount =
    document.getElementById("amount").value;

    const method =
    document.getElementById("method").value;

    if(amount <= 0){

        alert("Enter a valid amount.");

        return;
    }

    if(method === ""){

        alert("Please select a funding method.");

        return;
    }

    alert(
        `$${amount} will be added via ${method}.`
    );

    window.location.href =
    "wallet.html";

});