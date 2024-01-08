const link = "https://coderbyte.com/editor/Codeland%20Username%20Validation:JavaScript";

function CodelandUsernameValidation(str) {
    // Step 1: Check the length
    if (str.length < 4 || str.length > 25) {
      return false;
    }
  
    // Step 2: Check the first character
    const firstChar = str[0];
    if (!isLetter(firstChar)) {
      return false;
    }
  
    // Step 3: Check the allowed characters
    for (let i = 0; i < str.length; i++) {
      const currentChar = str[i];
      if (!isLetter(currentChar) && !isNumber(currentChar) && currentChar !== '_') {
        return false;
      }
    }
  
    // Step 4: Check the last character
    const lastChar = str[str.length - 1];
    if (lastChar === '_') {
      return false;
    }
  
    // If all checks pass, return true
    return true;
  }
  
  // Helper functions to check if a character is a letter or a number
  function isLetter(char) {
    return /^[a-zA-Z]$/.test(char);
  }
  
  function isNumber(char) {
    return /^[0-9]$/.test(char);
  }

  console.log(CodelandUsernameValidation("aa_")); // Output: false
  console.log(CodelandUsernameValidation("u__hello_world123")); // Output: true
