// Latihan Switch

const kode_sekolah = "sd"

let sekolah = "sekolah"

// good code ✅
switch (kode_sekolah) {
    case "sd":
        sekolah = "Sekolah Dasar";
        break;
    case "smp":
        sekolah = "Sekolah Menengah Pertama";
        break;
    case "sma":
        sekolah = "Sekolah Menengah Atas";
        break;
    default: 
        sekolah = "tidak ada tingkat sekolah tersebut";
}

console.log(sekolah)

