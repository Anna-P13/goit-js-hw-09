
const formData = {
    email: "",
    message: "",
};

const form = document.querySelector('.feedback-form');
form.addEventListener('input', event => {
    const { name, value } = event.target;
    formData[name] = value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

const savedData = localStorage.getItem('feedback-form-state');

if (savedData) {
    const parsedData = JSON.parse(savedData);
    form.elements.email.value = parsedData.email || '';
    form.elements.message.value = parsedData.message || '';
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
}
form.addEventListener('submit', event => {
    event.preventDefault();
    const { email, message } = formData;
    if (email === " " || message === " ") {
        alert("Fill please all fields");
        return;
    }
    console.log(formData);

    localStorage.removeItem('feedback-form-state');
    form.reset();
    formData.email = " ";
    formData.message = " ";
});

