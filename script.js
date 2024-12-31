<script src="const form = document.getElementById('responseForm');
  const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL_HERE'; // Replace with your Apps Script URL
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
  
    fetch(scriptURL, { method: 'POST', body: formData })
      .then((response) => {
        alert('Your response has been submitted!');
        form.reset();
      })
      .catch((error) => {
        alert('Error submitting form: ' + error.message);
      });
  });"></script>