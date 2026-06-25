import re
import random
from datetime import datetime

# 1. Senarai mood rider yang akan dipilih secara rawak oleh Python
senarai_mood = [
    "Menggigil nak pulas throttle (Lapar Jalan) 🏍️",
    "Santai ngopi sambil cuci jentera ☕",
    "Tengah belek peta cari port konvoi baru 🗺️",
    "Jiwa kembara, tayar dah asyik mintak jalan jauh 🛣️",
    "Mood: Brotherhood forever. Ride hard, ride safe! 🏁"
]

# 2. Pilih satu mood secara rawak
mood_baru = random.choice(senarai_mood)

# 3. Buka dan baca fail index.html
with open("index.html", "r", encoding="utf-8") as f:
    html_content = f.read()

# 4. Gunakan Regex untuk cari id="mood-teks" dan tukar isinya
pattern = r'(<span id="mood-teks">)(.*?)(</span>)'
html_baru = re.sub(pattern, f'\\1{mood_baru}\\3', html_content)

# 5. Simpan semula fail index.html dengan mood yang baru
with open("index.html", "w", encoding="utf-8") as f:
    f.write(html_baru)

print(f"🤖 Sukses! Mood berjaya ditukar automatik kepada: {mood_baru}")