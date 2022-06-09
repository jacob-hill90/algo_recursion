factorial = function(n) {
    if (n === 0){
        return 1
    }else
        return n * factorial(n-1)
}

factorial(11)

// Still working on solution for palindrome
palindrome = function(str) {
    console.log(str.length, 'string length')
    let start = 0
    let end = str.length - 1
    
    if(str.length === 0 || str.length === 1){
        console.log('HERE')
        return true
    }
    if(str[start] === str[end]){
        console.log(str.slice(start+1,end))
        palindrome(str.slice(start+1,end))
    }
    else {return false}
};

console.log(palindrome('kayak'))

// exports.bottles = function() {
// convert to JS
//     def bottle_song(num):
// 	if num==2:
// 		print(f"{num} bottles of beer on the wall, {num} bottles of beer. Take one down and pass it around, {num-1} bottle of beer on the wall.")
// 		bottle_song(num-1)
// 	if num ==1:
// 		print(f"{num} bottle of beer on the wall, {num} bottle of beer. Take one down and pass it around, no more bottles of beer on the wall. No more bottles of beer on the wall. No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")

// 	if num > 2:
// 		print(f"{num} bottles of beer on the wall, {num} bottles of beer. Take one down and pass it around, {num-1} bottles of beer on the wall.")
// 		bottle_song(num-1)

// print(bottle_song(10))
// };

romanNum = function(num) {
    let answer = ''
    let map = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    }
    
    if(num === 0){
        return answer
    }
    for(let key in map){
        if(num >= map[key]){
            answer += key
            num -= map[key]
            return answer + romanNum(num)
        }
    }
}

console.log(romanNum(127))
