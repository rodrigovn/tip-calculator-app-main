function validateBill(val,error,element){
    var validRegex = /^\d+(\.\d{1,2})?$/;
    if (val.match(validRegex)) {
      error.classList.remove("error-show");
      error.classList.add("error-hide");
      element.style.border = '1.5px solid green';
      return true;
    } else {
      error.classList.remove("error-hide");
      error.classList.add("error-show");
      element.style.border = '1.5px solid red';
      return false;
      }
}

function validateCustom(val,error,element){
    var validRegex = /(^100([.]0{1,2})?)$|(^\d{1,2}([.]\d{1,2})?)$/;
    if (val.match(validRegex) || val.length == 0) {
        error.classList.remove("error-show");
        error.classList.add("error-hide");
        element.style.border = '1.5px solid green';
        return true;
        } else {
            error.classList.remove("error-hide");
            error.classList.add("error-show");
            element.style.border = '1.5px solid red';
            return false;
        }
    }

function validateNumberPeople(val,error,element){
    var validRegex = /^[1-9]\d*$/;
    if (val.match(validRegex)) {
        error.classList.remove("error-show");
        error.classList.add("error-hide");
        element.style.border = '1.5px solid green';
        return true;
        
        } else {
            error.classList.remove("error-hide");
            error.classList.add("error-show");
            element.style.border = '1.5px solid red';
            return false;
        }
    }


function buttonListener(n){
    show(n);
}
function calculator(bill,percentage,people){
    tip_person = (bill*(percentage/100))/people;
    total_person = (bill/people) + tip_person;
    return [tip_person, total_person];
}

document.getElementById("input-bill").addEventListener('input', ()=>{
    show();
})

document.getElementById("input-custom").addEventListener('input', ()=>{
    show();
})

document.getElementById("input-people").addEventListener('input', ()=>{
    show();
})
function show(n){
    var input_bill = document.getElementById("input-bill");
    var input_bill_val = document.getElementById("input-bill").value;
    var error_bill = document.getElementById("invalid-bill-msg");
    var i1 = validateBill(input_bill_val,error_bill,input_bill);
    const custom = document.getElementById("input-custom");
    const custom_val = document.getElementById("input-custom").value;
    const error_custom = document.getElementById("invalid-custom-msg");
    const i2 = validateCustom(custom_val,error_custom,custom);
    const input_people = document.getElementById("input-people");
    const input_people_val = document.getElementById("input-people").value;
    const error_people = document.getElementById("invalid-people-msg");
    const i3 = validateNumberPeople(input_people_val,error_people,input_people);
    if(i1==true && i3==true){
        console.log("condition is validated")
        if(custom_val.length == 0 || custom_val == 0){
            console.log("custom_val is 0")
            var percentage = n;
        } else {
            var percentage = custom_val;
        }
        var values = calculator(input_bill_val,percentage,input_people_val);
        var tip_person = values[0];
        tip_person = tip_person.toFixed(2)
        var total_person  = values[1];
        total_person = total_person.toFixed(2)
    } else {
        var tip_person = 0;
        var total_person = 0;
    }
    document.querySelector("#tip-person").innerText ="$" + tip_person;
    document.querySelector("#total-person").innerText ="$" + total_person;
}
function reset() {
    document.querySelector("#tip-person").innerText = 0;
    document.querySelector("#total-person").innerText = 0;
    document.getElementById("input-bill").value = null;
    document.getElementById("input-custom").value = null;
    document.getElementById("input-people").value = null;}