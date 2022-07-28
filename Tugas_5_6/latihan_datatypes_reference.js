// Latihan
let siswa = ["Oh Sehun", "Park Chanyeol", "Doh Kyungsoo"] 
let referensi = siswa
referensi.splice(0, 2) 
console.log(siswa) 

let nama_siswa = ["Kim Junmyeon", "Kim MInseok", "Kim Jongdae", "Kim Jongin"]
let bukan_referensi = [...nama_siswa]
bukan_referensi.splice(0, 1) 
console.log(nama_siswa) 


// referensi berlaku juga untuk objek
let objek = {
    nama: "Oh Sehun",
    lahir: "20 April",
    usia: 30
}

let referensi_objek = objek
delete referensi_objek.usia
console.log(referensi_objek) 