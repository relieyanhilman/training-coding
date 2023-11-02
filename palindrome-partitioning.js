function palindrome(s){
    let lastIdx = s.length - 1
    for (let i = 0; i< Math.floor(s.length/2); i++){
        if (s[i] == s[lastIdx]){
            lastIdx--
            continue
        }else{
            return false
        }
    }
    return true
}

console.log(palindrome("acca"))