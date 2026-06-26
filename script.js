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

// Senarai Port Ride Pilihan Abang Din
const portRide = [
    { nama: "Genting Highlands", lat: "3.4241", lon: "101.7915" },
    { nama: "Fraser's Hill", lat: "3.7141", lon: "101.7397" },
    { nama: "Betong, Thailand", lat: "5.7741", lon: "101.0367" }
];

async function dapatkanCuacaWeb() {
    const weatherBox = document.getElementById('weather-box');
    if (!weatherBox) return; // Keselamatan jika element tak jumpa

    weatherBox.innerHTML = ''; // Kosongkan teks 'sedang mengecas'

    for (let port of portRide) {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${port.lat}&longitude=${port.lon}&current=weather_code&timezone=Asia/Kuala_Lumpur`;
        
        try {
            const respon = await fetch(url);
            const data = await respon.json();
            const code = data.current.weather_code;

            let statusTxt = "";
            let emoji = "";

            if ([0, 1, 2, 3].includes(code)) {
                statusTxt = "Cerah / Berawan";
                emoji = "☀️";
            } else if ([45, 48].includes(code)) {
                statusTxt = "Kabut Tebal";
                emoji = "🌫️";
            } else if ([51, 53, 55, 61, 63, 65].includes(code)) {
                statusTxt = "Hujan";
                emoji = "🌧️";
            } else if ([95, 96, 99].includes(code)) {
                statusTxt = "Ribut Petir";
                emoji = "⛈️⚠️";
            } else {
                statusTxt = "Mendung";
                emoji = "☁️";
            }

            // Masukkan barisan teks bertema retro ke dalam kotak
            weatherBox.innerHTML += `
                <div style="padding: 8px 0; border-bottom: 1px dashed #333; text-align: left; font-size: 0.9rem; color: #ffffff;">
                    📍 <strong>${port.nama}</strong>: <span style="color: #ff5500;">${statusTxt}</span> ${emoji}
                </div>
            `;

        } catch (error) {
            console.error("Gagal ambil cuaca:", error);
            weatherBox.innerHTML += `<div style="color: red; font-size: 0.8rem;">❌ Gagal memuatkan cuaca ${port.nama}</div>`;
        }
    }
}

// Pastikan skrip jalan selepas halaman web sedia sepenuhnya
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', dapatkanCuacaWeb);
} else {
    dapatkanCuacaWeb();
}