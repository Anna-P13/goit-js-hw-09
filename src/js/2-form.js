let formData = {
    email: '',
    message: ''
  };
  
  const form = document.querySelector('.feedback-form');
  const STORAGE_KEY = 'feedback-form-state';
  

  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData = { ...formData, ...parsedData };
  
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
  
 
  form.addEventListener('input', (event) => {
    const { name, value } = event.target;
    if (name in formData) {
      formData[name] = value;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
  
    if (email === '' || message === '') {
      alert('Fill please all fields');
      return;
    }
  
    console.log({ email, message });
  
  
    localStorage.removeItem(STORAGE_KEY);
    formData = { email: '', message: '' };
    form.reset();
  });
  