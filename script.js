document.addEventListener("DOMContentLoaded", function () {
    // Navbar Toggle
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            hamburger.classList.remove("active");
        });
    });

    // Popup
    const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".close-btn");

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

    // AI Chatbot Button
    const chatbotBtn = document.getElementById("chatbotBtn");
    chatbotBtn.addEventListener("click", function () {
        alert("AI Chatbot coming soon!");
    });
});
