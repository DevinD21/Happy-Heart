document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createForm = document.querySelector("#createAcc");

    document.querySelector("#loginLink").addEventListener("click",e => {
        e.preventDefault();
        loginForm.classList.remove("form_hidden");
        createForm.classList.add("form_hidden");
    });

    document.querySelector("#createAccLink").addEventListener("click",e => {
        e.preventDefault();
        loginForm.classList.add("form_hidden");
        createForm.classList.remove("form_hidden");
    });
});

