document.addEventListener("DOMContentLoaded", () => {
    const formInp = document.getElementById("form-inp");
    const userEmail = document.getElementById("email");
    const errorMsg = document.getElementById("error-msg");
    const errorImg = document.getElementById("error-img");
    const submitButton = document.getElementById("submit-btn");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    formInp.addEventListener("submit", (e) => {
        e.preventDefault();

        if((!emailPattern.test(userEmail.value.trim())) || (userEmail.value.trim() === "")) {
            
            
            errorMsg.classList.remove("hidden");
            errorImg.classList.remove ("hidden");
            userEmail.classList.add("border-red-400");

            submitButton.classList.add("from-red-400", "to-pink-500");
        }
        else {
            errorMsg.classList.add("hidden");
            errorImg.classList.add ("hidden");
            window.location.href = "successPage.html";
            userEmail.value = "";
        }

    });

    userEmail.addEventListener("input", () => {
        if(emailPattern.test(userEmail.value.trim())) {

            errorMsg.classList.add("hidden");
            errorImg.classList.add("hidden");
            userEmail.classList.remove("border-red-400");
        }
        else {
            userEmail.classList.add("border-red-400");
        }
    });
});