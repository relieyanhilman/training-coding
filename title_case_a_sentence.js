function titleCase(str) {
    //identifikasi kapan waktu untuk capitablize --> saat kata pertama
    let isItForCapitalize = true;
    let regexCaptAlpha = /[A-Z]/
    let regexAlpha = /[a-z]/
    let resultChangedChar;
    let newChar = []
  
    for(let i =0; i< str.length; i++){
        if(isItForCapitalize){
            if(regexAlpha.test(str[i])){
                resultChangedChar = str[i].toUpperCase()
                newChar.push(resultChangedChar)
            }else{
                newChar.push(str[i])
            }
        isItForCapitalize = false
        }else{
            if(str[i] == ' '){
                isItForCapitalize = true;
                newChar.push(str[i])
            }else if (regexCaptAlpha.test(str[i])){
                resultChangedChar = str[i].toLowerCase()
                newChar.push(resultChangedChar)
            }else{
                newChar.push(str[i])
            }
        }
  
    }
    return newChar.join("");
  }
  
  console.log(titleCase("I'm a little tea pot"));