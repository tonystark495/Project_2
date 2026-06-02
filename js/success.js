const searchInput =
document.getElementById("searchInput");

const statusFilter =
document.getElementById("statusFilter");

const rows =
document.querySelectorAll(
"#transactionTable tbody tr"
);

function filterTransactions(){

    const search =
    searchInput.value.toLowerCase();

    const status =
    statusFilter.value;

    rows.forEach(row => {

        const text =
        row.textContent.toLowerCase();

        const rowStatus =
        row.children[4]
        .textContent
        .toLowerCase();

        const matchSearch =
        text.includes(search);

        const matchStatus =
        status === "all" ||
        rowStatus === status;

        row.style.display =
        matchSearch && matchStatus
        ? ""
        : "none";

    });

}

searchInput.addEventListener(
"keyup",
filterTransactions
);

statusFilter.addEventListener(
"change",
filterTransactions
);