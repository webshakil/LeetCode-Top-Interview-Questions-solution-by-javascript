const isPalindrome = (x)=> {
    const arr = Array.from(String(x));
        
    let first = 0, last = arr.length - 1;
    while (first < arr.length - 1) {
        if (arr[first] !== arr[last]) {
            return false;
        }
        first++;
        last--;
    }
    return true;
};

console.log(isPalindrome(346));