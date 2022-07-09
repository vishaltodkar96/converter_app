let convertbuttonval = document.getElementById("btnconvert");

let swapbuttonval = document.getElementById("btnswap");

convertbuttonval.addEventListener("click", () => {
 
  let select1value = document.getElementById("select1").value;
  let select2value = document.getElementById("select2").value;
  let inputvalue = document.getElementById("inputid").value;


  let checkInput = function (num) {
    let str  = num.toString();
    let isBinary = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "0" || str[i] == "1") {
            isBinary = true;
        } else {
            isBinary = false;
            return isBinary;
        }
    }
    return isBinary;
  }
  

  if (inputvalue == "") {
    let error = document.getElementById("span-error");
    error.innerHTML = "Please enter valid input *";
    error.style.color = "red";
    error.style.fontWeight="500";
  } else {
    let error = document.getElementById("span-error");
    error.innerHTML = "";

    let answer = document.getElementById("ans");

    if (select1value === "Decimal" && select2value === "Binary") {
      let decimalTobinary = Number(inputvalue).toString(2);
      answer.innerHTML = decimalTobinary;

    } else if (select1value === "Decimal" && select2value === "Hexadecimal") {
      let decimalTOhexa = Number(inputvalue).toString(16).toUpperCase();
      answer.innerHTML = decimalTOhexa;

    } else if (select1value === "Decimal" && select2value === "Octal") {
      let decimalTooctal = Number(inputvalue).toString(8);
      answer.innerHTML = decimalTooctal;

    } else if (select1value === "Binary" && select2value === "Decimal") {
        if (checkInput(inputvalue)) {
            var binaryTOdecimal = parseInt(inputvalue, 2);
            answer.innerHTML = binaryTOdecimal;
        } else {
            answer.innerHTML = "Enter valid input *";
        }      

    } else if (select1value === "Binary" && select2value === "Hexadecimal") {
        if (checkInput(inputvalue)) {
            var binaryTOdecimal = parseInt(inputvalue, 2);
            answer.innerHTML = binaryTOdecimal;
        } else {
            answer.innerHTML = "Enter valid input *";
        }

    } else if (select1value === "Binary" && select2value === "Octal") {
        if (checkInput(inputvalue)) {
            var binaryTOdecimal = parseInt(inputvalue, 2);
            answer.innerHTML = binaryTOdecimal;
        } else {
            answer.innerHTML = "Enter valid input *";
        }

    } else if (select1value === "Hexadecimal" && select2value === "Binary") {
      let hexatobinar = parseInt(inputvalue, 16).toString(2);
      answer.innerHTML = hexatobinar;

    } else if (select1value === "Hexadecimal" && select2value === "Octal") {
      let hexaToocta = parseInt(inputvalue, 16).toString(8);
      answer.innerHTML = hexaToocta;

    } else if (select1value === "Hexadecimal" && select2value === "Decimal") {
      let hexatoDecimal = parseInt(inputvalue, 16).toString(10);
      answer.innerHTML = hexatoDecimal;

    } else if (select1value === "Octal" && select2value === "Binary") {
      let octalTObinary = parseInt(inputvalue, 8).toString(2);
      answer.innerHTML = octalTObinary;

    } else if (select1value === "Octal" && select2value === "Decimal") {
      let octalTodecimal = parseInt(inputvalue, 8).toString(10);
      answer.innerHTML = octalTodecimal;

    } else if (select1value === "Octal" && select2value === "Hexadecimal") {
      let octaltohexa = parseInt(inputvalue, 8).toString(16);
      answer.innerHTML = octaltohexa;

    } else if (select1value === select2value) {
      answer.innerHTML = inputvalue;
    }
    
  }
});


swapbuttonval.addEventListener("click", () => {
  "use strict";
  let select1value = document.getElementById("select1");
  let select2value = document.getElementById("select2");

  let temp = select1value.value;
  select1value.value = select2value.value;
  select2value.value = temp;
  let inputvalue = document.getElementById("inputid");
  inputvalue.value = "";

  let answer = document.getElementById("ans");
  answer.innerHTML = "";
});

