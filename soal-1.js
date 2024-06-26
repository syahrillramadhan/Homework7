import PersegiPanjang from "./modules/persegi-panjang.js";
import Persegi from "./modules/persegi.js";

console.log("==========================");
const persegiPanjang = new PersegiPanjang(5, 2);
console.log(`Keliling persegi panjang: ${persegiPanjang.keliling()}`);
console.log(`Luas persegi panjang: ${persegiPanjang.luas()}`);
console.log("==========================");

const persegi = new Persegi(5);
console.log(`Keliling persegi: ${persegi.keliling()}`);
console.log(`Luas persegi: ${persegi.luas()}`);
console.log("==========================");
