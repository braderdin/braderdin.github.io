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
