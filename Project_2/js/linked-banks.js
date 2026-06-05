function removeBank(button){

    const confirmDelete =
    confirm("Remove this bank account?");

    if(confirmDelete){

        button
        .closest(".bank-box")
        .remove();

    }

}

const defaultButtons =
document.querySelectorAll(
".set-default-btn"
);

defaultButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        document
        .querySelectorAll(".default-btn")
        .forEach(item => {

            item.textContent =
            "Set Default";

            item.classList.remove(
            "default-btn"
            );

            item.classList.add(
            "set-default-btn"
            );

        });

        btn.textContent =
        "Default";

        btn.classList.remove(
        "set-default-btn"
        );

        btn.classList.add(
        "default-btn"
        );

    });

});