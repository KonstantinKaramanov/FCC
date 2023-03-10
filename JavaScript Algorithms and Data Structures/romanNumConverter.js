function convertToRoman(num) {
    var roman = "";
    var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var arabicNumeral = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    for (var i = 0; i < arabicNumeral.length; i++) {
        while (num >= arabicNumeral[i]) {
            roman += romanNumeral[i];
            num -= arabicNumeral[i];
        }
    }
    return roman;
}


convertToRoman(36);