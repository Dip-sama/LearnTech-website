    document.addEventListener("DOMContentLoaded", function () {
        const popup = document.getElementById("popup");
        const closeBtn = document.querySelector(".close-btn");
        const navLinks = document.getElementById("navLinks");
        const hamburger = document.getElementById("hamburger");

        // Show popup after 1 second
        setTimeout(() => {
            popup.style.display = "flex";
        }, 1000);

        // Close popup when clicking the "X" button
        closeBtn.addEventListener("click", () => {
            popup.style.display = "none";
        });

        // Close popup when clicking outside of it
        window.addEventListener("click", (e) => {
            if (e.target === popup) {
                popup.style.display = "none";
            }
        });

        // Toggle mobile menu
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
document.getElementById("chatbotBtn").addEventListener("click", function () {
        alert("AI Chatbot coming soon!");
    });
});
        });
    });