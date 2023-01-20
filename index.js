const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const special = "!()-.?[]_#$&@"

// Selectors 
const passBox = document.getElementById("input-text")
passBox.innerText = "Hello"
console.log(passBox)
const upperSet = document.getElementById('upper')
const lowerSet = document.getElementById('lower')
const numberSet = document.getElementById('numbers')
const specialSet = document.getElementById('symbols')


const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]

}
// let password = ""
const generatePassword = (password = "") => {
    if(upperSet.checked) {
        password += getRandomData(upperCase)
    }
    if(lowerSet.checked) {
        password += getRandomData(lowerCase)
    }
    if(numberSet.checked) {
        password += getRandomData(number)
    }
    if(specialSet.checked) {
        password += getRandomData(special)
    }
    if(password.length < 10)
    {
        return generatePassword(password)
    }
    let x = document.getElementById('input-text')
    x.innerText = cutting(password,10)
    // console.log(cutting(password,10))

}
function fun1(){

    generatePassword()
}
function cutting(str, num){
    if(str.length > num)
    {
        let sst = str.substring(0, num)
        return sst;
    } else {
        return str;
    }
}
