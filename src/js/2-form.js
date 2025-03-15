const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_FORM_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const fillFormFields = feedbackForm => {
  try {
    const formDataFromLS = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_FORM_KEY)
    );

    if (formDataFromLS === null) {
      return;
    }

    formData = formDataFromLS;
    const formDataKeys = Object.keys(formData);
    formDataKeys.forEach(key => {
      feedbackForm.elements[key].value = formData[key];
    });
  } catch (error) {
    console.log(error);
  }
};

fillFormFields(form);

form.addEventListener('input', ({ target: formField }) => {
  formData[formField.name] = formField.value;
  localStorage.setItem(LOCAL_STORAGE_FORM_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();

  if (formData.message === '' || formData.email === '') {
    return alert('Fill please all fields');
  }
  e.target.reset();
  localStorage.removeItem(LOCAL_STORAGE_FORM_KEY);
  formData = {};
});
