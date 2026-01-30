// script.js
// Handle greeting & Message Us form

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  // Pastikan form ada
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop reload page

    // Ambil data form
    const namaInput = document.getElementById("form-nama");
    const tglInput = document.getElementById("form-tgl");
    const pesanInput = document.getElementById("form-pesan");
    const jkInput = document.querySelector('input[name="jk"]:checked');

    const nama = namaInput.value.trim();
    const tgl = tglInput.value;
    const pesan = pesanInput.value.trim();

    // ================= VALIDATION =================
    if (nama === "") {
      alert("Nama tidak boleh kosong!");
      namaInput.focus();
      return;
    }

    if (tgl === "") {
      alert("Tanggal lahir wajib diisi!");
      tglInput.focus();
      return;
    }

    if (!jkInput) {
      alert("Silakan pilih jenis kelamin!");
      return;
    }

    if (pesan === "") {
      alert("Pesan tidak boleh kosong!");
      pesanInput.focus();
      return;
    }

    // ================= CURRENT TIME =================
    const currentTime = new Date().toLocaleString("id-ID");

    // ================= WELCOME SPEECH =================
    const userNameDisplay = document.getElementById("user-name");
    userNameDisplay.innerText = nama;

    // ================= SHOW RESULT =================
    document.getElementById("res-time").innerText = currentTime;
    document.getElementById("res-nama").innerText = nama;
    document.getElementById("res-tgl").innerText = tgl;
    document.getElementById("res-jk").innerText = jkInput.value;
    document.getElementById("res-pesan").innerText = pesan;

    // ================= SHOW RESULT BOX =================
    const resultBox = document.getElementById("result-box");
    resultBox.classList.add("show");

    // // ================= SCROLL TO TOP =================
    // window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth'
    // });

    resultBox.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    document.addEventListener("DOMContentLoaded", () => {
      const resultBox = document.getElementById("result-box");
      if (resultBox) resultBox.classList.remove("show");
    });

    // ================= LOG (OPTIONAL) =================
    console.log("Form submitted:", {
      nama,
      tgl,
      jenis_kelamin: jkInput.value,
      pesan,
    });
  });
});
