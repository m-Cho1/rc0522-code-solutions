var $contactForm = document.querySelector('#contact-form');

function submitData(event) {
  event.preventDefault();
  var formData = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value
  };
  console.log('formData: ', formData);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', submitData);
