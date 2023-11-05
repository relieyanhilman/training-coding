//program untuk mengembalikan angka yang pertama kali muncul untuk kedua kalinya

//input: array=[2,5,1,2,3,5,1,2,4]
//output : return 2

//input: [2,1,1,2,3,5,1,2,4]
//output: return 1

function recurringChar(arr){
    //dilooping dari awal array tersebut dan akan selalu dicek ke hashMap
    //apakah sudah ada sebelumnya angka tersebut. Kalo tidak, maka akan ditambahkan
    //kalo sudah, maka akan return angka tersebut
    let hashMap = {};

    for (let i = 0; i< arr.length; i++){
        if (hashMap[arr[i]]){
            return arr[i];
        }else{
            hashMap[arr[i]] = true;
        }
    }

    return undefined

    //namun jika sampai akhir loop tidak ditemukan angka yang keluar 2 kali
    //maka akan return false
}

console.log(recurringChar([2,3,4,5]))