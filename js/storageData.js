const inputs = document.querySelector('form').querySelectorAll('input');
const textarea = document.getElementById('message');

let data = {
  name: '',
  email: '',
  message: '',
};

window.onload = () => {
  if (localStorage.getItem('contactData')) {
    const contactData = JSON.parse(localStorage.getItem('contactData'));
    inputs.forEach((input) => {
      input.value = contactData[input.name];
    });
    textarea.value = contactData.message;

    data = { ...contactData };
  }
};

//const handleChange = ({ target: { name, value } }) => {
  //data[name] = value;
  //localStorage.setItem('contactData', JSON.stringify(data));
//};

//textarea.onchange = handleChange;
//inputs.forEach((input) => {
  //input.onchange = handleChange;
//});
