let caps = "Hello"
function capilizeAndLowercase(){
    return caps.toUpperCase() + caps.toLowerCase()
}
console.log(capilizeAndLowercase(caps))

var findMiddleIndex = "Hello World"
function halfLength(){
    return Math.floor(findMiddleIndex.length / 2)
}

console.log(halfLength())

var returnFirstHalf = "Hello World"
function firstHalf(){
    var half = returnFirstHalf.slice(0, 6)
    return half
}
console.log(firstHalf())

var split = "hello world"
function splitting(){
    var firstHalf = split.slice(0, 5)
    var secondHalf = split.slice(6, 11)
    var firstHalfCaps = firstHalf.toUpperCase()
    return firstHalfCaps + " " + secondHalf
}
console.log(splitting())

var capitalize = "hey friends! practice practice practice!"
function firstLetter(str){
    var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
    return splitStr.join(' ')
}
console.log(firstLetter(capitalize))




