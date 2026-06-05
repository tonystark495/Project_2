document
.getElementById("markAllRead")
.addEventListener("click", () => {

    const notifications =
    document.querySelectorAll(".notification");

    notifications.forEach(notification => {

        notification.classList.remove("unread");

    });

    alert("All notifications marked as read.");

});