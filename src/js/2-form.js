const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const email = document.querySelector("input[name = 'email']");
const message = document.querySelector("textarea[name = 'message']");

email.addEventListener('input', () => {
  formData.email = form.elements.email.value;

  if (formData.email !== '') {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
});

message.addEventListener('input', () => {
  formData.message = form.elements.message.value;

  if (formData.message !== '') {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
});

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;
  if (formData.email !== '' && formData.message !== '') {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.removeItem('feedback-form-state');
    form.reset();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const savedInfo = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedInfo) {
    form.elements.email.value = savedInfo.email;
    form.elements.message.value = savedInfo.message;
  }
});
