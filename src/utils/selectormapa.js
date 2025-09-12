const botones = document.querySelectorAll(".btn-clinica");

botones.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.nextElementSibling.style.visibility == "visible" && button.nextElementSibling.style.display !== "none") {
            button.nextElementSibling.style.display = "none"
        } else {
            button.nextElementSibling.style.visibility = "visible"
            button.nextElementSibling.style.display = "block"

        }
    });
});






