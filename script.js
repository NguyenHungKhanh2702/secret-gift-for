// script.js
document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById("loading-screen");
    const notificationScreen = document.getElementById("notification-screen");
    const envelope = document.querySelector(".envelope");
    const openNotificationButton = document.getElementById("open-envelope");
    const progressBar = document.getElementById("progress");

    let progress = 0;

    function updateProgressBar() {
        const step = Math.floor(Math.random() * 10) + 1;
        progress = Math.min(progress + step, 100);
        progressBar.style.width = `${progress}%`;

        if (progress < 100) {
            const delay = Math.floor(Math.random() * 400) + 100;
            setTimeout(updateProgressBar, delay);
        } else {
            loadingScreen.classList.add("hidden");
            notificationScreen.classList.remove("hidden");

            setTimeout(() => {
                envelope.classList.add("show");
                notificationScreen.classList.add("show");
            }, 500);
        }
    }

    updateProgressBar();

    openNotificationButton.addEventListener("click", function() {
        notificationScreen.classList.add("hidden");
        document.getElementById("birthday-screen").classList.remove("hidden");
        document.getElementById("birthday-screen").classList.add("show");
        document.body.classList.add("background-active");

    });
});


     
