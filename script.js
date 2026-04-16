let url = "https://www.testsayfa.com";
let kursAdi = "Komple Web Geliştirme Öğrenme Kursu";
let urlUzunlugu = url.length
let kursAdiKelimeSayisi = kursAdi.split(" ").length
let httpsSorgu = url.startsWith("https")
let kelimeSorgu = kursAdi.indexOf ("Öğrenme");

function linkeCevirme (){
    kursAdi = kursAdi.toLowerCase();
    kursAdi = kursAdi.replaceAll(" ","-").replaceAll("ö","o").replaceAll("ğ" , "g").replaceAll("ş","s");
    // Template Strings 
    // test = `Bu sitenin web adresi ${url} dur.`
    let link = `${url}/${kursAdi}`
    console.log(link)
}





console.log("Kursun Adresi: " + url)
console.log("Kursun Adi: " + kursAdi)
console.log("url uzunlugu " + urlUzunlugu + " karakter")
console.log("Kurs adindaki kelime sayisi: " + kursAdiKelimeSayisi)
console.log("Kurs adresi güvenli mi? " + httpsSorgu)
console.log("Kurs adresi icinde \"Öğrenme\" kelimesi geciyorsa kacinci siradan basliyor?  " + kelimeSorgu)
linkeCevirme ()


// console.log(link)







let numara = 10
let sonuc

sonuc=isNaN("10");


console.log(numara);
console.log(sonuc);