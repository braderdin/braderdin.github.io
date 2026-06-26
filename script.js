/* 
   Fail JavaScript ini membolehkan website abang ada interaksi.
   Sangat bagus untuk belajar asas JS di Github.
*/

// Fungsi 1: Paparkan mesej Pop-up bila seseorang klik pada gambar profil abang
// Mula-mula, kita cari elemen yang ada kelas 'profile-pic'
const gambarProfil = document.querySelector('.profile-pic');

// Jika gambar profil berjaya dijumpai di index.html, kita tambah fungsi 'click'
if (gambarProfil) {
    gambarProfil.addEventListener('click', function() {
        // Teks pop-up yang akan keluar (Gaya old-school alert)
        alert("Vroom! Vroom! Ride hard, ride safe kawan! \nTerima kasih usha profil Abang Din.");
    });
}

// Fungsi 2: Console log (Ini rahsia developer. Buka 'Inspect' -> 'Console' di browser untuk nampak)
// Untuk abang belajar fungsi console bila run website nanti
console.log("🔥 Sistem Garage Abang Din sedang berjalan...");
console.log("Jentera: Honda ADV160 & Yamaha XMAX 250 sedia beraksi!");

// Senarai Port Ride Abang Din
const portRide = [
    { nama: "Genting Highlands", lat: "3.4241", lon: "101.7915" },
    { nama: "Fraser's Hill", lat: "3.7141", lon: "101.7397" },
    { nama: "Betong, Thailand", lat: "5.7741", lon: "101.0367" }
];

async function dapatkanCuacaWeb() {
    const weatherBox = document.getElementById('weather-box');
    weatherBox.innerHTML = ''; // Clear teks asal

    for (let port of portRide) {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${port.lat}&longitude=${port.lon}&current=weather_code&timezone=Asia/Kuala_Lumpur`;
        
        try {
            const respon = await fetch(url);
            const data = await respon.json();
            const code = data.current.weather_code;

            let statusTxt = "";
            let classColor = "";

            if ([0, 1, 2, 3].includes(code)) {
                statusTxt = "Cerah / Berawan ☀️";
                classColor = "status-clear";
            } else if ([45, 48, 51, 53, 55, 61, 63, 65, 95, 96, 99].includes(code)) {
                statusTxt = "Hujan / Ribut 🌧️⚠️";
                classColor = "status-rain";
            } else {
                statusTxt = "Mendung ☁️";
                classColor = "status-cloudy";
            }

            // Masukkan kad cuaca ke dalam HTML website
            weatherBox.innerHTML += `
                <div class="weather-card">
                    <span class="weather-name">${port.nama}</span>
                    <span class="weather-status ${classColor}">${statusTxt}</span>
                </div>
            `;

        } catch (error) {
            console.error("Gagal ambil cuaca:", error);
        }
    }
}

// Jalankan fungsi cuaca sebaik sahaja website siap dibuka
document.addEventListener('DOMContentLoaded', dapatkanCuacaWeb);