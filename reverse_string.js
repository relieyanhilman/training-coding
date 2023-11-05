//buat reverse string
//input : string
//output: string
//contoh persoalan
//string input: 'Hi My name is Relieyan"
//expected output: "nayeileR si eman Ym iH"

function reverse(str){
    //buat array penampung baru
    let newArr = []

    //for loop dari belakang
    for (let i = str.length-1; i>=0; i--){
        //push tiap item ke array baru
        newArr.push(str[i])
    }
    return newArr.join('');
}

console.log(reverse("Hi My name is Relieyan"))