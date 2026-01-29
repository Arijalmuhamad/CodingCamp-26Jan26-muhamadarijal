// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevents the page from reloading

            // 1. Capture Form Data
            const nama = document.getElementById('form-nama').value;
            const tgl = document.getElementById('form-tgl').value;
            const jk = document.querySelector('input[name="jk"]:checked').value;
            const pesan = document.getElementById('form-pesan').value;

            // Generate current timestamp
            const timeNow = new Date().toString();

            // 2. Update Hero Welcome Message
            const userNameDisplay = document.getElementById('user-name');
            if (userNameDisplay) {
                userNameDisplay.innerText = nama;
            }

            // 3. Update Result Box Display
            document.getElementById('res-time').innerText = timeNow;
            document.getElementById('res-nama').innerText = nama;
            document.getElementById('res-tgl').innerText = tgl;
            document.getElementById('res-jk').innerText = jk;
            document.getElementById('res-pesan').innerText = pesan;

            // 4. Smooth scroll back to top to see the name change
            window.scrollTo({ top: 0, behavior: 'smooth' });

            console.log("Form successfully submitted for:", nama);
        });
    }
});
