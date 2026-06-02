function removeCard(button){

    const confirmation =
    confirm(
        "Remove this card?"
    );

    if(confirmation){

        button
        .closest(".card-box")
        .remove();

    }

}

const setDefaultButtons =
document.querySelectorAll(
".set-default-btn"
);

setDefaultButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        document
        .querySelectorAll(
        ".default-btn"
        )
        .forEach(el => {

            el.textContent =
            "Set Default";

            el.classList.remove(
            "default-btn"
            );

            el.classList.add(
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