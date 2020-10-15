//Put the first field in the `focus` state
const nameInput = document.querySelector('#name');
nameInput.focus();

// Hide/Display 'Other' input field

 var otherJobInput = document.getElementById('other-title');
 var jobRoles = document.querySelector('select[id="title"]');
 var otherJobInput = document.querySelector('input[name=“job_role_other”]');
 otherJobInput.style.display = 'none';

    jobRoles.addEventListener('change',() => {
        var other = jobRoles[5];
        console.log(other);
        if (other.selected === true) {
            otherJobInput.style.display = 'block';
        } else {
            otherJobInput.style.display = 'none';

        }

    });

// }
// hideOther();


// Set basic text option to color field 

const colorSelect= document.querySelector('#color');
const pleaseSelectTshirt = document.createElement('option');

pleaseSelectTshirt.innerText = "Please Select a T-Shirt Theme";
pleaseSelectTshirt.setAttribute('value', 'select_a_TS_Theme');

colorSelect.prepend(pleaseSelectTshirt);
colorSelect[0].selected = true;

// Hide colors if no design selected
function hideColors() {

    if (colorSelect[0].selected = true) {
        for(let i = 1; i < colorSelect.length; i++) {
            colorSelect[i].style.display = 'none';
        }
    }
    

}
hideColors();

// Show Color depending of which design is selected 

const design = document.getElementById('design');
    
design.addEventListener('change', () => {
        var designPuns = design[1];
        var designHeart = design[2];

        if (designPuns.selected == true) {
            colorSelect[0].style.display = "none";
             for(let i = 1; i <= 3; i++) {
                colorSelect[i].style.display = "block";
         }
             for(let j = 4; j <= 6; j++) {
                colorSelect[j].style.display = "none";
        }
    }

        if (designHeart.selected == true) {
            colorSelect[0].style.display = "none";
            for(let i = 1; i <= 3; i++) {
                colorSelect[i].style.display = "none";
            }
            for(let j = 4; j <= 6; j++) {
                colorSelect[j].style.display = "block";
            }
        }
    });
    
// Register for Activities Section: Additioning Total $ & Disabling conflicting Activites

const activitySection = document.querySelector('fieldset[class="activities"]');

const activityInput = document.querySelectorAll('.activities input');
var input = document.querySelectorAll('input[type="checkbox"]');

let costDisplay = document.createElement('span')
costDisplay.setAttribute('name', 'total');
activitySection.append(costDisplay);
let totalActivityCost = 0;

activitySection.addEventListener('change', (e) => {
  var clicked = e.target;
  var clickedType = clicked.getAttribute('data-day-and-time');
  console.log(clickedType);


    //Checkbox 
  for (let j = 0; j < activityInput.length; j++) {
      var checkboxType = activityInput[j].getAttribute('data-day-and-time');
      if (clickedType === checkboxType && clicked !== activityInput[j]) {   
        if(clicked.checked) {
            activityInput[j].disabled = true;
        } else {
            activityInput[j].disabled = false;
        }
      }
  }

  
  var inputAttr = clicked.getAttribute('data-cost');
  function totalSum() {
    totalActivityCost = 0;
    for (let i = 0; i < 7; i++) {
      if (input[i].checked === true) {
        totalActivityCost = totalActivityCost +  parseInt(input[i].getAttribute('data-cost'), 10);
      }
    }
  }

     
      totalSum();
      costDisplay.innerText = "Total: $ " + totalActivityCost;


});





// Payment Info 

const paymentSelect = document.querySelector('select[id="payment"]');
const paypalPayment = document.getElementById('paypal');
const bitCoinPayment = document.getElementById('bitcoin');
const cardPayment = document.getElementById('credit-card');

paymentSelect[0].style.display = 'none';
paymentSelect[1].selected = true;
bitCoinPayment.style.display = 'none';
paypalPayment.style.display = 'none';

paymentSelect.addEventListener('change', () => {
    var cardSelect = paymentSelect[1];
    var paypalSelect = paymentSelect[2];
    var bitCoinSelect = paymentSelect[3];

    if(cardSelect.selected === true) {
        cardPayment.style.display = 'block';
        bitCoinPayment.style.display = 'none';
        paypalPayment.style.display = 'none';
    
    } else if (paypalSelect.selected === true) {
        cardPayment.style.display = 'none';
        paypalPayment.style.display = 'block';
        bitCoinPayment.style.display = 'none';
        
     } else if (bitCoinSelect.selected === true) {
        cardPayment.style.display = 'none';
        paypalPayment.style.display = 'none';
        bitCoinPayment.style.display = 'block';
     }


});

// Form Validation 

const form = document.querySelector("form");
const name = document.getElementById('name');
const email = document.getElementById('mail');
const cardNum = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvv = document.getElementById('cvv');



const nameValidator = () => {
    let nameValue = name.value;
    if (nameValue.length > 0) {
        return true;
    } else {
        return false;
    }
}

const emailValidator = () => {
    let emailValue = email.value;
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    emailRegex.test(emailValue);
    let atI = emailValue.indexOf('@');
    let pointI = emailValue.indexOf('.');
    if (atI > 0 && pointI > 0) {
        return true;
    } else {
        return false;
    }

}

const activitiesValidator = () => {
    const checkedInput = [];
          for (let i = 0; i < activityInput.length; i ++) {
              if (activityInput[i].checked === true) {
                  checkedInput.push(activityInput[i]);
              }
          }
  
          return checkedInput
  }
  


const cardNumValidator = () => {
    let cardNumValue = cardNum.value;
    let cardNumRegex = /[0-9]{12}(?:[0-9]{3})?$/;
    cardNumRegex.test(cardNumValue);


    let zipCodeValue = zipCode.value;
    const zipCodeRegex = /^\d{5}$/;
  

    let cvvValue = cvv.value; 
    let cvvRegex = /^[0-9]{3}$/;

   
    if (cardNumRegex.test(cardNumValue) === true && zipCodeRegex.test(zipCodeValue) === true && cvvRegex.test(cvvValue) === true ) {
        return true;
    } else {
        return false; 
    }
    
}

form.addEventListener('submit', (e) => {

    nameValidator();  

   if(!nameValidator()) {
        e.preventDefault();
        alert('Please type a name.');
    }

    emailValidator();

    if(!emailValidator()) {
        e.preventDefault();
        alert('Please type a valid email address.');

    }

    activitiesValidator();

    if (activitiesValidator().length <= 0) {
        e.preventDefault();
        alert('Please select at least one activity.');
    }
    
    cardNumValidator();

    if(!cardNumValidator() && paymentSelect[1].selected == true ) {
        e.preventDefault();
        alert('Please check your Card infos. \n Card Number must be 13 - 16 digits. \n ZIP Code must be 5 digits. \n CVV 3 must be digits.');
    }


 console.log('Submit handler is functional!');

});