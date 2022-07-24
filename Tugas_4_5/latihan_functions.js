const nilai_siswa = [
    {
        nama: "Oh Sehun",
        nilai: 100
    },
    {
        nama: "Park Chanyeol",
        nilai: 90
    },
    {
        nama: "Doh Kyungsoo",
        nilai: 80
    },
    {
        nama: "kai",
        nilai: 75
    }
]

// function
const nilaiTerkecil = () => {
    return nilai_siswa.sort((a, b) => a.nilai - b.nilai)[0]
}
const nilaiTebesar = () => {
    return nilai_siswa.sort((a, b) => b.nilai - a.nilai)[0]
}
function cariNilai() {
    return nilai_siswa.map((item) => item.nilai)
}
function cariNama() {
    return nilai_siswa.map((item) => item.nama)
}

console.log(nilaiTebesar())
console.log(nilaiTerkecil())
console.log(cariNama());
console.log(cariNilai());

