const stringLength = (string) => {
    if (string.length >= 1 && string.length <= 10) {
      return string.length;
    }
  
    return 'Invalid string!';
  };
  
  const reverseString = (string) => {
    const reversed = string.split('').reverse().join('');
    return reversed;
  };

  const calculator = {
    add: function(num1, num2) {
      return num1 + num2;
    },
  
    subtract: function(num1, num2) {
      return num1 - num2;
    },
  
    divide: function(num1, num2) {
      if (num2 === 0) {
        throw new Error('Cannot divide by zero');
      }
      return num1 / num2;
    },
  
    multiply: function(num1, num2) {
      return num1 * num2;
    }
  };
  
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  export {
    stringLength, reverseString, calculator, capitalize};
  