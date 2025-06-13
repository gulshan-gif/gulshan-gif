function scrollToFeatures() {
  document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
}

function handleSubmit(event) {
  event.preventDefault();
  alert('Thanks for your message! We’ll get back to you soon. ✉️');
}