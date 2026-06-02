function copyText(id){

    const input =
    document.getElementById(id);

    navigator.clipboard.writeText(
        input.value
    );

    alert("Copied successfully!");
}

document
.querySelector(".share-btn")
.addEventListener("click", () => {

    alert(
    "Payment link shared successfully!"
    );

});