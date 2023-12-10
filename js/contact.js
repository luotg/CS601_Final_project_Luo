function validateAndSubmit() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');

    if (nameInput.value.length < 2) {
        showError(nameInput, 'Name must be at least 2 characters long.');
        return;
    } else {
        clearError(nameInput);
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        showError(emailInput, 'Invalid email format.');
        return;
    } else {
        clearError(emailInput);
    }

    var formData = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    };

    saveFormData(formData);

    alert('Form submitted successfully!');

    resetForm();
}

function showError(input, message) {

    var errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;

    input.parentNode.appendChild(errorElement);

    input.style.border = '1px solid red';
}

function clearError(input) {
    var parent = input.parentNode;
    var errorElement = parent.querySelector('.error-message');

    if (errorElement) {
        parent.removeChild(errorElement);
        input.style.border = '1px solid #ccc'; 
    }
}

function resetForm() {
    document.getElementById('contactForm').reset();
}

function saveFormData(formData) {
    var savedData = JSON.parse(localStorage.getItem('savedFormData')) || [];

    savedData.push(formData);

    localStorage.setItem('savedFormData', JSON.stringify(savedData));
}
