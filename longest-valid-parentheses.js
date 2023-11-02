var longestValidParentheses = function(s) {
    //coba menggunakan konsep stack
    let stack = [-1];
    let max = 0;
    let len;
    for (let i = 0; i< s.length; i++){
        if (s[i] == '('){
            stack.push(i)
        }else{
            stack.pop();
            if(stack.length == 0){
                stack.push(i)
            }else{
                len = i - (stack[stack.length - 1])
                max = Math.max(len, max)
            }
        }
    }
    return max;
};

console.log(longestValidParentheses("(())"))