// Assignment Code
var generateBtn = document.querySelector('#generate')

// Write password to the #password input
function writePassword() {
	var password = generatePassword()
	var passwordText = document.querySelector('#password')

	// If a blank string was returned from generatePassword(), there was an error in the process
	if (password !== '') {
		passwordText.value = password
	}
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)

// Initialize characters lists
const lowercase = 'abcdefghijklmnopqrstuvwxyz'
const uppercase = lowercase.toUpperCase()
const numeric = '1234567890'
const special = '!@#$%^&*()-_=+[{]}\\|`~:;"\',<.>/?'
function generatePassword() {
	var possibleCharacters = ''

	// Ask for length
	var passwordLength = prompt(
		'How long would you like the password to be?\n\tMust be at least 8 characters and less than 128.'
	)
	// Validate length
	var passwordLengthNum = parseInt(passwordLength)
	if (isNaN(passwordLengthNum) || passwordLengthNum < 8 || passwordLengthNum > 128) {
		alert(`You entered "${passwordLength}" but this value is not allowed. Please start over.`)
		return ''
	}

	// Ask for lowercase
	var haveLowercase = confirm('Would you like lowercase characters in your password?')
	if (haveLowercase) {
		possibleCharacters += lowercase
	}

	// Ask for uppercase
	var haveUppercase = confirm('Would you like uppercase characters in your password?')
	if (haveUppercase) {
		possibleCharacters += uppercase
	}

	// Ask for numeric
	var haveNumeric = confirm('Would you like numbers in your password?')
	if (haveNumeric) {
		possibleCharacters += numeric
	}

	// Ask for special characters
	var haveSpecialChars = confirm('Would you like special characters in your password?')
	if (haveSpecialChars) {
		possibleCharacters += special
	}

	// Validate at least one of the above were chosen
	if (possibleCharacters.length === 0) {
		alert('Out of the 4 possible character sets, you need to choose at least 1. Please start over.')
		return ''
	}

	// Create the password
	var passwordCreated = ''
	for (var i = 0; i < passwordLengthNum; i++) {
		// Get random char from possible list
		var randomChar = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]
		// Append randomChar to password so far
		passwordCreated += randomChar
	}
	return passwordCreated
}
