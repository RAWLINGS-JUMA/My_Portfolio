document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("readMoreBtn");
    const moreText = document.getElementById("moreText");

    if (btn && moreText) {
        btn.addEventListener("click", function(e) {
            e.preventDefault();

            if (moreText.style.display === "none" || moreText.style.display === "") {
                moreText.style.display = "block";
                btn.textContent = "Show Less";
            } else {
                moreText.style.display = "none";
                btn.textContent = "Read More";
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {

    const menuIcon = document.getElementById("menuIcon");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });

});
const navbar = document.querySelector(".navbar");
const menuIcon = document.querySelector(".menu-icon"); // your hamburger button

// Close when clicking a link inside navbar
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

// Close when clicking outside navbar
document.addEventListener("click", (e) => {
    const isClickInsideNavbar = navbar.contains(e.target);
    const isClickOnMenuIcon = menuIcon.contains(e.target);

    if (!isClickInsideNavbar && !isClickOnMenuIcon) {
        navbar.classList.remove("active");
    }
});

document.addEventListener("DOMContentLoaded", function () {

    const readMoreBtn = document.getElementById("readMoreBtn");
    const moreText = document.getElementById("moreText");

    readMoreBtn.addEventListener("click", function (e) {
        e.preventDefault(); // prevents page jump

        if (moreText.style.display === "none") {
            moreText.style.display = "block";
            readMoreBtn.textContent = "Read Less";
        } else {
            moreText.style.display = "none";
            readMoreBtn.textContent = "Read More";
        }
    });

});