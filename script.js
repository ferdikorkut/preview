// let toplam = 0;
// let ortalama = 0;
// let i = 0;

// let girilenNot = prompt("Lütfen bir not giriniz (çıkmak için q):");

// if (girilenNot == "q" || girilenNot == "Q" || girilenNot === null) {
//     console.log(`Not girişi sonlandırıldı. Toplam ${i} not girildi. Ortalama: ${ortalama}`);
// } else {
//     while (girilenNot != "q" && girilenNot != "Q" && girilenNot !== null) {
//         if (girilenNot.trim() == "") {
//             girilenNot = prompt("Lütfen geçerli bir not giriniz (0-100 arasında olmalı)(çıkmak için q).");
//             continue;
//         }
//         girilenNot = Number(girilenNot);

//         if (girilenNot > -1 && girilenNot < 101 ) {
//         i++;

//         toplam += girilenNot;
//         ortalama = toplam / i;

//         } else {

//         girilenNot = prompt("Lütfen geçerli bir not giriniz (0-100 arasında olmalı)(çıkmak için q).");
//         continue;
//         }

//         girilenNot = prompt("Lütfen bir not giriniz (çıkmak için q):");

//     }
// console.log(`Toplam ${i} not girildi. Ortalama: ${ortalama}`);
// }

// -----------------------------

// while (true) {
// let userName = prompt("Lütfen kullanıcı adınızı giriniz:");
// if (userName === null) break;
// let userPassword = prompt("Lütfen şifrenizi giriniz:");
// if (userPassword === null) break;

// for (let i = 0; i < 3; i++) {
//     if (userName.trim() === "" || userPassword.trim() === "") {
//         console.log(`Kullanıcı adı ve şifre boş bırakılamaz. Lütfen geçerli bilgiler giriniz.${2 - i} hakkınız kaldı.`);
//         if (i < 2) {
//             userName = prompt("Lütfen kullanıcı adınızı giriniz:");
//             userPassword = prompt("Lütfen şifrenizi giriniz:");
//         } else {
//             console.log("Giriş hakkınız kalmadı. Bloklandiniz.! Lütfen daha sonra tekrar deneyiniz.");
//         }
//         continue;
//     }
//     if (userName.toLowerCase() === "admin" && userPassword.toLowerCase() === "12345") {
//         console.log("Giriş başarılı! Hoş geldiniz, admin.");
//         let tekrar = prompt("Tekrar giriş yapmak ister misiniz? (e/h)");
//     if (tekrar === null || tekrar.toLowerCase() !== "e") break;
//     } else {
//         console.log(`Giriş başarısız! ${2 - i} hakkınız kaldı.`);
//         if (i < 2) {
//             userName = prompt("Lütfen kullanıcı adınızı giriniz:");
//             userPassword = prompt("Lütfen şifrenizi giriniz:");
//         } else {
//             console.log("Giriş hakkınız kalmadı. Bloklandiniz.! Lütfen daha sonra tekrar deneyiniz.");
//         }
//     }
// }
// break;
// }

// -----------------------------

// let toplamSesli = 0,
//     a = 0,
//     e = 0,
//     i = 0,
//     o = 0,
//     u = 0,
//     ü = 0,
//     ö = 0,
//     ı = 0;
// let metin = prompt("Lütfen bir metin giriniz:");
// // console.log(metin);
// if (metin === null) {
//     console.log("İşlem iptal edildi.");
// } else {
//     metin = metin.trim();
//     if (metin === "") {
//         console.log("Metin boş bırakılamaz.");
//     } else if (!isNaN(metin)) {
//         console.log("Metin bir sayı olamaz.");
//     } else {
//         metin = metin.toLowerCase();
//         for (let x = 0; x < metin.length; x++) {
//             if (
//                 metin[x] === "a" ||
//                 metin[x] === "e" ||
//                 metin[x] === "i" ||
//                 metin[x] === "o" ||
//                 metin[x] === "u" ||
//                 metin[x] === "ü" ||
//                 metin[x] === "ö" ||
//                 metin[x] === "ı"
//             ) {
//                 toplamSesli++;
//                 if (metin[x] === "a") {
//                     a += 1;
//                 }
//                 if (metin[x] === "e") {
//                     e += 1;
//                 }
//                 if (metin[x] === "i") {
//                     i += 1;
//                 }
//                 if (metin[x] === "o") {
//                     o += 1;
//                 }
//                 if (metin[x] === "u") {
//                     u += 1;
//                 }
//                 if (metin[x] === "ü") {
//                     ü += 1;
//                 }
//                 if (metin[x] === "ö") {
//                     ö += 1;
//                 }
//                 if (metin[x] === "ı") {
//                     ı += 1;
//                 }
//             }
//         }
//         if (toplamSesli === 0) {
//             console.log(metin);
//             console.log("Metinde hiç sesli harf bulunmamaktadır.");
//         } else {
//             console.log(metin);
//             console.log(
//                 `Toplam sesli harf sayısı: ${toplamSesli} /( a: ${a}, e: ${e}, i: ${i}, o: ${o}, u: ${u}, ü: ${ü}, ö: ${ö}, ı: ${ı})`,
//             );
//             console.log(``);
//         }
//     }
// }

// -----------------------------

// let girilenSayi;
// let ilkGirilenSayi;
// let girilenEnBuyukSayi;
// let i = 0;


// while (true) {
//     girilenSayi = prompt("Lütfen bir sayı giriniz:");
//     if (girilenSayi === null || girilenSayi.toLowerCase() === "q") break;
//     if (girilenSayi.trim() === "" || isNaN(girilenSayi)) {
//         console.log("Lütfen geçerli bir sayı giriniz.");
//         continue;
//     }
//     girilenSayi = Number(girilenSayi);

//     if (ilkGirilenSayi === undefined) {
//         ilkGirilenSayi = girilenSayi;
//         girilenEnBuyukSayi = girilenSayi;
//     }
//     if (girilenSayi > girilenEnBuyukSayi) {
//         girilenEnBuyukSayi = girilenSayi;
//     }
//     if (girilenSayi < ilkGirilenSayi) {
//         ilkGirilenSayi = girilenSayi;
//     }
//     console.log(girilenSayi);
//     i++;
// }

// if (ilkGirilenSayi === undefined) {
//     console.log("Hiç sayı girilmedi.");
// } else {
//     console.log(`Girilen en büyük sayı: ${girilenEnBuyukSayi}`);
//     console.log(`Girilen en küçük sayı: ${ilkGirilenSayi}`);
//     console.log(`Girilen sayı adedi: ${i}`);
// }

// console.log(girilenSayi);


// -----------------------------


function yasHesapla (dogumYili) {
let simdi = new Date().getFullYear();
return simdi - dogumYili;
}
console.log(yasHesapla(2000));



function emekliligekacYilkaldi (dogumYili, isim) {
let yas = yasHesapla(dogumYili);
let kalan_sene = 65 - yas;
if (kalan_sene > 0) {
console.log(`${isim} emekli olmanıza ${kalan_sene} yıl kaldı.`);
}
else {
console.log("zaten emekli oldunuz.");
}
}
emekliligekacYilkaldi(2000, "Ali");