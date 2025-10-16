let kilo = Number(prompt("kilonuzu giriniz: "));

let boy = Number(prompt("boyunuzu giriniz:"));

let sonuc = kilo / boy ** 2;

if (sonuc >= 18.5 && sonuc <= 24.9) {
  alert(`İndex değeri:${sonuc.toFixed(2)} Sağlıklı`);
} else if (sonuc >= 25 && sonuc <= 29.9) {
  alert(`İndex değeri:${sonuc.toFixed(2)} Şişman`);
} else if (sonuc >= 30 && sonuc <= 39.9) {
  alert(`İndex değeri:${sonuc.toFixed(2)} Obez`);
} else sonuc >= 40;
{
  alert(`İndex değeri:${sonuc.toFixed(2)} Aşırı Obez`);
}
