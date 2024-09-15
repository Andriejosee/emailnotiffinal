document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevent the default form submission

    let formData = new FormData(this);

    try {
        let response = await fetch('send_email.php', {
            method: 'POST',
            body: formData
        });

        let result = await response.text();
        document.getElementById('formStatus').innerHTML = result;
    } catch (error) {
        document.getElementById('formStatus').innerHTML = 'Error sending message';
    }
});
