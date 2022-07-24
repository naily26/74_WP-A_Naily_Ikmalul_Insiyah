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

const cari = nilai_siswa.find(item => item.nama === "kai") 

const cari2 = nilai_siswa.filter(item => item.nilai == 100 || item.nilai >= 90) 

const urutkan = nilai_siswa.sort((a, b) => a.nilai - b.nilai)

const nama = nilai_siswa.map(item => item.nama)

const sambung = nama.join(', ')

console.log(sambung)
