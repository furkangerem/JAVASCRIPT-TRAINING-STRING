let firstName = "Muhammed Furkan";
let lastName = "GEREM";
console.log(firstName, lastName);

// let quotesDif = "Muhammed \"Furkan\" GEREM"; // Bkz: \"yourString\"
// let quotesDif = 'Muhammed \"Furkan\" GEREM';

var exampleText = "Merhaba ben Muhammed Furkan GEREM";
console.log(exampleText.indexOf("Furkan"));
console.log(exampleText.lastIndexOf("Furkan"));
//* "indexof" ile "lastIndexOf" komutları aynı işlevi gerçekleştirir. Kelimenin ilk bulunduğu adresi işaret ederler.
//* Aranan değerler bulunamazsa "-1" değeri döndürür.

console.log(exampleText.substring(11, 23)); //* İki değer arasında kalan stringi döndürür.
console.log(exampleText.substring(11)); //* İkinci parametre olmadığı için sadece başlangıç değerine kadar keser.
//! "exampleText" parametresinin 0. indeksini tırnak işareti (") olarak kabul eder. Ayrıca boşluklar da birer karakterdir.

console.log(exampleText.substr(11, 12)); //* 11. değerden başlayıp toplam 12 adım ilerler ve arada kalan değeri döndürür.
//* İlk parametre nereden başlayacağını, ikinci parametre ise kaç adım ilerleyeceğini belirtir.

console.log(exampleText.replace("Furkan", "MFG")); //* Verilen ilk değerin yerine ikinci değeri atar.

console.log(exampleText.split(" ")); //* String ifadeleri nesne olarak döndürür.
console.log(exampleText.split("")); //* String ifadeleri nesne olarak döndürür.
//! " " ile "" arasında fark vardır. İki tırnak arasındaki değere göre metni nesnelere böler.
