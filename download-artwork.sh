#!/bin/bash
set -euo pipefail

BASE="https://img1.wsimg.com/isteam/ip/e89ba1e5-6428-49bc-b08e-ff1b96a19ce0"
ISTEAM="https://isteam.wsimg.com/ip/e89ba1e5-6428-49bc-b08e-ff1b96a19ce0"
OUT="public/artwork"
SUFFIX="/:/rs=w:1800"

mkdir -p "$OUT/portraits" "$OUT/family" "$OUT/animals" "$OUT/in-progress" "$OUT/home" "$OUT/about"

fetch() {
  local url="$1" dest="$2"
  echo "-> $dest"
  curl -sL "$url$SUFFIX" -o "$dest"
}

# Home / hero
fetch "$BASE/IMG_4816.jpeg" "$OUT/home/hero.jpg"

# About / welcome
fetch "$BASE/Mind%20Pond.jpg" "$OUT/about/mind-float.jpg"
fetch "$BASE/IMG_0253.jpeg" "$OUT/about/ina-portrait.jpg"

# Portrait Gallery
fetch "$ISTEAM/INA%20SELF%20PORTRAIT_1.JPG" "$OUT/portraits/self-portrait.jpg"
fetch "$BASE/IMG_0045.jpeg" "$OUT/portraits/img-0045.jpg"
fetch "$ISTEAM/Adolph-copy.jpg" "$OUT/portraits/adolph.jpg"
fetch "$BASE/photG%26A-copy.jpeg" "$OUT/portraits/g-and-a.jpg"
fetch "$BASE/Bella-copy.jpeg" "$OUT/portraits/bella.jpg"
fetch "$BASE/marcia-copy.jpeg" "$OUT/portraits/marcia.jpg"
fetch "$BASE/bakery%20copy.jpeg" "$OUT/portraits/bakery.jpg"
fetch "$BASE/mary-and-mikey-copy.jpeg" "$OUT/portraits/mary-and-mikey.jpg"

# Family Portraits
fetch "$BASE/IMG_4819-91ebb2b.jpeg" "$OUT/family/schachtel-bakery.jpg"
fetch "$BASE/blob.png" "$OUT/family/schachtel-2.jpg"
fetch "$BASE/blob-1010bdb.png" "$OUT/family/schachtel-dinner-1932.jpg"

# Animals We Love
fetch "$BASE/IMG_7671.jpeg" "$OUT/animals/img-7671.jpg"
fetch "$BASE/IMG_0249.jpeg" "$OUT/animals/img-0249.jpg"
fetch "$BASE/IMG_0458.jpeg" "$OUT/animals/img-0458.jpg"
fetch "$BASE/IMG_0556.jpeg" "$OUT/animals/img-0556.jpg"

# In Progress
fetch "$BASE/blob-73e09ab.png" "$OUT/in-progress/blob-73e09ab.jpg"
fetch "$BASE/IMG_2819.jpeg" "$OUT/in-progress/img-2819.jpg"
fetch "$BASE/IMG_9278-71ff9e2.jpeg" "$OUT/in-progress/img-9278.jpg"
fetch "$BASE/IMG_6035.jpeg" "$OUT/in-progress/img-6035.jpg"
fetch "$BASE/IMG_6228.jpeg" "$OUT/in-progress/img-6228.jpg"
fetch "$BASE/IMG_6230.jpeg" "$OUT/in-progress/img-6230.jpg"
fetch "$BASE/IMG_6229.jpeg" "$OUT/in-progress/img-6229.jpg"
fetch "$BASE/IMG_6245.jpeg" "$OUT/in-progress/img-6245.jpg"
fetch "$BASE/IMG_6290.jpeg" "$OUT/in-progress/img-6290.jpg"
fetch "$BASE/IMG_6812.jpeg" "$OUT/in-progress/img-6812.jpg"
fetch "$BASE/IMG_6886.jpeg" "$OUT/in-progress/img-6886.jpg"
fetch "$BASE/IMG_7020.jpeg" "$OUT/in-progress/img-7020.jpg"
fetch "$BASE/IMG_7414.jpeg" "$OUT/in-progress/img-7414.jpg"
fetch "$BASE/IMG_7537.jpeg" "$OUT/in-progress/img-7537.jpg"
fetch "$BASE/IMG_7539.jpeg" "$OUT/in-progress/img-7539.jpg"
fetch "$BASE/IMG_3676.jpeg" "$OUT/in-progress/img-3676.jpg"

echo "Done."
