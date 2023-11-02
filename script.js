function isValidPalindrome(s) {
    // write code here

    //kasus khusus, jika s hanyalah empty string, tetaplah palindrome
    if (s == ""){
        return true;
    }
    //secara bruteforce mengecek menggunakan sistem 2 pointer

    //Namun pertama, string perlu dibersihkan dari setiap non-alphanumeric character
    //menggunakan regex /A-Za-z/ untuk memilah hanya yang termasuk alphanumeric char
    //kemudian menggunakan join untuk mengubah dari bentuk array ke string
    //kemudian menggunakan convert to lower case.
    const cleanedVer = s.match(/[A-Za-z0-9]/g).join('').toLowerCase();
    
    //dimana akan menggunakan idxFirst sebagai penunjuk di pointer indeks awal dan
    //idxLast sebagai penunjuk di pointer indeks akhir
    let idxFirst = 0;
    let idxLast = cleanedVer.length - 1

    //kemudian akan dilakukan looping dari indeks awal hingga di floor(jumlah indeks/2)
    for (let i = 0; i< Math.floor(cleanedVer.length/2); i++){
        if (cleanedVer[idxFirst] !== cleanedVer[idxLast]){
            return false
        }
        idxFirst++
        idxLast--
    }

    //jika sampai tahap tersebut, hasilnya sama, maka disebut palindrome. Jika hasilnya tidak sama
    //maka tidak dapat disebut palindrome
    return true

}

console.log(isValidPalindrome('race0car'))