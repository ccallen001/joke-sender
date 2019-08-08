const input = document.querySelector('input');

function sendMessage() {
  let phoneNumber = input.value;

  if (phoneNumber) {
    phoneNumber = phoneNumber.replace(/\D/g, '');
    
    input.focus();
    input.value = null;

    fetch('/send-text', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        phoneNumber
      })
    });
  }
}