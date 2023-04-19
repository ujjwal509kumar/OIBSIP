function convertTemp() {
    var input = document.getElementById("degree").value;
    var unit = document.getElementById("tempUnit").value;
    var output = document.getElementById("result");
    var tempresult, result, result1;
    if (unit == "F" && isNaN(input)!=true) {
      // convert Fahrenheit to Celsius
      tempresult = (input - 32) * 5 / 9;
      result = tempresult.toFixed(3);
      result1 = result.toString();
      result1 += " °C"
      output.value = result1;
    } else if (unit == "C" && isNaN(input)!=true) {
      // convert Celsius to Fahrenheit
      tempresult = input * 9 / 5 + 32;
      result = tempresult.toFixed(3);
      result1 = result.toString();
      result1 += " °F"
      output.value = result1;

    } else {
      // invalid unit
      var errormsg = "Please enter a valid unit in numbers";
      output.value = errormsg;
    }
  }
