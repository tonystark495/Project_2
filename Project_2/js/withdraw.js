document
.getElementById("withdrawForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const amount =
    document.getElementById("amount").value;

    const method =
    document.getElementById("method").value;

    const destination =
    document.getElementById("destination").value;

    if(amount <= 0){

        alert("Please enter a valid amount.");

        return;

    }

    if(method === ""){

        alert("Select a withdrawal method.");

        return;

    }

    alert(
        `Withdrawal of $${amount} to ${destination} via ${method} submitted successfully.`
    );

    window.location.href =
    "withdraw-confirmation.html";

});