console.log('jjjhh!')
var h1Element = document.querySelector('h1')
var inputElement = document.querySelector('input[type = "text"]')
inputElement.oninput = function(e) {
  console.log(e.target.value) ; 
}