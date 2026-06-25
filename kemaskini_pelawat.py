import re
import requests

# 1. Alamat API percuma untuk menjejak pelawat khusus untuk ID abang
# Tukar 'braderdin_garage_2026' kepada apa-apa nama unik yang abang suka
id_unik_abang = "braderdin_garage_2026"
url_api = f"https://api.moe-counter.ru/hit/{id_unik_abang}/view.json"

try:
    # 2. Ambil data jumlah pelawat dari API
    respon = requests.get(url_api, timeout=10)
    data = respon.json()
    jumlah_pelawat = data.get("value", 0)
    
    # Tukar angka jadi format teks yang cantik (contoh: 0025, 0142)
    pelawat_format = f"{jumlah_pelawat:04d}"
    
    # 3. Buka dan baca fail index.html
    with open("index.html", "r", encoding="utf-8") as f:
        html_content = f.read()

    # 4. Gunakan Regex untuk cari id="visitor-count" dan tukar isinya
    pattern = r'(<span id="visitor-count">)(.*?)(</span>)'
    html_baru = re.sub(pattern, f'\\1{pelawat_format}\\3', html_content)

    # 5. Simpan semula fail index.html
    with open("index.html", "w", encoding="utf-8") as f:
        f.write(html_baru)

    print(f"🤖 Sukses! Kaunter pelawat dikemas kini ke: {pelawat_format}")

except Exception as e:
    print(f"❌ Ada ralat semasa menarik data pelawat: {e}")