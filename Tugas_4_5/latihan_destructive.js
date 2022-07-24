// Lartihan

const array = ["A", "B", "C"]
const [pertama, kedua] = array
console.log(pertama, kedua) 
const [,,ketiga] = array
console.log(ketiga) // harusnya menampilkan anggur

const object = {
    nama: "Oh Sehun",
    usia: 30
}

const add = 1
const {nama, usia} = object
const cariUsiaKorea = (usia, add) => {
    const total = usia + add
    return total
}

console.log(`usia korea dari ${nama} adalah ${cariUsiaKorea(usia, add)}`)



