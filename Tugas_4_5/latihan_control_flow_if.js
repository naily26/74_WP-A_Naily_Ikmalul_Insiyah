// Latihan IF

const age = 30

if(age <= 5) {
    console.log("Usia balita")
} else if (age <= 17 && age > 5) {
    console.log("Usia anak-anak")
} else if (age <= 24 && age > 17) {
    console.log("Usia remaja")
} else if (age <= 50 && age > 24) {
    console.log("Usia dewasa")
} else {
    console.log("Usia Tua")
}