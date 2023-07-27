const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit (evt) {
    evt.preventDefault();
    const {email, password} = evt.currentTarget.elements;
    if (email.value === '' || password.value === '') {
        alert("Всі поля повинні бути заповнені!");
    }
    const formDataStorageObj = {
        email : email.value,
        password : password.value
    }
    console.log(formDataStorageObj);
    form.reset();
}