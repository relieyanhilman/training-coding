function mutation(arr) {
    //mencocokkan tiap string ke string lainnya bisa menggunakan hashmap

    let hashMap = {};
    //string pertama diubah jadi array lalu dilooping dan dimasukkan ke dalam hashmap
    for (let i =0; i< arr[0].length; i++){
        hashMap[(arr[0][i]).toLowerCase()] = true;
    }

    //string kedua akan diloop dan diperiksa ke masing2 hashmap terkait ada tidaknya, jika sampai index terakhir, char itu tersedia, maka return true. sebaliknya return false. 
    for (let i = 0; i< arr[1].length; i++){
        if(!hashMap[(arr[1][i]).toLowerCase()]){
            return false
        }
    }
    return true;
  }
  
  console.log(mutation(["hello", "Hello"]));