// PASSWORD VALIDATOR

function isValidPassword ( password, username) {
    if ( password.length < 8 ) {
        return false;
    }
    if (password.indexOf(' ') !== -1) {
        return false;
    }
    if (password.indexOf(username) !== -1) {
        return false;
    }
    return true;
}

// THE ABOVE FUNCTION CAN ALSO BE WRITTEN AS:-

function isValid(username, password) {
  if (
    password.length < 8 ||
    password.indexOf(" ") !== -1 ||
    password.indexOf(username) !== -1
  ) {
    return false;
  }
  return true;
}

//  Average

function avg(arr) { 

    let total = 0;
    // loop over each num
    for (let num of arr) {
        // add them together
        total += num;
    }
    // divide by number of sums
    return total / arr.length;
   
}