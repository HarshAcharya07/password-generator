const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const special = "!()-.?[]_#$&@"

// Selectors 
const passBox = document.getElementById("input-text")
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
    if(password.length < 15)
    {
        return generatePassword(password)
    }
    let x = document.getElementById('input-text')
    x.value = cutting(password,15)

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

function myFunction() {
    // Get the text field
    var copyText = document.getElementById("input-text");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }
