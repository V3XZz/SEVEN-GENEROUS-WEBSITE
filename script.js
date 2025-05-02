window.onload = function() {
setTimeout(function() {
window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}, 50);
};

// Efek Fade Out Load

window.onload = () => {
// loader fade out
setTimeout(() => {
document.getElementById('loader').classList.add('fade-out');
}, 1000);  // fade out
// Script Load Web

	//Galeri
 // Menampilkan galeri
document.getElementById("openGallery").onclick = function () {
  document.getElementById("fullscreenGallery").classList.add("show"); // Menambahkan kelas 'show' untuk efek membuka galeri
};

// Menutup galeri
document.getElementById("closeGallery").onclick = function () {
  document.getElementById("fullscreenGallery").classList.remove("show"); // Menghapus kelas 'show' untuk menutup galeri
};

// Menampilkan lightbox
document.querySelectorAll(".gallery-grid img").forEach(img => {
  img.addEventListener("click", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = lightbox.querySelector("img");
    lightboxImg.src = img.src; // Set src image lightbox dengan src image yang diklik
    lightbox.style.display = "block"; // Menampilkan lightbox
  });
});

// Menutup lightbox
document.querySelector(".close-lightbox").addEventListener("click", () => {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none"; // Menutup lightbox
});

 // Script Galeri

// Script Form-Kontak

  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Pesan Yang Wajib Di isi
    const name = document.querySelector('[name="name"]').value;
    const email = document.querySelector('[name="email"]').value;
    const message = document.querySelector('[name="message"]').value;

    // Menyiapkan Payload
    const embed = {
      "embeds": [{
        "title": "Kontak Form Submission",
        "color": 3447003,
        "fields": [
          { "name": "Nama", "value": name, "inline": true },
          { "name": "Gmail", "value": email, "inline": true },
          { "name": "Pesan", "value": message, "inline": false }
        ],
        "footer": {
          "text": "Pesan Kontak Web"
        }
      }]
    };

   
    // Mengirim Pesan 
    const webhookUrl = 'https://discord.com/api/webhooks/1365583624115847218/924teezrVY3kz-N1ogtljxXAa4Ef5GgvOUMJ3tSZxAiRQ4tQh6g7OINU57Jf1CfdZAb1';

    fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(embed)
    })
    .then(response => {
      if (response.ok) {
        alert('Pesan berhasil dikirim!');
      } else {
        alert('Terjadi kesalahan saat mengirim pesan!');
      }
    })
    .catch(error => {
      console.error('Error sending message to Discord:', error);
      alert('Terjadi kesalahan dalam pengiriman pesan!');
    });
  });

// Script Form-Kontak

// Script Load Web
	// Set Window Di-Atas

window.onload = function() {
    // Fungsi untuk scroll ke atas
    setTimeout(function() {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 50); 

    // Fungsi untuk fade out loader dengan penyesuaian delay
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.classList.add('fade-out');
        } else {
            console.error('Loader element not found!');
        }
    }, 500); // Penambahan delay agar lebih lama jika perlu
};
// Script Load Web


	
  // Script Log HWID, Device info, User Agent, dan IP Log
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        const ip = data.ip;
        const userAgent = navigator.userAgent;
        fetch('https://ipapi.co/json/')
  .then(res => res.json())
  .then(locData => {
    const location = `${locData.city}, ${locData.region}, ${locData.country_name}`;
    console.log(location); // bisa kamu ganti sesuai kebutuhan
  });
        const device = navigator.platform;
        const date = new Date().toLocaleString();
        
        // Mengirim Pesan
        const webhookUrl = 'https://discord.com/api/webhooks/1365583624115847218/924teezrVY3kz-N1ogtljxXAa4Ef5GgvOUMJ3tSZxAiRQ4tQh6g7OINU57Jf1CfdZAb1';
        
        // Embed Pesan
        const embed = {
          "embeds": [{
            "title": "WEB ACCESS LOG",
            "color": 15548997,
            "fields": [
              { "name": "IP Address", "value": ip, "inline": true },
              { "name": "Device", "value": device, "inline": true },
              { "name": "User Agent", "value": userAgent, "inline": false },
              { "name": "Location", "value": location, "inline": true },
              { "name": "Date", "value": date, "inline": true }
            ],
            "footer": {
              "text": "HWID Log",
            }
          }]
        };

        // Mengirim Pesan
        fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(embed)
        }).then(response => {
          if (response.ok) {
            console.log('Log successfully sent to Discord');
          } else {
            console.error('Error sending log to Discord');
          }
        });
      });
  }; 
  
  // Script Log HWID, Device info, User Agent, dan IP Log