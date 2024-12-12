document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you for your message, ${name}!\nWe will get back to you soon at ${email}.`);

    // Optionally, you can reset the form
    document.getElementById('contact-form').reset();
});
