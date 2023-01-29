function telephoneCheck(number) {
    let telephoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return telephoneRegex.test(number);
  }
  
  telephoneCheck("555-555-5555");