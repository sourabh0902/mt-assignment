  // Error System
  document.getElementById("myForm").onsubmit = function () {
    var x = document.forms["myForm"]["first_name"].value;
    var z = document.forms["myForm"]["email"].value;
    var a = document.forms["myForm"]["mobile_code"].value;
    var b = document.forms["myForm"]["feedback"].value;

    var submit = true;

    if (x == null || x == "") {
        firstnameError = "First Name is required";
        document.getElementById("firstname_error").innerHTML = firstnameError;
        submit = false;
    }


    if (z == null || z == "") {
        emailError = "Email is required";
        document.getElementById("email_error").innerHTML = emailError;
        submit = false;
    }
    
    if (a == null || z == "") {
        telephoneError = "Phone is required";
        document.getElementById("telephone_error").innerHTML = telephoneError;
        submit = false;
    }
    
    if (b == null || z == "") {
        feedbackError = "is required";
        document.getElementById("feedback_error").innerHTML = feedbackError;
        submit = false;
    }

    return submit;
}

function clearWarning() {
    document.getElementById(`${this.id}_error`).innerHTML = "";
}

window.load = clearWarning;
document.getElementById("first_name").onkeyup = clearWarning;
document.getElementById("email").onkeyup = clearWarning;
document.getElementById("mobile_code").onkeyup = clearWarning;
document.getElementById("feedback").onkeyup = clearWarning;


// Star Rating System
const starIcons = document.querySelectorAll(".stars i");
let selectedRating = null; 

document.addEventListener("DOMContentLoaded", function () {
    starIcons.forEach((star, index) => {
        star.addEventListener("mouseenter", function () {
            if (selectedRating === null) {
                for (let i = 0; i <= index; i++) {
                    starIcons[i].style.color = "#f2b600";
                }
            }
        });

        star.addEventListener("mouseleave", function () {
            if (selectedRating === null) {
                starIcons.forEach((star) => {
                    star.style.color = "#a5a5a5bb";
                });
            }
        });

        star.addEventListener("click", function () {
            selectedRating = index; 
        });
    });
});


// -----Country Code Selection
var phone_number = window.intlTelInput(document.querySelector("#mobile_code"), {
    separateDialCode: true,
    preferredCountries:["in"],
    hiddenInput: "full",
    utilsScript: "//cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.js"
  });
  
  $("form").submit(function() {
    var full_number = phone_number.getNumber(intlTelInputUtils.numberFormat.E164);
  $("input[name='phone_number[full]'").val(full_number);
    alert(full_number)    
  });
  
// Form Popup
const starsToShowForm = document.querySelectorAll(".stars i");

starsToShowForm.forEach((star, index) => {
    star.addEventListener("click", function () {
        if (index < 3) { 
            document.querySelector(".overlay").style.display = "block";
        }
    });
});

//Form closing 
const closeButton = document.querySelector(".closeModel #close");

closeButton.addEventListener("click", function () {
    document.querySelector(".overlay").style.display = "none";
});



